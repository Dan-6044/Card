import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li className="twitter">
          <a
            href="https://twitter.com/DanMunene155364"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </li>
        <li className="facebook">
          <a
            href="https://www.facebook.com/profile.php?id=100080751832420"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-facebook"></i>
          </a>
        </li>
        <li className="instagram">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </li>
        <li className="github">
          <a href="https://github.com/dan-6044" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;