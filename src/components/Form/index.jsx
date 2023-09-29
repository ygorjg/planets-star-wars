import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Container } from "./style";
import mars from "../../assets/formImages/mars.png";
import spaceship from "../../assets/formImages/spaceship.png";
import { FiSearch } from "react-icons/fi";
import { BiFilter } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Results from "../Results";

const Form = () => {
  const [planetData, setPlanetData] = useState(null);
  const { register, handleSubmit } = useForm();

  const searchPlanet = async (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      toast.error("Please enter a planet name");
    } else {
      try {
        const response = await api.get("/planets/");

        if (response.status === 200) {
          const planets = response.data.results;

          const foundPlanet = planets.find(
            (planet) => planet.name.toLowerCase() === trimmedName.toLowerCase()
          );

          if (foundPlanet) {
            toast.success(`Planet found: ${foundPlanet.name}`);
            setPlanetData(foundPlanet);
          } else {
            toast.error(`Planet with name '${trimmedName}' not found.`);
          }
        } else {
          toast.error("An issue occurred, please try again");
        }
      } catch (error) {
        toast.error("An issue occurred, please try again", error.message);
      }
    }
  };

  return (
    <div>
      {planetData ? (
        <Results planet={planetData} setPlanetData={setPlanetData} />
      ) : (
        <Container>
          <div className="content">
            <img className="marsImg" src={mars} alt="" />
            <img className="spaceshipImg" src={spaceship} alt="" />
            <form onSubmit={handleSubmit((data) => searchPlanet(data.name))}>
              <p>
                Discover all the information about Planets of the Star Wars Saga
              </p>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter the name of the planet"
              />
              <button type="submit">
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
      )}
    </div>
  );
};

export default Form;
