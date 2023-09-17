import Reveal from "../Reveal";
import * as Styled from "./style";

export default function SectionCostEstimate() {
  return (
    <Styled.Container>
      <Reveal>
        <div className="box">
          <h2>Estimativa de custo</h2>

          <table>
            <tr className="title">
              <td>Custo de obra</td>
            </tr>
            <tr>
              <td>Serviços de engenharia</td>
              <td>R$60.000</td>
            </tr>

            <tr>
              <td>Serviços de arquitetura</td>
              <td>R$50.000</td>
            </tr>

            <tr>
              <td>Mão de obra</td>
              <td>R$120.000</td>
            </tr>

            <tr>
              <td>Material</td>
              <td>R$80.000</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>R$310.000</td>
            </tr>
          </table>
        </div>
      </Reveal>
    </Styled.Container>
  );
}
