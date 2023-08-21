import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="social-media">
      <a href="https://github.com/dharamveer742" target="_blank"><i className="fa-brands fa-square-github"></i></a>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-google-plus"></i>
      </div>
      <div className="footer-bottom">
        <p id="copyright">Copyright @2023 Designed by DHARAMVEER</p>
      </div>
    </div>
  );
};
export default Footer;
