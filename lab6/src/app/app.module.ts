import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AlbumsComponent} from './albums/albums.component';
import {AboutComponent} from './about/about.component';
import {AlbumsPhotoComponent} from './albums-photo/albums-photo.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AboutComponent,
    AlbumsPhotoComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
