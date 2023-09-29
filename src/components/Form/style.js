import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  position: absolute;
  top: 190px;

  @media (min-width: 700px) {
    top: 210px;
  }

  @media (min-width: 1000px) {
    top: 220px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
      justify-content: center;
      flex-direction: row;
    }
  }

  .marsImg {
    width: 19.0625rem;
    height: 13.75rem;
    border-radius: 14px 14px 0 0;

    @media (min-width: 700px) {
      width: 20rem;
      height: 18.75rem;
      border-radius: 14px 0 0 14px;
    }
  }

  .spaceshipImg {
    width: 19.0625rem;
    height: 13.75rem;
    position: absolute;
    margin-top: 40px;
    margin-left: 230px;

    @media (min-width: 700px) {
      margin-top: 240px;
      margin-right: 730px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 19.0625rem;
    height: 14.375rem;
    background-color: #000000b2;
    border-radius: 0 0 14px 14px;

    @media (min-width: 700px) {
      border-radius: 0 14px 14px 0;
      width: 20rem;
      height: 18.75rem;
    }
  }

  p {
    width: 15rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #ffffff;
    margin-top: 20px;

    @media (min-width: 700px) {
      margin-top: 50px;
    }
  }

  input,
  button {
    border: none;
    width: 15.4375rem;
    height: 2.5rem;
    border-radius: 5px;
    margin-top: 15px;
  }

  input::placeholder {
    font-family: "Lato", sans-serif;
    font-size: 0.9375rem;
    text-align: center;
  }

  button {
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    background-color: #de1212;
    margin-top: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ff0000;
    }
  }

  .btnSearch {
    margin-right: 10px;
  }

  .formFooter {
    display: flex;
    font-size: 0.875rem;
  }

  p,
  span {
    display: flex;
    align-items: center;
    font-family: Lato;
    font-size: 0.875rem;
    margin-left: 12px;
    margin-right: 12px;
  }

  .arrowIcon {
    margin-right: 5px;
  }
`;
