import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any;
  backdrop_path: any;
  backdrop_path_edit: any;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService) { }

  ngOnInit(): void {
    this.getDetail()
  }
getDetail(){
  this.activatedRoute.params.subscribe(params=>{
    let movieID=params.id
    console.log("id",movieID)
      this.dataService.getMoviesByID(movieID).subscribe(resp=>{
      this.movieDetail= this.modifyData(resp)
      // this.backdrop_path=resp.backdrop_path
    })
  })
  this.modifyData(this.backdrop_path)
}
modifyData(movies:any){

    movies.backdrop_path =  'https://image.tmdb.org/t/p/original'+movies?.backdrop_path+'?api_key='+environment.api_key;
    return movies

}
}
