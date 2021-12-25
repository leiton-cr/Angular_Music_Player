import { TracksService } from '@modules/tracks/tracks.service';
import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';


@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.scss']
})
export class PlayListBodyComponent implements OnInit {

   @Input() tracks: any;
  public heading: Array<{name: string, property: string}>;

  public sortOption!: {property:string | null, sorting: 'asc' | 'desc'} ;

  constructor(private service:TracksService) {
    this.tracks = [];
    this.heading = [{name: 'Título', property: 'name'}, {name: 'Álbum', property: 'album'}, {name: 'Duración', property: 'title'}]
    this.sortOption = {property: 'name', sorting: 'asc'};
   }

  ngOnInit(): void {
    if (this.tracks.length === 0) {
      this.service.getAllTracks$().subscribe(data => this.tracks = data)
    }
  }

  selectSort(property: string): void{
    const { sorting } = this.sortOption;

    this.sortOption.sorting = sorting === 'asc' ? 'desc' : 'asc';
    this.sortOption.property = property;
  }

}

