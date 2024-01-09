import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../movie';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{

  constructor( private _activatedRoute: ActivatedRoute,
              private _movie_service:MovieService) {}

    selectedMovie!:any
    ngOnInit(): void {


  const id=Number(this._activatedRoute.snapshot.paramMap.get('movieId'))
    this._movie_service.getMovieById(id).subscribe(
      response=>this.selectedMovie=response)
    }

    addToWishList(movie:movie){
      this._movie_service.wishList.push(movie)
      console.table(this._movie_service.wishList)
    }

  }








