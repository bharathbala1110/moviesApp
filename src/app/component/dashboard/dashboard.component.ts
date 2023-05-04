import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/modal/movie';
import { DataService } from 'src/app/service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  latestMovies : any=[];
  // popularMovies!:Movies;
  // nowPlayingMovies!:Movies;
  // topRatedMovies!:Movies;
  // upComingMovies!:Movies;
  // trendingMovies!:Movies;
  originals!:Movies;
  PopularMovies: any;
  PlayingMovies: any;
  TopRatedMovies: any;
  TrendingMovies: any=[];
  Upcoming: any;
  Originals: any;
  yVideo: any;
  youTubeUrl: any;
  id: any;
  movieID: any;


  constructor(private dataService:DataService,private router:Router ) { }

  ngOnInit(): void {
    this.getLatestMovies()
    this.getPopularMovies()
    this.getPlayingMovies()
    this.getTrendingMovies()
    this.getTopRatedMovies()
    this.getOriginals()
    this.getUpcoming()
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
    // window.open(this.youTubeUrl,'_blank') 
  })
  }
 
  getLatestMovies(){
    this.dataService.getLatestMovies().subscribe(resp=>{
         this.latestMovies=this.changeData(resp)
         console.log("latestMovie",this.latestMovies)
    },
    (err)=>console.log(err),
    ) 
  }
  changeData(resp: any): any {

    if(!resp.backdrop_path){
          resp.backdrop_path='https://image.tmdb.org/t/p/original'+resp.poster_path +'?api_key='+environment.api_key;
        }
        else{
         resp.backdrop_path = 'https://image.tmdb.org/t/p/original'+resp.poster_path +'?api_key='+environment.api_key;
        }
 }
    getPopularMovies(){
      this.dataService.getPopularMovies().subscribe(resp=>{
           this.PopularMovies=this.modifyData(resp)
           console.log("getPopularMovies",this.PopularMovies)
      },
      (err)=>console.log(err),
      ) 
    }

    getPlayingMovies(){
      this.dataService.getPlayingMovies().subscribe(resp=>{
           this.PlayingMovies=this.modifyData(resp)
           console.log("getPlayingMovies",this.PlayingMovies)
      },
      (err)=>console.log(err),
      ) 
    }
    getTopRatedMovies(){
      this.dataService.getTopRatedMovies().subscribe(resp=>{
        this.TopRatedMovies=this.modifyData(resp)
        console.log("TopRatedMovies",this.TopRatedMovies)
   },
   (err)=>console.log(err),
   ) 

    }
    getTrendingMovies(){
      this.dataService.getTrendingMovies().subscribe(resp=>{
        this.TrendingMovies=this.modifyData(resp)
        console.log("TrendingMovies",this.TrendingMovies)
   },
   (err)=>console.log(err),
   ) 
    }
    getUpcoming(){
      this.dataService.getUpcoming().subscribe(resp=>{
        this.Upcoming=this.modifyData(resp)
        console.log("getUpcoming",this.Upcoming)
   },
   (err)=>console.log(err),
   ) 
    }
    getOriginals(){
      this.dataService.getOriginals().subscribe(resp=>{
        this.Originals=this.modifyData(resp)
        console.log("getOriginals",this.Originals)
   },
   (err)=>console.log(err),
   ) 
    }

  modifyData(movies:any){
    if(movies.results){
      movies.results.forEach((element: {
        name: any;
        title: any; backdrop_path: any; 
}) => {
      element.backdrop_path =  'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key='+environment.api_key;
      if(!element.title){
        element.title=element?.name
      }
      });
    }
   
    return movies
  }
  movieByID(id:any){
    console.log('movie id',id)
    this.router.navigate(['/movie-detail'+'/'+id])
  

  }
}
