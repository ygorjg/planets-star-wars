import { Container } from "./style";
import logo from "../../assets/logos/black-logo.png";

const Footer = () => {
  return (
    <Container>
      <span>
        STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos
        reservados
      </span>
      <span className="bar"></span>
      <img src={logo} alt="Star Wars Black Logo" />
    </Container>
  );
};

export default Footer;
