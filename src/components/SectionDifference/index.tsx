import Reveal from "../Reveal";
import * as Styled from "./style";

export default function SectionDifference() {
  return (
    <Styled.Container>
      <Reveal>
        <Styled.Content className="box">
          <div>
            <h2>A diferença</h2>
          </div>
          <p>
            Profissionais e famílias novas estão procurando casas acessíveis que
            atendam às necessidades de seu estilo de vida.
          </p>
        </Styled.Content>
      </Reveal>
    </Styled.Container>
  );
}
