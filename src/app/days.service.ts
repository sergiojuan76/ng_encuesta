import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DaysService {

  constructor(private httpClient : HttpClient) { }

  getDays() {
    return this.httpClient
      .get<string>(environment.urlDays);
  }
}