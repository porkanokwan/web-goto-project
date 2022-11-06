import { Location } from "../../icons";
import StarRating from "../common/StarRating";
import Carousel from "../ui/Carousel";
import { Link, useNavigate, useParams } from "react-router-dom";
import Map from "./maps/Map";
import { geocode } from "../../api/mapApi";
import { useContext, useEffect, useState } from "react";
import { useError } from "../../context/ErrorContext";
import { deletePlace } from "../../api/placeApi";
import SpinnerGrow from "../common/SpinnerGrow";
import { useHome } from "../../context/HomeContext";
import { AuthContext } from "../../context/AuthContext";

function PlaceContent({ setEditPlace, place }) {
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(false);
  const address =
    place?.name + " " + place?.address + " " + place?.Province.name;
  const { setError } = useError();
  const { places, setPlace } = useHome();
  const { placeId } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const res = await geocode(address);
        setMap(res.data.results[0]);
      } catch (err) {}
    };

    fetchMap();
  }, [place?.address]);
  console.log(place?.star);
  const handleDeletePlace = async () => {
    try {
      setLoading(true);
      await deletePlace(placeId);
      const newPlaces = { ...places };
      const idx = newPlaces[place?.Category?.name].findIndex(
        (el) => el.id === Number(placeId)
      );
      newPlaces[place?.Category?.name].splice(idx, 1);
      setPlace(newPlaces);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <SpinnerGrow />;
  return (
    <>
      <div className="p-5">
        <h1>{place?.name}</h1>
        <StarRating star={place?.star} size="fs-3" disable={true} mt="mt-3" />
      </div>

      <Carousel placePic={place?.PlacePics} />

      <div className="d-flex justify-content-center mt-5 m-box">
        <div className="w-box d-flex flex-column bg-lightgrey rounded mb-5 mr-15">
          <div className="box-direct d-flex">
            <Map
              category={place?.Category.name}
              lat={map?.geometry.location.lat || 0}
              lng={map?.geometry.location.lng || 0}
            />
            <div className="d-flex flex-column mx-3">
              <h4 className="mt-3">
                <Location opacity={50} /> ที่ตั้ง
              </h4>
              <p>{place?.address || ""}</p>
              <p>{place?.recommendRoute}</p>

              <h4>
                <i className="fa-solid fa-phone text-secondary me-2" />
                เบอร์ติดต่อ
              </h4>
              <p>{place?.phoneNumber || "-"}</p>

              {place?.website && (
                <>
                  <h4>
                    <i className="fa-solid fa-phone text-secondary me-2" />
                    Website
                  </h4>
                  <Link
                    to={place?.website}
                    className="text-dark text-decoration-none"
                  >
                    <p>{place?.website}</p>
                  </Link>
                </>
              )}

              {place?.Category.name !== "Attractions" && (
                <Link
                  to={`/menu/${place?.id}`}
                  className="fs-4 text-dark text-decoration-none"
                >
                  <i className="fa-solid fa-utensils text-secondary me-2" />
                  เมนู
                </Link>
              )}
            </div>
          </div>

          <div className="mx-3">
            <h4>ข้อมูลเพิ่มเติม</h4>
            <p>{place?.other || "-"}</p>
          </div>
        </div>

        <div className="d-flex flex-column ms-5 w-300 place-box">
          <div className="bg-lightgrey rounded">
            <h4 className="pt-3 ps-3">เวลาเปิด-ปิด</h4>
            <div className="d-flex justify-content-between w-100 text-day">
              <p className="text-grey ms-3">{place?.day || ""}</p>
              <p className="text-grey me-3">{place?.openClose || ""}</p>
            </div>

            <div>
              <i
                className={`fa-solid ${
                  place?.wifi ? "fa-check text-success" : "fa-close text-danger"
                } fs-3 ms-3`}
              />
              <span className="ms-3">Wifi</span>
            </div>
            <div>
              <i
                className={`fa-solid ${
                  place?.parking
                    ? "fa-check text-success"
                    : "fa-close text-danger"
                } fs-3 ms-3`}
              />
              <span className="ms-3">ที่จอดรถ</span>
            </div>
            <div>
              <i
                className={`fa-solid ${
                  place?.reserve
                    ? "fa-check text-success"
                    : "fa-close text-danger"
                } fs-3 ms-3`}
              />
              <span className="ms-3">จองล่วงหน้า</span>
            </div>

            <div>
              {place?.Category.name === "Attractions" ? (
                <>
                  <h4 className="pt-3 ps-3">ค่าเข้าสถานที่</h4>
                  <p className="text-grey ms-3">
                    ผู้ใหญ่
                    <span className="text-grey ms-5">
                      {place?.adultPrice || "ฟรี"}
                    </span>
                  </p>

                  <p className="text-grey ms-3">
                    เด็ก
                    <span className="text-grey ms-5">
                      {place?.childPrice || "ฟรี"}
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <h4 className="pt-3 ps-3">ช่วงราคา</h4>
                  <p className="text-grey ms-3">{place?.ratePrice || "-"}</p>
                </>
              )}
            </div>

            <div>
              <h4 className="pt-3 ps-3">เงื่อนไข</h4>
              <p className="text-grey ms-3">{place?.condition || "-"}</p>
            </div>
          </div>

          <div
            role="button"
            className="mt-3 bg-lightgrey rounded text-center"
            onClick={() => {
              user ? setEditPlace(true) : navigate("/login");
            }}
          >
            <i className="fa-solid fa-pencil" />
            แก้ไขข้อมูล
          </div>
          <div
            role="button"
            className="mt-3 bg-lightgrey rounded text-center mb-5"
            onClick={handleDeletePlace}
          >
            <i className="fa-solid fa-trash" />
            ลบข้อมูล
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceContent;
