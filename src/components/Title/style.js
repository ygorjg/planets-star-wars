import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    color: #ffffff;
    font-size: 0.9375rem;
  }

  img {
    margin-top: 10px;
    width: 13.0625rem;
    height: 5.8125rem;

    @media (min-width: 700px) {
      width: 15rem;
      height: 6.875rem;
    }

    @media (min-width: 1000px) {
      width: 17.5rem;
      height: 7.8125rem;
    }
  }
`;
