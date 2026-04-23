import { Link } from "react-router";

type LinkProps = {
  link: string;
  label: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const CustomLink = ({ link, label, target }: LinkProps) => {
  return (
    <Link className="contrast" to={link} target={target}>
      {label}
    </Link>
  );
};

export default CustomLink;
