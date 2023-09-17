import ReactApexChart from "react-apexcharts";
import * as Styled from "./style";
import Reveal from "../Reveal";

export interface IConfigChart {
  series: number[];
  options: {
    colors?: string[];
    labels: string[];
    legend: {
      position: "bottom";
    };
    responsive: [
      {
        breakpoint: number;
        options: {
          chart: {
            width: number;
          };
        };
      }
    ];
  };
}

export default function SectionGrafictDonut() {
  const options: IConfigChart = {
    series: [36.1, 12, 30.1, 12, 9.6],
    options: {
      colors: ["#e8e8e8", "#c0c0c0", "#959595", "#606060", "#343434"],
      labels: [
        "Profissionais solteiros",
        "Casais",
        "Familias com filhos",
        "familia com filhos adultos",
        "Aposentados",
      ],
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };

  return (
    <Styled.Container>
      <div className="box">
        <Reveal>
          <ReactApexChart
            options={options.options}
            series={options.series}
            type="donut"
          />
        </Reveal>
      </div>
    </Styled.Container>
  );
}
