import { Component, EventEmitter, Output } from '@angular/core';
import {faMagnifyingGlassArrowRight} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() selectMovieEvent=new EventEmitter<string>()
  faMagnify = faMagnifyingGlassArrowRight

  searchMovieByTitle(searchString:string){
    this.selectMovieEvent.emit(searchString)


  }
}
