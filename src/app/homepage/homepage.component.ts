import { UserModel } from './../_models/user.model';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: UserModel;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
