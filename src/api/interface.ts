export interface IRootReducer {
  useLocationComponents: {
    report: number;
    estimated: number;
    aboutUs: number;
    connect: number;
  };
}

export interface IConfigChart {
  series: number[];
  options: {
    colors?: string[];
    labels: string[];
    legend: {
      position: "bottom";
    };
    responsive?: [
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
