import * as Styled from "./styles";

import iconPhoto from "../../../public/icon/icon1 (1).png";
import bgMain from "../../../public/image/imgMain.jpeg";

export default function Main() {
  return (
    <Styled.Container imgmain={bgMain}>
      <header className="box">
        <img src={iconPhoto} alt="" />

        <nav>
          <ul>
            <li>Relatório</li>
            <li>Estimativa</li>
            <li>Sobre nós</li>
            <li>Conectar</li>
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
              <li>Relatório</li>
              <li>Estimativa</li>
              <li>Sobre nós</li>
              <li>Conectar</li>
            </ul>
          </menu>
        </Styled.Menu>
      </header>

      <Styled.Title className="box">
        <h1>
          Casas acessíveis <br />
          em comunidades prósperas
        </h1>
      </Styled.Title>
    </Styled.Container>
  );
}
