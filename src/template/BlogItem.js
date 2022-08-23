import { Like, Location } from "./icons";

function BlogItem() {
  return (
    <>
      <div className="blog-item w-100 d-flex flex-grow-1 justify-content-center">
        <div className="d-flex justify-content-center">
          <img
            className="card-img"
            src="https://res.cloudinary.com/drwgmpw3e/image/upload/v1659171006/pisol82ljjts35fjptjj.jpg"
            alt="name place"
          />
          <div className="ms-5 w-50">
            <p className="fs-2 fw-400">
              ร้านอาหารรางวัล Users Choice ใน Wongnai Bangkok Restaurant Week
              2019
            </p>
            <p className="color-subtitle fs-5">John Doe</p>
            <p className="color-subtitle fs-5">DEC 19, 2022</p>

            <div className="d-flex flex-grow-1 justify-content-between like">
              <div className="fs-3">
                <Location opacity={50} />
                <span className="destination color-subtitle fs-5">
                  อาหารริมทาง, กรุงเทพ
                </span>
              </div>

              <span className="like fs-2">
                <Like color="grey" />
                <span className="color-subtitle fs-5">10</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-75 text-dark mx-auto mb-50" />
    </>
  );
}

export default BlogItem;
