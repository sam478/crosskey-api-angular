import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  private apiUrl = 'https://ivarpivar.netlify.app/api';

  constructor(private http: HttpClient) { }

  getFunds() {
    return this.http.get(this.apiUrl);
  }
}
