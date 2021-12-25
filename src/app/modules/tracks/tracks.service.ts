import { Injectable } from '@angular/core';
import { Track } from '@core/models/track.model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, retry, catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) {}

  getAllTracks$(): Observable<Array<Track>> {
    return this.http
      .get<Array<Track>>(`${this.API}/tracks`)
      .pipe(
        map(({ data }: any) => data),
        retry(1), // Reintenta 3 veces
        catchError((err)=>{
          const { status, statusText } = err;
          console.log('Error ⚠️', status, statusText);
          return of([])
        }) // Si se da error devuelve array vacio
        );
      
  }

  getAllRandom$(): Observable<Array<Track>> {
    return this.http.get<Array<Track>>(`${this.API}/tracks`)
    .pipe(
      mergeMap(({ data }: any) => this.skipById(data, 2)),
      retry(1), // Reintenta x veces
      catchError((err)=>{
        const { status, statusText } = err;
        console.log('Error ⚠️', status, statusText);
        return of([])
      }) // Si se da error devuelve array vacio
    );
  }

  private skipById(tracks: Array<Track>, id: number): Promise<Array<Track>> {
    return new Promise((res, rej) => {
      const temporal = tracks.filter((track: Track) => track._id !== id);
      res(temporal);
    });
  }
}
