import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from './types'
import { Observable } from 'rxjs'


const API_URL: string = 'https://jsonplaceholder.typicode.com';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`)
  }
}
