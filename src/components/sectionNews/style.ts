import styled from "styled-components";

interface IProps {
  bg: string;
}

export const Container = styled.section<IProps>`
  width: 100%;
  height: 100vh;
  min-height: 400px;
  max-height: 600px;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  div {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;
  }

  strong {
    font-size: 1.3rem;
  }

  h2 {
    max-width: 600px;

    text-align: center;
    font-size: 3.4rem;
  }
`;
