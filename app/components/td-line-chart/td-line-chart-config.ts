export class TDLineChartConfig {
  constructor(fill: string,interpolation: string) {
    this.settings = { fill, interpolation };
  }
  settings: { fill: string, interpolation: string };
  dataset: Array<{ x: number, y: number }>
}
