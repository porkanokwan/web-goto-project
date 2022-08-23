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
          className="logo-width"
        />
      ))}
    </>
  );
}

export function Location() {
  return (
    <>
      <i className="fa-solid fa-location-dot mb-3 mt-8 fs-3 me-1 opacity-50" />
    </>
  );
}
