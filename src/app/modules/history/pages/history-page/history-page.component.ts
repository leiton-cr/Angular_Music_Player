import { Observable, of } from 'rxjs';
import { SearchService } from './../../search.service';
import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  public resultList$: Observable<Array<Track>>;

  constructor(
    private service:SearchService
  ) {
    this.resultList$ = of([]);
  }

  ngOnInit(): void {
  }

  receiveData(evt: any){
    this.resultList$ = this.service.searchTracks$(evt)
  }

}
