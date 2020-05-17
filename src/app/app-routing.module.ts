import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { AuthGuards } from './_guards/auth-guards.service';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudformComponent } from './crudform/crudform.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'contact-form',
    component: ContactFormComponent,
    canActivate: [AuthGuards]
  },
  {
    path: 'student-form',
    component: StudentFormComponent,
    canActivate: [AuthGuards]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'crudform',
    component: CrudformComponent,
    canActivate: [AuthGuards]
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuards]
  },
  {
    path: 'posts/:id',
    component: PostsComponent,
    canActivate: [AuthGuards]
  },
  {
    path: 'accessdenied',
    component: AccessdeniedComponent
  },
  {
    path: 'animation-demo',
    component: AnimationDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
