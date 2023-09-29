import { useEffect, useState } from "react";
import axios from "axios";
import { BtnContainer, Container } from "./style";
import { FaThermometerHalf } from "react-icons/fa";
import { CgTerrain } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { PiFilmSlateBold } from "react-icons/pi";
import planetImages from "../../assets/planetImages/planetImages";

const Results = ({ planet, setPlanetData }) => {
  const [residentNames, setResidentNames] = useState([]);
  const [filmTitles, setFilmTitles] = useState([]);

  useEffect(() => {
    if (planet) {
      fetchResidentNames();
      fetchFilmTitles();
    }
  }, [planet]);

  const fetchResidentNames = async () => {
    const names = [];

    for (const residentURL of planet.residents) {
      try {
        const response = await axios.get(residentURL);
        if (response.status === 200) {
          names.push(response.data.name);
        } else {
          names.push("Unknown");
        }
      } catch (error) {
        console.error("Error fetching resident data:", error);
        names.push("Unknown");
      }
    }

    setResidentNames(names);
  };

  const fetchFilmTitles = async () => {
    const titles = [];

    for (const filmURL of planet.films) {
      try {
        const response = await axios.get(filmURL);
        if (response.status === 200) {
          titles.push(response.data.title);
        } else {
          titles.push("Unknown");
        }
      } catch (error) {
        console.error("Error fetching film data:", error);
        titles.push("Unknown");
      }
    }

    setFilmTitles(titles);
  };

  return (
    <>
      <Container>
        <div className="content">
          <img
            src={planetImages[planet.name.toUpperCase()]}
            alt={planet.name}
          />
          <div className="planetInfoContainer">
            <div>
              <p className="planetLabel">Planet:</p>
              <p className="planetName">{planet.name.toUpperCase()}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p className="planetInfo">
                <FaThermometerHalf /> Climate:
                <span className="climate">{planet.climate}</span>
              </p>
              <p className="planetInfo">
                <CgTerrain /> Terrain:{" "}
                <span className="terrain">{planet.terrain}</span>
              </p>
              <p className="planetInfo">
                <IoIosPeople /> Population:
                <span className="population">{planet.population}</span>
              </p>
              <div className="cardFooter">
                <div className="residentsContainer">
                  <p className="residentsLabel">
                    <BsFillPersonFill /> Residents:
                  </p>
                  <p className="bar"></p>
                  {residentNames.length > 0 ? (
                    <p className="residents">{residentNames.join(", ")}</p>
                  ) : (
                    <p className="residents">No resident available.</p>
                  )}
                </div>
                <div className="filmsContainer">
                  <p className="filmsLabel">
                    <PiFilmSlateBold /> Films ({filmTitles.length}):
                  </p>
                  <p className="bar"></p>
                  {filmTitles.length > 0 ? (
                    <p className="films">{filmTitles.join(", ")}</p>
                  ) : (
                    <p className="films">No film available.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <BtnContainer>
        <button onClick={() => setPlanetData(null)}>&lt; Voltar</button>
      </BtnContainer>
    </>
  );
};

export default Results;
