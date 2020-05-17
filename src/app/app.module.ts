import { AuthService } from './_services/auth.service';
import { GlobalErrorHandler } from './apperror/globalerrorhandler.error';
import { PostService } from './_services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BindingComponent } from './binding/binding.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { DirectivesComponent } from './directives/directives.component';
import { TopnavComponent } from './topnav/topnav.component';
import { InputformatDirective } from './inputformat.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { CrudformComponent } from './crudform/crudform.component';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    BindingComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    DirectivesComponent,
    TopnavComponent,
    InputformatDirective,
    ContactFormComponent,
    StudentFormComponent,
    TestComponent,
    SignupComponent,
    CrudformComponent,
    NavbarComponent,
    PostsComponent,
    HomepageComponent,
    BackbuttonComponent,
    AccessdeniedComponent,
    AnimationDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [ PostService,
    AuthService,
    [AUTH_PROVIDERS]
  // {
  //   provide: ErrorHandler,
  //   useClass: GlobalErrorHandler
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
