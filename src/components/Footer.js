import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2021</p>
      <Link to="/about">关于</Link>
    </footer>
  );
};

export default Footer;
