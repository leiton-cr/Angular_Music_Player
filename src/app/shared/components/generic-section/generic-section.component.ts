import { Component, Input, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.scss']
})
export class GenericSectionComponent implements OnInit {

  @Input() title!:string;
  @Input() mode!: 'small' | 'big';
  @Input() dataTracks!: Array<Track>;

  constructor() { }

  ngOnInit(): void {
  }

}
