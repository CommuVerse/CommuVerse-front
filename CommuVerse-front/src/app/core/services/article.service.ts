import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable ({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getArticles(): Observable<any[]>{
    return this.http.get<any[]>('${this.baseUrl}/articulos');
  }
}
