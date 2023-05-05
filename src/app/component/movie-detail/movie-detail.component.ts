import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  yVideo: any;
  id: any;
  youTubeUrl: any;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show().then(()=>{
      setTimeout(()=>{
        this.spinner.hide();
      },2000)
    });
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
iFrameVideo(element:any){
  // debugger;
  let getName=element
 
  console.log("getname",getName)
 this.dataService.getYoutubeVideo(getName).subscribe(resp=>{
  this.yVideo=resp
  console.log("y",resp)
  const firstVideo=resp.items[0]
  this.id=firstVideo.id.videoId
    this.youTubeUrl=`https://www.youtube.com/watch?v=${firstVideo.id.videoId}`  
  window.open(this.youTubeUrl,'_blank') 
})
}

}
