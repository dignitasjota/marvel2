import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comic } from './interfaces/comic.interface';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {
  public_key = '537f732abb59d210e88030733b31298a';
  hash = '06f30a887940628f6dfe5146cee51452';
  character = '1009718';  //lobezno
  url_api_comics = `https://gateway.marvel.com:443/v1/public/characters/${this.character}/comics?ts=1&apikey=${this.public_key}&hash=${this.hash}`;



  constructor(private http: HttpClient) { }

  getAllComics() : Observable<any> {

    return this.http.get<any>(this.url_api_comics)
      .pipe(map((data: any) => data.data.results))

  }

  getComicById(id:number) : Observable<any> {

    var url_api_comic = `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=${this.public_key}&hash=${this.hash}`;

    return this.http.get<Comic>(url_api_comic)
      .pipe(map((data: any) => data.data.results))

  }
}
