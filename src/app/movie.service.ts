import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe} from 'rxjs';
import { movie } from './movie';
import { map, filter, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) {}

  wishList:movie[]=[]

  getMovieList(): Observable<movie[]> {
    return this._http.get<movie[]>('../assets/movies.json')
  }

  getMovieByTitle(titre:string) : Observable<movie[]> {
    return this.getMovieList().pipe(map(movies=>movies.
      filter(movie=>movie.title.toLowerCase().includes(titre.toLowerCase()))))
  }

  movie!:any
  getMovieById(id:number): Observable<movie | undefined>{
    return this.getMovieList().pipe(map(movies=>movies.
      find(movie=>movie.id===id)))
  }

}















