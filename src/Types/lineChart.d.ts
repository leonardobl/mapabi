export interface ILineChartprops {
  xAxis: string[];
  series: MakeOptional<LineSeriesType, "type">[];
}

export interface ISeries {
  data: string;
  label: string;
}
