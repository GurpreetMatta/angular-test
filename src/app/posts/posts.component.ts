import { Posts } from './../crudform/posts.model';
import { PostService } from '../_services/post.service';
import { DataService } from '../_services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { PostsModel } from '../_models/post.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostsModel = new PostsModel();
  form;
  id: string;
  title: string;
  description: string;
  constructor(private fb: FormBuilder,
              private service: PostService,
              private route: ActivatedRoute) {
    this.form = fb.group({
      title: ['', Validators.required],
      description: []
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.isEmpty(this.id)) {
      console.log(this.id);
      this.service.get(this.id)
        .subscribe(response => {
          this.posts = response;
          this.title = this.posts.title;
          this.description = this.posts.description;
          console.log(this.posts);
        });
    } else {
      this.title = null;
      this.description = null;
    }
  }

  submit() {
    this.posts.title = this.form.get('title').value;
    this.posts.description = this.form.get('description').value;
    console.log(this.posts);
    this.service.create(this.posts)
      .subscribe(response => {
        console.log(' ' + response);
        this.form.reset();
      },
        error => {
          console.log('====>' + error);

        });

  }

  isEmpty(str) {
    return (!str || 0 === str.length);
  }
}
