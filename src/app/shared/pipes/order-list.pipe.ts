import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '@core/models/track.model';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: Array<any>,
    param: string | null = null,
    sorting: 'asc' | 'desc' | null = 'asc'
  ): Array<Track> {
    try {
      if (!param) 
        return value;
    
      value = value.sort((a, b) =>
        a[param] < b[param] ? -1 : a[param] > b[param] ? 1 : 0
      );

      if(sorting === 'desc')
        value = value.reverse();

    } catch (e) {
      console.log('e');
    } finally {
      return value;
    }
  }
}
