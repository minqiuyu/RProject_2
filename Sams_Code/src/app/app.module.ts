import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileItemComponent } from './profile/profile-item/profile-item.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './profile/profile-page/post/post.component';
import { ProfilesService } from './profile/profiles.service';
import { AuthService } from './profile/auth.service';
import { AuthGuard } from './profile/auth-guard.service';
import { PostService } from './profile/profile-page/post/post.service';
import { NewPostComponent } from './profile/profile-page/post/new-post/new-post.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    PageNotFoundComponent,
    SearchComponent,
    NavbarComponent,
    ProfileItemComponent,
    LoginComponent,
    ProfilePageComponent,
    PostComponent,
    NewPostComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfilesService, AuthService, AuthGuard, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
