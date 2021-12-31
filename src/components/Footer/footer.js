import Box from '@mui/material/Box';
import FooterWidget from './widget';
import { menuItems, footerNav } from './footer.data';
import Link from '@mui/material/Link';
import { rgba } from 'polished';
import svg from './footersvg.svg';
import logo from "./gillyLogo.png";
import './footer.scss';
export default function Footer() {
  return (
    <footer style={{ backgroundImage: `url(${svg})` }} className="bg-slate-800 pt-36 rounded-xl md:rounded-2xl">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6 px-2 md:px-14 ">
        <div className=" col-span-2 justify-center ">
          <img src={logo} className="mx-auto w-2/6" alt="logo" />
          <div className="grid grid-row-2">

            <div className="social-buttons pt-12 pb-6">
              <Link href="#" className="social-buttons__button social-button social-button--facebook ml-1" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="social-buttons__button social-button social-button--linkedin ml-1" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link href="#" className="social-buttons__button social-button social-button--snapchat ml-1" aria-label="SnapChat">
                <i className="fab fa-snapchat-ghost"></i>
              </Link>
              <Link href="#" className="social-buttons__button social-button social-button--github ml-1" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </Link>
              <Link href="#" className="social-buttons__button social-button social-button--codepen ml-1" aria-label="CodePen">
                <i className="fab fa-codepen"></i>
              </Link>
            </div>
            <div>
              <h1 style={{ color: '#808080' }} className="text-center mb-2 ">
                Copyright by {new Date().getFullYear()} Gillyweed
              </h1>
            </div>
          </div>
        </div>

        {menuItems.map(({ id, title, items }) => (
          <FooterWidget key={id} title={title} items={items} classname="col-span-1 " />
        ))}
      </div>
      <div className="px-4 md:px-14 md:mx-20">
        <Box sx={styles.footerInner}>
          <Box>
            {/* <Logo image={logoLight} sx={styles.logo} /> */}
            <form className="bg-white rounded-full pl-4 py-1 pr-1 ">
              <input type="email" placeholder="Subs To Our NewsLetter" />
              <button className="bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 rounded-full pl-auto py-2 px-3.5 font-semibold text-gray-100 hover:bg-sky-700" type="button">
                <span >Subscribe</span>
              </button>
            </form>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerNav.map(({ path, label }, i) => (
              <li key={i}>
                <Link style={{fontSize:"1.125rem"}} href={path} key={i} variant="footer">
                  {label}
                </Link>
              </li>
            ))}
          </Box>
        </Box>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#000000",
    pt: 5,
  },
  footerTopInner: {
    gap: [50, null, null, null, 0, 50],
    display: ["grid"],
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
      null,
      "repeat(5, 1fr)",
      "repeat(5, 1fr)",
    ],
    // mb: [null, null, null, 7],
  },
  footerInner: {
    borderTop: [null, null, null, `1px solid #D9E0E7`],
    display: ["block", null, "flex"],
    alignItems: "center",
    justifyContent: "space-between",
    padding: ["30px 0 20px", null, null, "30px 0 35px", "35px 0 40px"],
  },
  copyright: {
    display: ["flex"],
    alignItems: "center",
    flexDirection: ["column", null, null, null, "row"],
    span: {
      fontSize: "14px",
      lineHeight: 1.29,
      color: rgba("#FCF5E5", 0.6),
      mt: ["18px", "18px", "7px"],
    },
  },
  logo: {
    mr: 3,
  },
  footerNav: {
    listStyle: "none",
    margin: ["15px 0 0", "15px 0 0", "0"],
    padding: 0,
    display: ["flex"],
    flexWrap: ["wrap", null, null, "unset"],
    justifyContent: ["center", null, "flex-start"],
    "li + li": {
      ml: ["18px", null, "20px"],
      "@media only screen and (max-width: 400px)": {
        mb: "10px",
      },
    },
    a: {
      color: "#FCF5E5",
      fontSize: [1, null, null, 2],
      textDecoration: "none",
    },
  },
};
