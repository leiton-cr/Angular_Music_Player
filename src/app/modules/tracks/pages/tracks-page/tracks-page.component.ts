import { Component, OnDestroy, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';
import { TracksService } from '@modules/tracks/tracks.service';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.scss'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  private observers: Array<Subscription>;

  public tracksRandom: Array<Track>;
  public tracksTrending: Array<Track>;

  constructor(private service: TracksService) {
    this.observers = [];

    this.tracksRandom = [];
    this.tracksTrending = [];
  }

  ngOnInit(): void {
    this.loadAllData();
    this.loadRandomData();
  }

  ngOnDestroy(): void {
    this.observers.forEach((sub: Subscription) => sub.unsubscribe());
  }

  async loadAllData(): Promise<any> {
    const data = await firstValueFrom(this.service.getAllTracks$());
    this.tracksTrending = data;
  }

  async loadRandomData(): Promise<any> {
    const data = await firstValueFrom(this.service.getAllRandom$());
    this.tracksRandom = data;
  }
}
