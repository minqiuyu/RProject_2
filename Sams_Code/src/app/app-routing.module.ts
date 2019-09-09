import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileItemComponent } from './profile/profile-item/profile-item.component';
import { SearchComponent } from './search/search.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { AuthGuard } from './profile/auth-guard.service';
import { NewPostComponent } from './profile/profile-page/post/new-post/new-post.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './profile/my-profile/my-profile.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [

  // {path: 'profile', component: ProfilePageComponent, children: [{path: ":username", component:ProfilePageComponent}]},
  {path: 'feed', component: FeedComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'newpost',
   canActivate: [AuthGuard], 
   component: NewPostComponent},
  {path: 'myprofile', 
  canActivate: [AuthGuard],
  component: MyProfileComponent},
  {path: 'profiles', 
  canActivate: [AuthGuard],
  component: ProfileListComponent, children: [{path: ":username", component: ProfilePageComponent},{path:"*", component: PageNotFoundComponent}]},
  {path: 'login', component: LoginComponent},
  {path: 'search', 
  canActivate: [AuthGuard],
   component: SearchComponent},
  {path: '', component: LoginComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
