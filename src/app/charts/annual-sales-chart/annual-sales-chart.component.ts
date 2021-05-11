import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-annual-sales-chart',
  templateUrl: './annual-sales-chart.component.html',
  styleUrls: ['./annual-sales-chart.component.css']
})
export class AnnualSalesChartComponent implements OnInit {

  public salesChartData: ChartDataSets[] = [
    { data: [], label: 'Total Sales'},
  ];
  public salesChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private salesService:SalesService ) {}

  ngOnInit() {
    this.salesService.getSalesByMonth().subscribe({
      next:saleItems => {
        saleItems.forEach(li =>{
          this.salesChartData[0].data.push(li.revenue)
          this.salesChartLabels.push(li.month)
        })
      }
    })
  }

}
