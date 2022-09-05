import React from "react";
import { Image } from "./icons";

function PlaceForm({ title }) {
  return (
    <>
      <h1 className="m-5">{title || "เพิ่มร้าน/สถานที่"}</h1>
      <div className="form-size">
        <form className="bg-white border border-dark rounded-2">
          <div className="d-flex w-100 justify-content-around pt-5 fs-1v ps-35">
            <div>
              <input type="radio" id="retaurant" name="category" />
              <label className="me-3 ms-1">
                ร้านอาหาร/คาเฟ่(Restaurant & Cafe)
              </label>
            </div>

            <div>
              <input type="radio" id="street-food" name="category" />
              <label className="me-3 ms-1">อาหารริมทาง (Street Food)</label>
            </div>

            <div>
              <input type="radio" id="nightlife" name="category" />
              <label className="me-3 ms-1">สถานบันเทิง(NightLife)</label>
            </div>

            <div>
              <input type="radio" id="attraction" name="category" />
              <label className="me-3 ms-1">
                สถานที่ท่องเที่ยว(Attractions)
              </label>
            </div>
          </div>

          <div className="d-flex flex-column mx-5 my-4">
            <div className="d-flex flex-column">
              <label className="fs-5">ชื่อร้าน*</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ชื่อร้าน"
              />

              <h5>อัตราค่าบริการ*</h5>
              <div className="d-flex">
                <label className="fs-5 ms-3">ผู้ใหญ่: </label>
                <input type="text" className="rounded-2 ms-3 wh-50 me-3" />{" "}
                บาท/ต่อคน
              </div>
              <div className="d-flex my-3">
                <label className="fs-5 ms-3">เด็ก: </label>
                <input type="text" className="rounded-2 ms-44 wh-50 me-3" />
                บาท/ต่อคน
              </div>

              <label className="fs-5">ช่วงราคา*</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="หมายเหตุค่าบริการ เช่น ส่วนสูงไม่เกิน 120 เข้าฟรี, อายุ 60 ปีขึ้นไป ลด 50%"
              />

              <label className="fs-5">เงื่อนไข</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ช่วงราคา เช่น ต่ำกว่า 500, 500-1000, มากกว่า 1000 ฯลฯ"
              />

              <label className="fs-5">ที่อยู่*</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="เขียนที่อยู่ของร้าน (ถ้าทราบ) ดังนี้ บ้านเลขที่ ถนน แขวง เขต เป็นต้น"
              />

              <label className="fs-5">จังหวัด*</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="เลือกจังหวัด"
              />

              <label className="fs-5">เส้นทางแนะนำ</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="เส้นทางหรือจุดสังเกตในการเดินทาง"
              />

              <label className="fs-5">เบอร์ติดต่อ</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ถ้ามีหลายเบอร์คั่นด้วย"
              />

              <label className="fs-5">Website ร้าน</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ตัวอย่าง: https://www.sample.com"
              />

              <label className="fs-5">วันให้บริการ</label>
              <select className="rounded-2 input-size my-3">
                <option value="">วัน</option>
                <option value="">จันทร์</option>
                <option value="">อังคาร</option>
                <option value="">พุธ</option>
                <option value="">พฤหัส</option>
                <option value="">ศุกร์</option>
                <option value="">เสาร์</option>
                <option value="">อาทิตย์</option>
                <option value="">ทุกวัน</option>
              </select>

              <label className="fs-5">เวลาเปิด-ปิด</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="ตัวอย่าง: 08.00 - 22.00"
              />

              <div className="d-flex justify-content-between bs-size fs-5 ">
                <h5 className="wifi">Wifi:</h5>
                <div className="ms-46">
                  <input
                    type="radio"
                    className="me-1"
                    id="wifi"
                    name="accessory"
                  />
                  <label className="me-5">มี</label>
                </div>

                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="non-wifi"
                    name="accessory"
                  />
                  <label> ไม่มี</label>
                </div>
              </div>

              <div className="d-flex justify-content-between bs-size fs-5 ">
                <h5 className="parking">ที่จอดรถ:</h5>
                <div className="ms-43">
                  <input
                    type="radio"
                    className="me-1"
                    id="parking"
                    name="park"
                  />
                  <label className="me-5">มี</label>
                </div>

                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="non-parking"
                    name="park"
                  />
                  <label> ไม่มี</label>
                </div>
              </div>

              <div className="d-flex justify-content-between  bs-size fs-5">
                <h5 className="reserve">จองล่วงหน้า:</h5>
                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="reserve"
                    name="reserve"
                  />
                  <label className="me-5">มี</label>
                </div>

                <div>
                  <input
                    type="radio"
                    className="me-1"
                    id="non-reserve"
                    name="reserve"
                  />
                  <label> ไม่มี</label>
                </div>
              </div>

              <label className="fs-4 pt-3">รูป</label>
              <div className="d-flex mt-3 py-3" role="button">
                <div className="text-start bg-secondary p-2 position-relative img-size me-3"></div>

                <div className="rounded-pill rounded-size text-center bg-warning">
                  <p className="text-white">Choose File</p>
                  <p className="word">ไฟล์ JPG หรือ PNG</p>
                </div>

                <input type="file" className="d-none" />
                <div className="add-btn d-flex flex-grow-1 justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-4 p-3 mb-25"
                  >
                    <Image />
                    <span className="ms-3">เพิ่มรูป</span>
                  </button>
                </div>
              </div>

              <label className="fs-5">ข้อมูลเพิ่มเติม</label>
              <input
                type="text"
                className="rounded-2 input-size my-3"
                placeholder="เช่น ร้านปิดทุกวันเสาร์, จอดรถในห้างได้ฟรี 2 ชั่วโมง ฯลฯ"
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
