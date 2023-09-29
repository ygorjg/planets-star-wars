import { Container } from "./style";
import mars from "../../assets/formImages/mars.png";
import spaceship from "../../assets/formImages/spaceship.png";
import { FiSearch } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Form = () => {
  return (
    <Container>
      <div className="content">
        <img className="marsImg" src={mars} alt="" />
        <img className="spaceshipImg" src={spaceship} alt="" />
        <form action="">
          <p>
            Discover all the information about Planets of the Star Wars Saga
          </p>
          <input type="text" placeholder="Enter the name in the planet" />
          <button>
            <FiSearch className="btnSearch" /> Search
          </button>
          <div className="formFooter">
            <p>
              <BiFilter className="filterIcon" />
              Filter:
              <span>
                <IoIosArrowDown className="arrowIcon" />
                Name
              </span>
              <span>
                <IoIosArrowDown className="arrowIcon" />
                Population
              </span>
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Form;
