import { Component } from '@angular/core';
import { ChartOptionsService } from '../services/chart-options.service';
import {
  ChartStateService,
  ChartDataInterface
} from '../../state/index';
import { Subscriptions } from '../../../../../core/index';

@Component({
  moduleId: module.id,
  selector: 'mp-legend',
  templateUrl: 'legend.component.html',
  styleUrls: ['legend.component.css']
})

export class LegendComponent extends Subscriptions {
  items:LegendInterface[] = [];

  constructor(private chartOptionsService:ChartOptionsService,
              private chartState:ChartStateService) {
    super();
    this.subscriptions.push(this.chartState.point$
      .subscribe(
        data => this.updateItems(data)
      ));
  }

  private updateItems(data:ChartDataInterface) {
    if (data) {
      this.items = [
        {label: 'Open', value: this.chartOptionsService.options.priceFormat(data.open)},
        {label: 'Close', value: this.chartOptionsService.options.priceFormat(data.close)},
        {label: 'Low', value: this.chartOptionsService.options.priceFormat(data.low)},
        {label: 'High', value: this.chartOptionsService.options.priceFormat(data.high)},
        {label: 'Vol', value: this.chartOptionsService.options.volumeFormat(data.volume)}
      ];
    } else {
      this.items = [];
    }
  }
}

export interface LegendInterface {
  label?:string;
  value?:string;
}
