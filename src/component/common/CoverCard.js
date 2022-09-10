import defaultCover from "../../img/thailand.jpg";

function CoverCard({ coverPic, title, titleShow = true, size = "", text }) {
  return (
    <>
      <img
        className={"coverHome position-relative" + size}
        src={coverPic || defaultCover}
        alt="coverPicture"
      />
      {titleShow && (
        <h1 className={`title text-white fw-bold position-absolute ${text}`}>
          {title || " DISCOVER STORY-WORTHY PLACE"}
        </h1>
      )}
    </>
  );
}

export default CoverCard;
