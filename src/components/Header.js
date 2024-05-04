import logo from "./../images/logo.svg";

const Header = () => {
  return (
    <header className="container">
      <nav className="my-2 md:my-6 h-28 flex gap-12 justify-between items-center">
        <div className="shrink-[1]">
          <img src={logo} alt="logo" />
        </div>
        <div className="list flex-grow">
          <ul className="flex justify-end items-center gap-4 md:gap-10 text-White shrink-0">
            <a href="#fetures">
              <li className="my-li">Features</li>
            </a>
            <a href="#team">
              <li className="my-li">Team</li>
            </a>
            <a href="#SignIn">
              <li className="my-li">Sign In</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
