import { Track } from './../../core/models/track.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  public callback: EventEmitter<any>;
  public audio!: HTMLAudioElement;

  public trackInfo: BehaviorSubject<any>;
  public elapsedTime: BehaviorSubject<any>;
  public totalTime: BehaviorSubject<any>;
  public elapsedPercentage: BehaviorSubject<any>;
  public playingStatus: BehaviorSubject<any>;

  constructor() {
    this.audio = new Audio();

    this.trackInfo = new BehaviorSubject(undefined);
    this.elapsedTime = new BehaviorSubject('00:00');
    this.totalTime = new BehaviorSubject('00:00');
    this.elapsedPercentage = new BehaviorSubject(0);
    this.playingStatus = new BehaviorSubject(false);

    this.callback = new EventEmitter<any>();

    this.trackInfo.subscribe((res) => {
      if (res) {
        this.setAudio(res);
        this.listenAllEvents();
      }
    });
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayingStatus, false);
    this.audio.addEventListener('play', this.setPlayingStatus, false);
    this.audio.addEventListener('pause', this.setPlayingStatus, false);
    this.audio.addEventListener('ended', this.setPlayingStatus, false);
  }

  private setPlayingStatus = (state: any): void => {

    switch (state.type) {

      case 'play': 
      this.playingStatus.next('play')
      break

      case 'playing': 
      this.playingStatus.next('playing')
      break
      
      case 'ended': 
      this.playingStatus.next('ended')
      break

      case 'paused': 
      this.playingStatus.next('paused')
      break


      default:
        this.playingStatus.next('paused')
        break;
    }

  } 




  private calculateTime = (): void => {
    console.log('Disparando evento');
    const { duration, currentTime } = this.audio;

    this.elapsedTime.next(this.milisToTime(currentTime));
    this.totalTime.next(this.milisToTime(duration));
    if(!isNaN(duration)){
      this.elapsedPercentage.next(this.milisToPercentage(duration, currentTime));
    }
    
  };

  private milisToTime(currentTime: number): string {
    const seconds = Math.floor(currentTime % 60);
    const minutes = Math.floor((currentTime / 60) % 60);

    const parsedTime = `${this.displayTime(minutes)}:${this.displayTime(
      seconds
    )}`;
    return parsedTime;
  }

  milisToPercentage(duration: number, currentTime: number): number {
    return (currentTime * 100 / duration) ;
  }

  private displayTime(stamp: number) {
    return stamp < 10 ? `0${stamp}` : stamp;
  }

  public setAudio(track: Track) {
    if (track.url) {
      this.audio.src = track.url;
      this.audio.play();
    }
  }

  public togglePlaying(): void{
    (this.audio.paused) ? this.audio.play(): this.audio.pause();
  }

  public seekAudio(percentage: number):void{
   
    const seeked = (percentage * this.audio.duration / 100);
    this.audio.currentTime = seeked;
  }

}
