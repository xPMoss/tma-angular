// Angular -->
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
// <-- Angular

// Angular/routing -->
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// <-- Angular/routing

// Environment variabels
import { environment as env } from '../environments/environment';

// Firebase -->
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// <-- Firebase

// Shared components -->
import { NavigationComponent } from "./shared/components/navigation/navigation.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { ToTopComponent } from "./shared/components/to-top/to-top.component";
// <-- Shared components

// Components -->
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { DiscoverComponent } from "./components/discover/discover.component";
import { ListComponent } from "./components/list/list.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";

import { FilterComponent } from "./components/filter/filter.component";
import { ImageLoadingComponent } from "./components/image-loading/image-loading.component";

import { SearchResultComponent } from "./shared/components/search-result/search-result.component";
import { SearchFieldComponent } from "./shared/components/search-field/search-field.component";
import { SearchPageComponent } from "./components/search-page/search-page.component";
// <-- Components

// Auth components -->
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// Auth components <--

// Bootstrap -->
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
// <-- Bootstrap

// Services -->
import { AuthService } from "./shared/services/auth.service";
import { TmdbService } from "./shared/services/tmdb.service";
import { MovieService } from "./shared/services/movie.service";
import { SearchService } from "./shared/services/search.service";
import { UserService } from "./shared/services/user.service";
import { DiscoverService } from "./shared/services/discover.service";
import { MsgService } from "./shared/services/msg.service";
// <-- Services



@NgModule({
  declarations: [
    AppComponent,
    // -->
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    ToTopComponent,
    // <--
    // -->
    HomeComponent,
    ProfileComponent,
    DiscoverComponent,
    MovieComponent,
    MovieDetailComponent,
    ListComponent,
    // <--
    FilterComponent,
    ImageLoadingComponent,
    SearchResultComponent,
    SearchFieldComponent,
    SearchPageComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent

  ],
  imports: [
    // Firebase modules -->
    AngularFireModule.initializeApp(env.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    // <-- Firebase modules
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports: [],
  providers: [AuthService, UserService, TmdbService, MovieService, SearchService, DiscoverService, MsgService],
  bootstrap: [AppComponent]
})
export class AppModule {

  

 }
