import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.scss']
})
export class CardPlayerComponent implements OnInit {

  @Input() mode!: 'small' | 'big';
  @Input() track!: Track;

  constructor() { }

  ngOnInit(): void {
  }

}
