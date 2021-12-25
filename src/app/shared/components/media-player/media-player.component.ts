import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Track } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progress') progressBar:ElementRef;
  private subscriptions: Array<Subscription>;


  public mockCover!: Track;
  constructor(public service: MultimediaService) {
    this.progressBar = new ElementRef('');
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.subscribeEmmiter();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  public subscribeEmmiter() {
    const trackSubscriber: Subscription = this.service.callback.subscribe(
      (data) => {
        this.mockCover = data;
      }
    );

    this.subscriptions.push(trackSubscriber);
  }

  printProgress(event: any): void{
    const { clientWidth } = this.progressBar.nativeElement;
    const {x, offsetX} = event;

    const progress =  x - (x-offsetX);
    const percentage = (( progress * 100) / clientWidth);
    this.service.seekAudio(percentage);
      
  }

}
