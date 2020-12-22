import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ComicsApiService } from './shared/comics-api.service';
import { Observable } from 'rxjs';
import { Comic } from './shared/interfaces/comic.interface';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  constructor(private comicSvc: ComicsApiService, private route: ActivatedRoute, private location:Location) { }
  myComic!: Observable<any>;


  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.myComic = this.comicSvc.getComicById(id);
    });

    
  }

  onVolver(): void{
    this.location.back();
  }
}
