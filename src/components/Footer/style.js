import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  gap: 50px;

  span {
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .bar {
    width: 0.0125rem;
    height: 3.125rem;
    background-color: #000000;

    @media (max-width: 700px) {
      display: none;
    }
  }

  img {
    width: 5.25rem;
    height: 2.3125rem;
  }
`;
