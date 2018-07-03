import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {User} from '../models/user';
import {Repo} from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private clientId = '60b9f23dedffbdfc476c';
  private clientSecret = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

  constructor(private _http: HttpClient) { }

  getUser(userName) {
    return this._http.get<User>('http://api.github.com/users/' + userName
      + '?client_id=' + this.clientId
      + '&client_secret=' + this.clientSecret)
      .pipe(
        map(res => res)
      );
  }

  getRepos(userName) {
    return this._http.get<Repo[]>('http://api.github.com/users/' + userName
      + '/repos?client_id=' + this.clientId
      + '&client_secret=' + this.clientSecret)
      .pipe(
        map(res => res)
      );
  }
}
