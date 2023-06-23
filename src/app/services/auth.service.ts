import { API_CONFIG } from './../config/api.config';
import { Credenciais } from './../models/credenciais';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais){
      return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
        observe: 'response',
        responseType: 'text'
      })
  }
}
