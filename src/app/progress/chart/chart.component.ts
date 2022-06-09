import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ChartData,  ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input() labelArray: string[] = [];
  @Input() weightArray : number[] = [];

  data!: ChartData<'line'>;

  chartOptions!: ChartOptions;

  constructor(private firestore: AngularFirestore) { }

  ngOnChanges(): void {
    this.data = {
      labels: this.labelArray,
      datasets: [
        { label: 'Weight', data: this.weightArray, tension: 0.3, backgroundColor: '#fd7e14', borderColor: '#fd7e14', pointBackgroundColor: '#000000'},
      ],
    };

    this.chartOptions = {
      responsive: true,
      scales: {
        xAxis: {
          ticks: {
            maxRotation: 90,
            minRotation: 90
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Body Weight (kg)',
        },
      },
    };
  }
}