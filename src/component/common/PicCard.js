function PicCard({ src, size, tooltip }) {
  return (
    <>
      <img src={src} className={size} alt={tooltip} />
    </>
  );
}

export default PicCard;
