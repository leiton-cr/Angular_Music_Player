import { Track } from '@core/models/track.model';
import { Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly API = environment.API;

  constructor(private http:HttpClient) {}

  searchTracks$( filter: string):Observable<any>{
    return this.http.get(`${this.API}/tracks?src=${filter}`).pipe(
      
      map( ({ data }:any) => data.filter((track:Track) => {
        return track.name.toLowerCase().includes(filter.toLowerCase()) || track.artist!.name.toLowerCase().includes(filter.toLowerCase());
      }
      )),
      
    )
  }

}
