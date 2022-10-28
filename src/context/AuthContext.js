import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";
import { deleteToken, getToken, setToken } from "../service/localStorage";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useError } from "./ErrorContext";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { setError } = useError();
  const [tokenQuery, setTokenQuery] = useSearchParams();

  useEffect(() => {
    const fecthProfile = async () => {
      try {
        const token = getToken();
        if (token) {
          const res = await axios.get("/profile");
          setUser(res.data.user);
        }

        if (location.pathname !== "/reset-password") {
          navigate("/");
        }
      } catch (err) {
        setError(err.response.data.message);
        deleteToken();
        navigate("/");
      }
    };

    fecthProfile();
  }, []);

  const signup = async (input) => {
    try {
      const res = await axios.post("/auth/register", input);
      setToken(res.data.token);
      const resProfile = await axios.get("/profile");
      setUser(resProfile.data.user);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const login = async (input) => {
    try {
      const res = await axios.post("/auth/login", input);
      setToken(res.data.token);
      const resProfile = await axios.get("/profile");
      setUser(resProfile.data.user);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
      deleteToken();
    }
  };

  const logout = () => {
    deleteToken();
    setUser("");
    navigate("/");
  };

  const forgot = async (email) => {
    const res = await axios.patch("/auth/forgot-password", { email });
    setToken(res.data.token);
  };

  const reset = async (input) => {
    const res = await axios.patch(
      `/auth/reset-password?token=${tokenQuery.get("token")}`,
      input
    );
    setToken(res.data.token);
  };

  return (
    <AuthContext.Provider
      value={{ user, signup, login, logout, forgot, reset }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
export { AuthContext };
