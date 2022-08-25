import Facebook from "../img/facebook.png";
import Instragram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Youtube from "../img/youtube.png";

export function SocialLogo() {
  const socialMedia = [Facebook, Instragram, Twitter, Youtube];
  return (
    <>
      {socialMedia.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`${logo} Logo`}
          className="logo-width me-3 mb-3"
        />
      ))}
    </>
  );
}

export function Location({ opacity }) {
  return (
    <>
      <i
        className={`fa-solid fa-location-dot mb-3 mt-2 me-1 opacity-${opacity}`}
      />
    </>
  );
}

export function Like({ color = "black", mt = "0px" }) {
  return (
    <>
      <i
        className="fa-solid fa-thumbs-up me-3"
        role="button"
        style={{ color, marginTop: `${mt}px` }}
      />
    </>
  );
}

export function Image({ color = "" }) {
  return (
    <>
      <i className={`fa-regular fa-image text-${color}`} role="button" />
    </>
  );
}
