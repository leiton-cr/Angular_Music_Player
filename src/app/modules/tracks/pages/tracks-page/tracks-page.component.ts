import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

import * as rawData from '@data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss']
})
export class TracksPageComponent implements OnInit {

  public mockTracks!: Array<Track>;

  constructor() { }

  ngOnInit(): void {
    const { data }: any = ( rawData as any).default;
    this.mockTracks = data;
  }

}
