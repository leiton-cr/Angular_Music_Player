import { Component, OnInit } from '@angular/core';
import { Track } from '@core/models/track.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  public mockCover: Track = {
    name : 'Bebe (Oficial video)', 
    cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqo_jIPPwwmsMmglLrfJ1NoxHDMGJrOXY6w&usqp=CAU',
    album: 'Justin Bieber',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
