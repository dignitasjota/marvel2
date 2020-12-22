import { Component, OnInit } from '@angular/core';
import { ComicsApiService } from './comic/shared/comics-api.service';
import { Observable } from 'rxjs';
import { Comic } from './comic/shared/interfaces/comic.interface';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicSvc: ComicsApiService) { }
  allComics : Observable<any> | undefined;



  ngOnInit(): void {


    this.getComics();
  }


  getComics(){
    this.allComics = this.comicSvc.getAllComics();
  }
}
