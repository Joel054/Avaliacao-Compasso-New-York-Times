import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  API_URL_SCIENCE = "https://api.nytimes.com/svc/news/v3/content/all/science.json?limit=150"
  API_URL_TECH = "https://api.nytimes.com/svc/news/v3/content/all/technology.json?limit=150"
  API_KEY = "Zzlh06XfQI0BbsJDpc2XweBi3PbVnvX1"

  constructor(private http: HttpClient) { }
  getNewsTech() {
    return this.http.get(this.API_URL_TECH+"&api-key="+this.API_KEY);
  }
  getNewsScience() {
    return this.http.get(this.API_URL_SCIENCE+"&api-key="+this.API_KEY);
  
  }
}
