import { useSelector } from "react-redux";

import * as Styled from "./styles";

import iconPhoto from "../../../public/icon/icon1 (1).png";
import bgMain from "../../../public/image/imgMain.jpeg";
import Reveal from "../Reveal";
import { IRootReducer } from "../../api/interface";

export default function Main() {
  const { report, estimated, aboutUs, connect } = useSelector(
    (rootReducer: IRootReducer) => rootReducer.useLocationComponents
  );

  function scrollPage(top: number) {
    // console.log("esta chegando aqui")
    // console.log(top)
    // console.log(report)
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  }

  return (
    <Styled.Container imgmain={bgMain}>
      <header className="box">
        <img src={iconPhoto} alt="" />

        <nav>
          <ul>
            <li onClick={() => scrollPage(report)}>Relatório</li>
            <li onClick={() => scrollPage(estimated)}>Estimativa</li>
            <li onClick={() => scrollPage(connect)}>Conectar</li>
            <li onClick={() => scrollPage(aboutUs)}>Sobre nós</li>
          </ul>
        </nav>

        <Styled.Menu>
          <input type="checkbox" />

          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <menu>
            <ul>
              <li onClick={() => scrollPage(report)} >Relatório</li>
              <li onClick={() => scrollPage(estimated)} >Estimativa</li>
              <li onClick={() => scrollPage(connect)} >Conectar</li>
              <li onClick={() => scrollPage(aboutUs)} >Sobre nós</li>
            </ul>
          </menu>
        </Styled.Menu>
      </header>

      <Styled.Title className="box">
        <Reveal>
          <h1>
            Casas acessíveis <br />
            em comunidades prósperas
          </h1>
        </Reveal>
      </Styled.Title>
    </Styled.Container>
  );
}
