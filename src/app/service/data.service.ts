import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

url:string='https://api.themoviedb.org/3'; 
  constructor(private http:HttpClient) { }
  getLatestMovies():Observable<any>{
    return this.http.get<any>(this.url+'/movie/latest?api_key='+environment.api_key)
  }
  getYoutubeVideo(name:any):Observable<any>{
 return this.http.get<any>(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&key=AIzaSyCl2l4r2KnZhxsnMVKYN6veQYvGcVhmcG4`)
  }
  getPopularMovies():Observable<any>{
    return this.http.get<any>(this.url+'/movie/popular?api_key='+environment.api_key)
  }
  getPlayingMovies():Observable<any>{
    return this.http.get<any>(this.url+'/movie/now_playing?api_key='+environment.api_key)
  }
  getTopRatedMovies():Observable<any>{
    return this.http.get<any>(this.url+'/movie/top_rated?api_key='+environment.api_key)
  }
  getTrendingMovies():Observable<any>{
    return this.http.get<any>(this.url+'/trending/all/week?api_key='+environment.api_key)
  }
  getMoviesByID(id:any){
    return this.http.get<any>(this.url+`/movie/${id}?api_key=`+environment.api_key)

  }
  getUpcoming():Observable<any>{
    return this.http.get<any>(this.url+'/movie/upcoming?api_key='+environment.api_key)
  }
  getOriginals():Observable<any>{
    return this.http.get<any>(this.url+'/discover/tv?api_key='+environment.api_key)
  }
}
