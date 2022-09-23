import { createContext, useContext, useState, useEffect } from "react";
import { getAllPlace } from "../api/placeApi";
import axios from "../config/axios";
import { useError } from "./ErrorContext";

const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [category, setCategory] = useState(null);
  const [province, setProvince] = useState(null);
  const [places, setPlace] = useState(null);
  const [open, setOpen] = useState(false);
  const { setError } = useError();

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await getAllPlace();
        setPlace(res.data.allplace);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchPlace();
  }, [open]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("/select/category");
        setCategory(res.data.category);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchProvince = async () => {
      try {
        const res = await axios.get("/select/province");
        setProvince(res.data.province);
      } catch (err) {
        setError(err.response.data.message);
      }
    };
    fetchProvince();
  }, []);
  console.log(places);
  return (
    <HomeContext.Provider
      value={{ category, province, places, setPlace, setOpen }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHome = () => {
  const ctx = useContext(HomeContext);
  return ctx;
};
