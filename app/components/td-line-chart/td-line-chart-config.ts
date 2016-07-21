export class TDLineChartConfig {
  constructor(name:string,fill: string,color:string,interpolation: string) {
    this.settings = { name,fill, color,interpolation };
  }
  settings: { name:string, fill: string, color: string,interpolation: string };
  dataset: Array<{ x: number, y: number }>
}
