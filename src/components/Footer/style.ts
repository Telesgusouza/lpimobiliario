import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--LightGray);

  padding: 40px 0;
  color: white;

  h3 {
    text-align: center;
    margin-bottom: 40px;
  }

  @media (max-width: 470px) {
    h3 {
      margin-bottom: 30px;
    }
  }
`;

export const SocialMidia = styled.div`
  display: flex;
  justify-content: space-around;

  ul {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;

    strong {
      margin-bottom: 5px;
    }
  }

  li {
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  img {
    margin-right: 5px;
  }

  @media (max-width: 470px) {
    flex-direction: column;

    ul {
      strong {
        text-align: center;
        margin-bottom: 2px;
      }

      li {
        width: fit-content;

        margin-left: auto;
        margin-right: auto;
      }

      &:nth-child(1) {
        margin-bottom: 30px;
      }
    }
  }
`;
