import logo from "../../assets/logos/white-logo.png";
import { Container } from "./style";

const Title = () => {
  return (
    <Container>
      <div className="content">
        <h1>PLANET SEARCH</h1>
        <img src={logo} alt="Star Wars White Logo" />
      </div>
    </Container>
  );
};

export default Title;
