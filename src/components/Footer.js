import logo from "./../images/logo.svg";
import location from "./../images/icon-location.svg";
import phone from "./../images/icon-phone.svg";
import mail from "./../images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="bg-footerBackground py-6">
      <div className="container">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="py-6 mt-5 text-White font-thin flex flex-col justify-center sm:flex-row flex-wrap gap-6 md:gap-10 ">
          <div className="flex-grow flex gap-4 items-start">
            <img src={location} alt="location" className="pt-[6px]" />
            <p className="max-w-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="flex-grow font-OpenSans">
            <p className="flex gap-6 mb-4 ">
              <img src={phone} alt="phone" />
              +1-543-123-4567
            </p>
            <p className="flex gap-6 mb-4 ">
              <img src={mail} alt="mail" />
              example@fylo.com
            </p>
          </div>
          <div className="flex-grow flex flex-col sm:flex-row gap-8 md:gap-16">
            <ul className="flex-grow flex flex-col gap-3">
              <li className="footer-li">About Us</li>
              <li className="footer-li">Jobs</li>
              <li className="footer-li">Press</li>
              <li className="footer-li">Blog</li>
            </ul>
            <ul className="flex-grow flex flex-col gap-3">
              <li className="footer-li">Contact Us</li>
              <li className="footer-li">Terms</li>
              <li className="footer-li">Privacy</li>
            </ul>
          </div>
          <div className="flex-grow flex justify-center items-start gap-4">
            <span className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </span>
            <span className="social-icon">
              <i className="fa-brands fa-twitter"></i>
            </span>
            <span className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
