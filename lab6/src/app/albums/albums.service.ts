<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';

import { Album } from '../models/album';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle })
      .pipe(catchError((error) => throwError(error)));
  }

  getPhotos(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
=======
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';

import { Album } from '../models/album';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle })
      .pipe(catchError((error) => throwError(error)));
  }

  getPhotos(id: number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
>>>>>>> 9123ba716c97b45a0aaf598191e2ebd8b9a6a01a
