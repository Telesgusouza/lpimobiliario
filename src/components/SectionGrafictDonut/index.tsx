import { useDispatch } from "react-redux";
import ReactApexChart from "react-apexcharts";
import * as Styled from "./style";
import Reveal from "../Reveal";
import { useEffect, useRef } from "react";
import { IConfigChart } from "../../api/interface";

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
    },
  };

  const myComponentRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleScroll = () => {
    console.log("aaaaa");
    if (myComponentRef.current) {
      console.log("UÉEEE PORRA");
      const boundingBox = myComponentRef.current.getBoundingClientRect();
      dispatch({
        type: "REPORT",
        payload: boundingBox.top,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <Styled.Container ref={myComponentRef}>
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
