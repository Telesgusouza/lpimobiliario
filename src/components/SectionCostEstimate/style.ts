import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding-top: 50px;
  padding-bottom: 50px;

  background-color: var(--LightGray);

  h2 {
    margin-bottom: 50px;

    color: white;
    font-size: 2rem;
    font-family: OpenSauceLight;
  }

  table {
    width: 100%;
    max-width: 700px;

    margin: 0 auto;

    border: 1px solid white;
    border-collapse: collapse;
  }

  tr {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .title {
    grid-template-columns: 1fr ;
    background-color: white;
    
    td {
        color: var(--LightGray);
        font-size: 1.4rem;
    }
  }

  td {
    min-height: 50px;

    padding: 20px;

    border: 1px solid white;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-weight: 500;
  }
`;
