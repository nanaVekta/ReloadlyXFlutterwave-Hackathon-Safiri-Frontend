import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  getLocations() {
    return this.http.get(`${environment.apiUrl}locations`, {observe: 'response'});
  }

  getFeaturedLocations() {
    return this.http.get(`${environment.apiUrl}locations/featured`, {observe: 'response'});
  }
}
