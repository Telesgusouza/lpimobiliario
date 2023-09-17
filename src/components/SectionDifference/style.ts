import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
`;

export const Content = styled.div`
  max-width: 600px;
  padding-top: 40px;
  padding-bottom: 25px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-family: "OpenSauceMedium", sans-serif;
      font-size: 1.8rem;
    }
  }

  p {
    font-family: "OpenSauce", sans-serif;
    font-size: 0.95rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;

    p {
        text-align: center;
    }
  }
`;
