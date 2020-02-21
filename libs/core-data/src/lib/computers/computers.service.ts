import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ComputersService {
  model = 'computers'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  findOne(computerId) {
    return this.httpClient.get(this.getUrlForId(computerId));
  }

  create(computer) {
    return this.httpClient.post(this.getUrl(), computer);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(computer) {
    return this.httpClient.patch(this.getUrlForId(computer), computer)
  }

  delete(computerId) {
    return this.httpClient.delete(this.getUrlForId(computerId))
  }
}
