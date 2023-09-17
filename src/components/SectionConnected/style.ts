import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--DarkBlue);
  color: white;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;

  padding: 80px 0;

  div {
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    margin: 0 auto;
    width: 320px;
    height: 320px;
    object-fit: cover;

    border-radius: 15px;

    box-shadow: -20px 15px 50px var(--Blue);
  }

  H2 {
    font-size: 3.7rem;
    max-width: 400px;

    font-family: codecPro, sans-serif;
  }

  button {
    width: fit-content;
    margin-top: 50px;
    border: none;

    padding: 10px 25px;
    color: white;
    background-image: linear-gradient(95deg, var(--Purple), var(--Pink));

    border-radius: 50px;

    font-weight: 600;

    &:hover {
      opacity: 0.8;
    }
  }

  strong {
    width: 100%;
    max-width: 280px;
    margin-bottom: 9px;

    font-family: codecPro, sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--Purple);
  }

  p {
    margin-top: 18px;
    font-family: OpenSauceMedium;
    font-size: 1.1rem;
  }

  @media (max-width: 800px) {
    img {
      width: 270px;
      height: 270px;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;

    div {
      width: 100%;
      margin-bottom: 40px;
    }

    h2 {
      max-width: 100%;
    }

    strong {
      max-width: 100%;
    }

    button {
margin: 30px auto 0 auto;
    }
  }
`;
