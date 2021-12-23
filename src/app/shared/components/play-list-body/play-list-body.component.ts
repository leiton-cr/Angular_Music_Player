import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

import * as rawData from '@data/tracks.json'

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {
  public tracks!: Array<Track>;
  public heading: Array<{name: string, property: string}>;

  public sortOption!: {property:string | null, sorting: 'asc' | 'desc'} ;

  constructor() {
    this.heading = [{name: 'Título', property: 'name'}, {name: 'Álbum', property: 'album'}, {name: 'Duración', property: 'title'}]
    this.sortOption = {property: 'name', sorting: 'asc'};
   }

  ngOnInit(): void {
    const { data }: any = (rawData as any).default
    this.tracks = data;
  }

  selectSort(property: string): void{
    const { sorting } = this.sortOption;

    console.log(sorting);
    

    this.sortOption.sorting = sorting === 'asc' ? 'desc' : 'asc';
    this.sortOption.property = property;
  }

}

