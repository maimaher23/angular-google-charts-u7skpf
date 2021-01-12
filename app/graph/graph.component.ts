import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleCharts } from "google-charts";
import * as gauss from "../gauss";

@Component({
  selector: "app-graph",
  templateUrl: "./graph.component.html",
  styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements OnInit {
  @ViewChild("chart") chart;
  data: number[];
  distribution: number[];
  mean = 0;
  sd = 0;

  constructor() {}

  ngOnInit() {
    this.data = [
      4,
      2,
      5,
      1,
      1,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      10,
      15,
      16,
      15,
      21,
      30,
      20,
      21,
      22,
      23,
      24,
      35,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      35,
      30,
      33,
      28,
      20,
      18,
      18,
      18,
      19,
      15,
      10,
      12,
      10,
      7,
      5,
      5,
      5,
      5,
      1,
      1
    ];

    this.mean = gauss.calcMean(this.data);
    this.sd = gauss.calcStandardDeviation(this.mean, this.data);
    this.distribution = gauss.getGaussian(-50, 100, this.mean, this.sd);

    GoogleCharts.load(() => this.drawChart());
  }

  drawChart(): void {
    var data = google.visualization.arrayToDataTable([
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7]
    ]);

    var options = {
      title: "My Daily Activities",
      pieHole: 0.75,
      pieSliceText: "none",
      pieSliceTextStyle: {
        color: "pink",
        slices: {
          0: { color: "yellow" },
          1: { color: "transparent" }
        }
      }
    };

    var chart = new GoogleCharts.api.visualization.PieChart(
      this.chart.nativeElement
    );
    chart.draw(data, options);
  }
}
