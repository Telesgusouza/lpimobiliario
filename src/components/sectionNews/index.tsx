import * as Styled from "./style";

import bgPhoto from "../../../public/image/noticia.jpg";
import Reveal from "../Reveal";

export default function SectionNews() {
  return (
    <Styled.Container bg={bgPhoto}>
      <Reveal>
        <div className="box">
          <strong>EM BREVE:</strong>
          <h2>Lançamento do novo Stand de Vendas </h2>
        </div>
      </Reveal>
    </Styled.Container>
  );
}
