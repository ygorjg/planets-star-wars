import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  .content {
    display: flex;
    width: 355px;
    height: 420px;
    background-color: #ffffff;
    border-radius: 10px;
    border: none;
    margin-top: 25px;

    @media (min-width: 700px) {
      width: 500px;
    }
  }

  img {
    margin-top: 20px;
    margin-left: 25px;
    width: 80px;
    height: 80px;
  }

  .planetInfoContainer {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-left: 35px;

    @media (min-width: 700px) {
      flex-direction: row;
      gap: 40px;
    }
  }

  .planetLabel {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;

    @media (min-width: 700px) {
      margin-top: 20px;
    }
  }

  .planetName {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 900;
  }

  .planetInfo {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
  }

  .climate,
  .terrain,
  .population {
    margin-left: 5px;
    font-size: 14px;
    font-weight: 400;
  }

  .cardFooter {
    width: 340px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: -130px;
    gap: 35px;

    @media (min-width: 700px) {
      width: 400px;
      margin-left: -230px;
    }
  }

  .bar {
    margin-top: 10px;
    border-bottom: 0.1px solid #000000;
  }

  .residentsContainer,
  .filmsContainer {
    border-radius: 15px;
    background-color: #f1f1f1;
  }

  .residentsLabel,
  .filmsLabel {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 10px;
    margin-left: 5px;
  }

  .residents,
  .films {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    margin-top: 10px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 80vw;

  @media (min-width: 1100px) {
    width: 70vw;
  }

  button {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    background: none;
    color: #ffffff;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  }
`;
