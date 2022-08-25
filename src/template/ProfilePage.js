import React, { useState } from "react";

function ProfilePage() {
  const [chagePasswordOpen, setChagePasswordOpen] = useState(false);

  return (
    <>
      <div>
        <div className="d-flex p-5 wd-450 fd-column">
          <div className="d-flex flex-column w-25 text-center">
            <img
              src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659411545/oifge8vr1woptedabvft.jpg"
              alt="profile picture"
              className="pic-size"
            />
            <div className="w-100 ms-5 ms-ep-5" role="button">
              <p className="text-primary text-decoration-underline">
                edit profile
              </p>
              <input type="file" className="d-none" />
            </div>
          </div>

          <div className="mr-p-80 d-flex flex-column ms-150 mt-5 w-100">
            <div className="d-flex">
              <h4 className="fw-bold">ชื่อ-นามสกุล:</h4>
              <p className="ms-3 fs-5">John Doe</p>

              <div className="d-flex flex-grow-1 justify-content-end">
                <p className="text-primary mt-1">แก้ไข</p>
              </div>
            </div>
            <hr className="w-100 mt-0" />

            <div className="d-flex">
              <h4 className="fw-bold">อีเมล:</h4>
              <p className="ms-3 fs-5">...</p>

              <div className="d-flex flex-grow-1 justify-content-end">
                <p className="text-primary mt-1">แก้ไข</p>
              </div>
            </div>
            <hr className="w-100 mt-0" />

            <div className="d-flex">
              <h4 className="fw-bold">เบอร์โทรศัพท์:</h4>
              <p className="ms-3 fs-5">084xxxxxxx</p>

              <div className="d-flex flex-grow-1 justify-content-end">
                <p className="text-primary mt-1">แก้ไข</p>
              </div>
            </div>
            <hr className="w-100 mt-0" />

            <div className="d-flex mt-5">
              <h4 className="fw-bold">เกี่ยวกับฉัน:</h4>

              <div className="d-flex flex-grow-1 justify-content-end">
                <p className="text-primary mt-1">แก้ไข</p>
              </div>
            </div>
            <hr className="w-100 mt-0" />
            <p className="ms-3 fs-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex eat.
            </p>

            <div className="d-flex mt-5">
              <h4 className="fw-bold">รหัสผ่าน:</h4>

              <div className="d-flex flex-grow-1 justify-content-end">
                <div
                  className="password text-primary mt-1 active"
                  role="button"
                  onClick={() => setChagePasswordOpen(true)}
                >
                  เปลี่ยนรหัสผ่าน
                </div>
              </div>
            </div>
            <hr className="w-100 mt-0" />

            {chagePasswordOpen && (
              <form>
                <div className="d-flex flex-column mb-3">
                  <label>รหัสผ่านปัจจุบัน*</label>
                  <input
                    type="text"
                    className="rounded-3 input-size"
                    placeholder="รหัสผ่านปัจจุบัน"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label>รหัสผ่านใหม่*</label>
                  <input
                    type="text"
                    className="rounded-3 input-size"
                    placeholder="รหัสผ่านใหม่"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label>ยืนยันรหัสผ่าน*</label>
                  <input
                    type="text"
                    className="rounded-3 input-size"
                    placeholder="ยืนยันรหัสผ่าน"
                  />
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-primary rounded-0 me-3"
                    onClick={() => setChagePasswordOpen(false)}
                  >
                    บันทึก
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary rounded-0 me-3"
                    onClick={() => setChagePasswordOpen(false)}
                  >
                    ยกเลิก
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
