import { AppError } from './../apperror/app.error';
import { PostService } from '../_services/post.service';
import { Posts } from './posts.model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'crudform',
  templateUrl: './crudform.component.html',
  styleUrls: ['./crudform.component.css'],
  animations:[
    trigger('fade',[
      // state('void',
      //   style({ background: "yewhillow", color: "blue" })
      // ),
      // transition('void => *',[
      //   animate(2000)
      // ]),
      transition(':leave,:enter',[
        animate(2000,keyframes([
          style({
            offset:.20,
            opacity:1,
            transform:'translateX(20px)'
          }),
          style({
            offset:1,
            opacity:0,
            transform:'translateX(-100%)'
          })
        ]))
      ])
    ])
  ]
})
export class CrudformComponent implements OnInit {

  posts: Posts[] = [new Posts()];

  constructor(private service: PostService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getAll()
    .subscribe(response => {
      this.posts = response;
    }, (error: Response) => {
      throw error;
    });
  }

  createPost(title: HTMLInputElement) {
    const post: Posts = {
      id: null,
      title: title.value  ,
      description: null
     };

    this.service.create(post)
    .subscribe(response => {
        console.log('===' + response.json());
        title.value = '';
        this.loadData();
    }, (error: AppError) => {
      throw error;
    });
  }

  update(id) {
      this.router.navigate(['/posts', id]);
  }

  onDelete(id: number) {
    this.service.delete(id)
    .subscribe(response => {
      this.loadData();
    }, (error: AppError) => {
      throw error;
    });
  }
}
