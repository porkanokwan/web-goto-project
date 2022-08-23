import { Location } from "./icons";
import StarRating from "./StarRating";
import Carousel from "./ui/Carousel";

function PlaceContent({ setEditPlace }) {
  return (
    <>
      <div className="p-5">
        <h1>Name Place</h1>
        <StarRating star={3} size="fs-3" />
      </div>

      <Carousel />

      <div className="d-flex justify-content-center mt-5">
        <div className="d-flex flex-column bg-lightgrey rounded mb-5">
          <div className="d-flex">
            <div>Maps</div>
            <div className="d-flex flex-column ms-3">
              <h4>
                <Location opacity={50} /> ที่ตั้ง
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>

              <h4>
                <i className="fa-solid fa-phone text-secondary me-3" />
                เบอร์ติดต่อ
              </h4>
              <p>084xxxxxxx</p>
            </div>
          </div>

          <div>
            <h4>ข้อมูลเพิ่มเติม</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>

        <div className="d-flex flex-column ms-5 w-300">
          <div className="bg-lightgrey rounded">
            <h4 className="pt-3 ps-3">เวลาเปิด-ปิด</h4>
            <div className="d-flex justify-content-between w-100">
              <p className="text-grey ms-3">ทุกวัน</p>
              <p className="text-grey me-3">08.00-16.00</p>
            </div>

            <div>
              <i className="fa-solid fa-check fs-3 ms-3 text-success" />
              <span className="ms-3 fs-5">Wifi</span>
            </div>
            <div>
              <i className="fa-solid fa-close fs-3 ms-3 text-danger" />
              <span className="ms-3 fs-5">ที่จอดรถ</span>
            </div>
            <div>
              <i className="fa-solid fa-close fs-3 ms-3 text-danger" />
              <span className="ms-3 fs-5">จองล่วงหน้า</span>
            </div>

            <div>
              <h4 className="pt-3 ps-3">ค่าเข้าสถานที่</h4>
              <p className="text-grey ms-3">
                ผู้ใหญ่ <span className="text-grey ms-3">ฟรี</span>
              </p>

              <p className="text-grey ms-3">
                เด็ก <span className="text-grey ms-5">ฟรี</span>
              </p>
            </div>

            <div>
              <h4 className="pt-3 ps-3">เงื่อนไข</h4>
              <p className="text-grey ms-3">นั่งเข้า 30 บาท</p>
            </div>
          </div>

          <div
            role="button"
            className="mt-3 bg-lightgrey rounded text-center"
            onClick={() => setEditPlace(true)}
          >
            <i className="fa-solid fa-pencil" />
            แก้ไขข้อมูล
          </div>
          <div
            role="button"
            className="mt-3 bg-lightgrey rounded text-center mb-5"
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
