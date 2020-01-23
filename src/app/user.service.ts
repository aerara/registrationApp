import { Injectable } from '@angular/core';
import { Info } from './info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Info[]>(this.api);
  }

  deleteData(id) {
    return this.http.delete(`${this.api}/${id}`);
  }

  editData(Drive, id) {
    return this.http.put(`${this.api}/${id}`, Drive);
  }

  viewData(id){
    return this.http.get(`${this.api}/${id}`)
  }
}
