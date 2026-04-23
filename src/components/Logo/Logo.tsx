import { Link } from "react-router";
import LogoIcon from "../../assets/artevelde.svg";
import { ROUTES } from "../../constants";

const Logo = () => {
  return (
    <Link to={ROUTES.HOME}>
      <LogoIcon />
    </Link>
  );
};

export default Logo;
