import * as Styled from "./styles";

import iconPhoto from "../../../public/icon/icon1 (1).png";
import bgMain from '../../../public/image/imgMain.jpeg'

/* 

tenho um projeto q usa react e styled components, quero passar um valor e pegar esse valor no styled-components

<Styled.Container imgMain={bgMain} >
O tipo de elemento JSX 'Styled.Container' não tem nenhum constructo nem assinaturas de chamadas.ts(2604)
O módulo 'Styled.Container' não pode ser usado como um componente JSX.
  Its type 'IContainer' is not a valid JSX element type.ts(2786)

  

  
interface IContainer {
  imgMain: string
}
  
  export const Container:IContainer = styled.main`
    background-image: url(${props => props.imgMain});
  `;

  A propriedade 'imgMain' não existe no tipo 'ExecutionContext & FastOmit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, never>'.ts(2339)
any


*/

export default function Main() {

  return (
    <Styled.Container imgMain={bgMain} >
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
