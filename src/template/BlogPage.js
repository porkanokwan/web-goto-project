import { Like, Location } from "./icons";
import ProfileIcon from "./layout/header/ProfileIcon";

function BlogPage() {
  return (
    <div className="bg-white w-mt">
      <div className="d-flex flex-column p-5">
        <h3>20 ร้านอาหาร Street Food เจ้าดังใน กทม. ที่ต้องไปโดนนนน</h3>
        <div className="d-flex">
          <div className="d-flex mt-3">
            <ProfileIcon size={70} mt={48} />
          </div>

          <div className="d-flex">
            <div className="fs-5 ps-3 pt-65">
              <Location opacity={50} />
              <span className="destination color-subtitle fs-6 ">
                อาหารริมทาง, กรุงเทพ
              </span>
            </div>
            <p className="ms-3 mt-2 fs-6 text-secondary opacity-50 pt-65">
              DEC 19, 2022
            </p>
          </div>

          <div className="d-flex flex-grow-1 justify-content-end pt-70 fs-5">
            <Like mt={5} />
            10
          </div>
        </div>

        <p className="my-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>

        <div className="text-center my-4">
          <h5>01 ร้านหม่าล่า</h5>
          <img
            src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
            width="1000px"
            height="600px"
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>

        <div className="text-center my-4">
          <h5>02 ร้านหม่าล่า</h5>
          <img
            src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
            width="1000px"
            height="600px"
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
      </div>
    </div>
  );
}

export default BlogPage;
