import { appLogo } from "../utils/const";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-10 py-2 z-10">
      <img className="w-44" src={appLogo} alt="logo" />
    </div>
  );
};

export default Header;

