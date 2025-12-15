import styles from "../../styles/Footer.module.css";
import GetInTouch from "./GetInTouch";
import Socials from "./Socials";
import Links from "./Links";
import nss from "@/public/images/socials/nss.png";
import plane from "@/public/images/socials/plane.png";
import hikma from "@/public/images/socials/hikma.png";

const Footer = () => {
  const socials = [
    { logo: plane, link: "https://www.instagram.com/aspire_college_thrithala?igsh=Mzc0Mnc5OG1pMWpl" },
    { logo: hikma, link: "https://www.instagram.com/hikma_college_union?igsh=MTEwNG5yZ3E5dDNybw==" },
    { logo: nss, link: "https://www.instagram.com/nssaspire_official?igsh=MWVpYW11YzdnOTB2dw==" },
    // { logo: Linkedin, link: "#" },
    // { logo: Facebook, link: "https://www.facebook.com/Ragam.nitc/" },
  ];

  const email = "";

  const links = [
    [
      { name: "Home", link: "/" },
      { name: "Arts", link: "/arts" },
      { name: "Sports", link: "/sports" },
      // { name: "Sponsors", link: "/sponsors" },
    ],
    [
      { name: "Programs", link: "/programs" },
      { name: "Events", link: "/events" },
    ],
    [
      { name: "NSS", link: "/nss" },
      { name: "Our Members", link: "/team" },
      // { name: "nss instagram", link: "/events?category=Ragnarok" },
      // { name: "Proshow", link: "/proshow" },
      // // { name: "I-ink", link: "/ink" },
      // { name: "Prodezza", link: "/prodezza" },
    ],
  ];
  var i=0,j=0;
  return (
    <footer className={styles.footer}>
      <div className={styles.mainSection}>
        <GetInTouch email={email} />
        <div className={styles.SocialsContainer}>
          {socials.map((x) => (
            <Socials  key={i++} content={x} />
          ))}
        </div>
        <div className={styles.LinksContainer}>
          {links.map((x) => (
            <Links key={j++} links={x} />
          ))}
        </div>
      </div>
      <div className={styles.BottomSection}>
        <div>©2025 - Hikma Aspire</div>
        <div>Terms & Conditions, Privacy</div>
      </div>
    </footer>
  );
};

export default Footer;
