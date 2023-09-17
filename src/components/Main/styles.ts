import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 500px;

  background-image: url(../../../public/image/imgMain.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-attachment: fixed;

  overflow: hidden;

  header {
    padding-top: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 80px;
      height: fit-content;
    }

    ul {
      list-style: none;
      display: flex;
    }

    li {
      width: fit-content;
      margin-left: 12px;

      font-size: 0.95rem;
      font-weight: 400;
      color: white;

      cursor: pointer;
      position: relative;

      &:nth-child(1) {
        margin-left: 0;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 1px;
        width: 0%;
        background-color: white;

        transition: all 0.15s ease-in-out;
      }

      &:hover::after {
        width: 100%;
        left: 0%;
      }
    }
  }

  @media (max-width: 600px) {
    nav {
      display: none;
    }
  }
`;

export const Menu = styled.div`
  display: none;

  /* position: relative; */

  input {
    position: absolute;
    z-index: 100;
    top: 40px;
    right: 25px;

    width: 35px;
    height: 30px;

    opacity: 0;
    cursor: pointer;
  }

  div {
    position: absolute;
    right: 25px;
    top: 40px;
    z-index: 99;

    width: 35px;
    height: 30px;

    span {
      display: block;
      width: 35px;
      height: 4px;
      margin-bottom: 8px;
      background-color: black;

      transition: all 0.15s ease;
      border-radius: 10px;
    }
  }

  menu {
    opacity: 0;
    padding: 80px 0 10px 0;

    position: absolute;
    right: 0;
    top: -300px;
    width: 100%;
    height: fit-content;
    z-index: 98;

    background-color: var(--LightGray);
    transition: all 0.12s ease;

    ul {
      display: flex;
      flex-direction: column;
    }

    li {
      margin: 0 auto;
      margin-left: auto !important;
      margin-bottom: 15px;

      width: 100%;
      max-width: 100px;

      text-align: center;
    }
  }

  input:checked ~ div span:nth-child(1) {
    transform-origin: 0% 0%;
    transform: rotate(45deg) scale(1);
    background-color: white;
  }

  input:checked ~ div span:nth-child(2) {
    opacity: 0;
  }

  input:checked ~ div span:nth-child(3) {
    transform-origin: 0% 100%;
    transform: rotate(-45deg) scale(1);
    background-color: white;

  }

  input:checked ~ menu {
    opacity: 1;
    top: 0;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
