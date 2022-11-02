function CardPic({ classImg, pics }) {
  return (
    <>
      {pics?.map((el, idx) => (
        <img
          key={idx}
          className={`${classImg} me-3`}
          src={el?.reviewPic}
          alt="place"
        />
      ))}
    </>
  );
}

export default CardPic;
