import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createPlace } from "../../../api/placeApi";
import { useError } from "../../../context/ErrorContext";
import { useHome } from "../../../context/HomeContext";
import { updatedPlace } from "../../../store/place";
import { validatePlaceForm } from "../../../validate/validate";
import AddPhoto from "../../common/AddPhoto";
import ChooseCategory from "../../common/ChooseCategory";
import SpinnerGrow from "../../common/SpinnerGrow";
import SelectDestination from "../../layout/header/SelectDestination";

function PlaceForm({ title, place, arrPic, setEditPlace }) {
  const [placeForm, setPlaceForm] = useState({
    categoryId: place?.Category?.id || "",
    provinceId: place?.Province?.id || "",
    name: place?.name || "",
    adultPrice: place?.adultPrice || 0,
    childPrice: place?.childPrice || 0,
    ratePrice: place?.ratePrice || "",
    address: place?.address || "",
    recommendRoute: place?.recommendRoute || "",
    phoneNumber: place?.phoneNumber || "",
    website: place?.website || "",
    day: place?.day || "",
    openClose: place?.openClose || "",
    wifi: place?.wifi,
    parking: place?.parking,
    reserve: place?.reserve,
    condition: place?.condition || "",
    other: place?.other || "",
  });
  const [placePic, setPlacePic] = useState(arrPic || []);
  const [number, setNumber] = useState(arrPic || [1]);
  const [errorPlace, setErrorPlace] = useState({
    errName: "",
    errCategory: "",
    errProvince: "",
    errWifi: "",
    errParking: "",
    errReserve: "",
    errAddress: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setError } = useError();
  const { places, setPlace } = useHome();
  const { placeId } = useParams();
  const dispatch = useDispatch();

  const chooseCategory = (e) => {
    setPlaceForm((prev) => ({ ...prev, categoryId: e.target.value }));
  };

  const handleSubmitPlaceForm = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (placeId) {
        dispatch(updatedPlace(placeForm, placePic, placeId));
        setEditPlace(false);
      } else {
        validatePlaceForm(
          placeForm.categoryId,
          placeForm.provinceId,
          placeForm.name,
          placeForm.wifi,
          placeForm.parking,
          placeForm.reserve,
          placeForm.address,
          setErrorPlace
        );
        const res = await createPlace(placeForm, placePic);
        const newPlaces = { ...places };
        newPlaces[res.data.place?.Category?.name] = [
          ...newPlaces[res.data.place?.Category?.name],
          res.data.place,
        ];
        setPlace(newPlaces);
        navigate(`/place/${res.data.place?.id}`);
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <SpinnerGrow />;
  return (
    <>
      <h1 className="m-5">{title || "เพิ่มร้าน/สถานที่"}</h1>
      <div className="form-size">
        <form
          className="bg-white border border-dark rounded-2"
          onSubmit={handleSubmitPlaceForm}
        >
          <div className="d-flex w-100 justify-content-around pt-5 fs-1v ps-35">
            <ChooseCategory
              onChange={chooseCategory}
              categoryId={placeForm.categoryId}
            />
          </div>

          <div className="d-flex flex-column mx-5 my-4">
            <div className="d-flex flex-column">
              <label className="fs-5">ชื่อร้าน*</label>
              <input
                type="text"
                className={`rounded-2 input-size my-3 ${
                  errorPlace.errName && "is-invalid"
                }`}
                placeholder="ชื่อร้าน"
                value={placeForm.name}
                onChange={(e) =>
                  setPlaceForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              {errorPlace.errName && (
                <small className="invalid-feedback">{errorPlace.errName}</small>
              )}
              {placeForm.categoryId == "1" ? (
                <>
                  <h5>อัตราค่าบริการ</h5>
                  <div className="d-flex">
                    <label className="fs-5 ms-3">ผู้ใหญ่: </label>
                    <input
                      type="text"
                      className="rounded-2 ms-3 wh-50 me-3"
                      value={placeForm.adultPrice}
                      onChange={(e) =>
                        setPlaceForm((prev) => ({
                          ...prev,
                          adultPrice: e.target.value,
                        }))
                      }
                    />
                    บาท/ต่อคน
                  </div>
                  <div className="d-flex my-3">
                    <label className="fs-5 ms-3">เด็ก: </label>
                    <input
                      type="text"
                      className="rounded-2 ms-44 wh-50 me-3"
                      value={placeForm.childPrice}
                      onChange={(e) =>
                        setPlaceForm((prev) => ({
                          ...prev,
                          childPrice: e.target.value,
                        }))
                      }
                    />
                    บาท/ต่อคน
                  </div>
                </>
              ) : (
                <>
                  <label className="fs-5">ช่วงราคา</label>
                  <input
                    type="text"
                    className="rounded-2 input-size my-3"
                    placeholder="ช่วงราคา เช่น ต่ำกว่า 500, 500-1000, มากกว่า 1000 ฯลฯ"
                    value={placeForm.ratePrice}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        ratePrice: e.target.value,
                      }))
                    }
                  />
                </>
              )}

              <label className="fs-5">เงื่อนไข</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="หมายเหตุค่าบริการ เช่น ส่วนสูงไม่เกิน 120 เข้าฟรี, อายุ 60 ปีขึ้นไป ลด 50%"
                value={placeForm.condition}
                onChange={(e) =>
                  setPlaceForm((prev) => ({
                    ...prev,
                    condition: e.target.value,
                  }))
                }
              />

              <label className="fs-5">ที่อยู่*</label>
              <input
                type="text"
                className={`rounded-2 input-size my-3 ${
                  errorPlace.errAddress && "is-invalid"
                }`}
                placeholder="เขียนที่อยู่ของร้าน/สถานที่ เช่น แขวงตลาดยอด เขตพระนคร กรุงเทพมหานคร ประเทศไทย"
                value={placeForm.address}
                onChange={(e) =>
                  setPlaceForm((prev) => ({ ...prev, address: e.target.value }))
                }
              />
              {errorPlace.errAddress && (
                <small className="invalid-feedback">
                  {errorPlace.errAddress}
                </small>
              )}
              <label className="fs-5">จังหวัด*</label>
              <SelectDestination
                size="my-2"
                provinceId={placeForm.provinceId}
                firstOption="เลือกจังหวัด"
                onChange={(e) =>
                  setPlaceForm((prev) => ({
                    ...prev,
                    provinceId: e.target.value,
                  }))
                }
              />
              {errorPlace.errProvince && (
                <small className="invalid-feedback">
                  {errorPlace.errProvince}
                </small>
              )}

              <label className="fs-5">เส้นทางแนะนำ</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="เส้นทางหรือจุดสังเกตในการเดินทาง"
                value={placeForm.recommendRoute}
                onChange={(e) =>
                  setPlaceForm((prev) => ({
                    ...prev,
                    recommendRoute: e.target.value,
                  }))
                }
              />

              <label className="fs-5">เบอร์ติดต่อ</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ถ้ามีหลายเบอร์คั่นด้วย ,"
                value={placeForm.phoneNumber}
                onChange={(e) =>
                  setPlaceForm((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
              />

              <label className="fs-5">Website ร้าน</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ตัวอย่าง: https://www.sample.com"
                value={placeForm.website}
                onChange={(e) =>
                  setPlaceForm((prev) => ({ ...prev, website: e.target.value }))
                }
              />

              <label className="fs-5">วันให้บริการ</label>
              <select
                className="rounded-2 input-size my-3"
                value={placeForm.day}
                onChange={(e) =>
                  setPlaceForm((prev) => ({ ...prev, day: e.target.value }))
                }
              >
                <option value="" disabled>
                  วัน
                </option>
                <option value="จันทร์-ศุกร์">จันทร์ - ศุกร์</option>
                <option value="เสาร์-อาทิตย์">เสาร์-อาทิตย์</option>
                <option value="อังคาร-อาทิตย์">อังคาร-อาทิตย์</option>
                <option value="ทุกวัน">ทุกวัน</option>
              </select>

              <label className="fs-5">เวลาเปิด-ปิด</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ตัวอย่าง: 08.00 - 22.00"
                value={placeForm.openClose}
                onChange={(e) =>
                  setPlaceForm((prev) => ({
                    ...prev,
                    openClose: e.target.value,
                  }))
                }
              />

              <div className="d-flex justify-content-between bs-size fs-5 ">
                <h5 className="wifi">Wifi* :</h5>
                <div className="ms-46">
                  <input
                    type="radio"
                    className="me-1"
                    id="wifi"
                    name="accessory"
                    value={true}
                    checked={placeForm.wifi + "" === "true"}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        wifi: e.target.value,
                      }))
                    }
                  />
                  <label className="me-5">มี</label>
                </div>

                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="non-wifi"
                    name="accessory"
                    value={false}
                    checked={placeForm.wifi + "" === "false"}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        wifi: e.target.value,
                      }))
                    }
                  />
                  <label> ไม่มี</label>
                </div>
              </div>
              {errorPlace.errWifi && (
                <small className="invalid-feedback">{errorPlace.errWifi}</small>
              )}

              <div className="d-flex justify-content-between bs-size fs-5 ">
                <h5 className="parking">ที่จอดรถ* :</h5>
                <div className="ms-43">
                  <input
                    type="radio"
                    className="me-1"
                    id="parking"
                    name="park"
                    value={true}
                    checked={placeForm.parking + "" === "true"}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        parking: e.target.value,
                      }))
                    }
                  />
                  <label className="me-5">มี</label>
                </div>

                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="non-parking"
                    name="park"
                    value={false}
                    checked={placeForm.parking + "" === "false"}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        parking: e.target.value,
                      }))
                    }
                  />
                  <label> ไม่มี</label>
                </div>
              </div>
              {errorPlace.errParking && (
                <small className="invalid-feedback">
                  {errorPlace.errParking}
                </small>
              )}

              <div className="d-flex justify-content-between  bs-size fs-5">
                <h5 className="reserve">จองล่วงหน้า* :</h5>
                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="reserve"
                    name="reserve"
                    value={true}
                    checked={placeForm.reserve + "" === "true"}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        reserve: e.target.value,
                      }))
                    }
                  />
                  <label className="me-5">มี</label>
                </div>

                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="non-reserve"
                    name="reserve"
                    value={false}
                    checked={placeForm.reserve + "" === "false"}
                    onChange={(e) =>
                      setPlaceForm((prev) => ({
                        ...prev,
                        reserve: e.target.value,
                      }))
                    }
                  />
                  <label> ไม่มี</label>
                </div>
              </div>
              {errorPlace.errReserve && (
                <small className="invalid-feedback">
                  {errorPlace.errReserve}
                </small>
              )}

              <AddPhoto
                number={number}
                setNumber={setNumber}
                picture={placePic}
                setPic={setPlacePic}
              />

              <label className="fs-5">ข้อมูลเพิ่มเติม</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="เช่น ร้านปิดทุกวันเสาร์, จอดรถในห้างได้ฟรี 2 ชั่วโมง ฯลฯ"
                value={placeForm.other}
                onChange={(e) =>
                  setPlaceForm((prev) => ({ ...prev, other: e.target.value }))
                }
              />
            </div>

            <button
              type="submit"
              className="btn btn-warning btn-post text-white fw-400 fs-5 align-self-end"
            >
              โพสต์
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PlaceForm;
