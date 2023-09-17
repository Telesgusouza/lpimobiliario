import * as Styled from "./styles";

import iconPhoto from "../../../public/icon/icon1 (1).png";

export default function Main() {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
}
