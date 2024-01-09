import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { movie } from '../movie';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})

export class WishListComponent {
  myWishList: movie[];

  constructor(private _movieService: MovieService) {
    this.myWishList = this._movieService.wishList;
  }
}
