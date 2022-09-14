function CardPic({ classImg, pics }) {
  return (
    <div className="img-review-rest">
      {pics?.map((el, idx) => (
        <img
          key={idx}
          className={`${classImg} me-3`}
          src={el?.reviewPic}
          alt="place"
        />
      ))}
    </div>
  );
}

export default CardPic;
