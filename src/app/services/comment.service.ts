import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Comment } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private MyAppUrl = 'http://localhost:5097/api';

  constructor(private http: HttpClient) { }

  getComments(): Observable<any>{
    return this.http.get(this.MyAppUrl + '/Comment')
  }

  deleteComment(id: number): Observable<any>{
    return this.http.delete(this.MyAppUrl + '/Comment/Destroy?id=' + id)
  }

  showComments(id : number): Observable<any>{
    return this.http.get(this.MyAppUrl + '/Comment/Show?id=' + id)
  }
}
