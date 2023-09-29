import { Container } from "./style";
import logo from "../../assets/logos/black-logo.png";

const Footer = () => {
  return (
    <Container>
      <span>
        STAR WARS LTD | CNPJ: 77.777.777/0007-07 | 2023 | All rights reserved
      </span>
      <span className="bar"></span>
      <img src={logo} alt="Star Wars Black Logo" />
    </Container>
  );
};

export default Footer;
