import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode!: 'small' | 'big';
  @Input() track: Track;

  constructor(
    private service: MultimediaService
  ) {
    this.track = {cover: '', name: '', album: ''}
  }

  ngOnInit(): void { }

  public onPlay(){
    this.service.trackInfo.next(this.track)
  }


}
