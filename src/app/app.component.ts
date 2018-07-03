import {Component, OnInit} from '@angular/core';
import {GithubService} from './services/github.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Repo} from './models/repo';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  repos: Repo[];
  form: FormGroup;
  username: string;
  user: User;

  constructor(private _githubService: GithubService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
    });

    this.form.get('username').valueChanges.subscribe(val => {
      this.username = val;

      this.getUser(this.username);

      this.getRepos(this.username);
    });
  }

  getUser(username) {
    this._githubService.getUser(username)
      .subscribe(user => {
        console.log(user);

        this.user = user;
      });
  }

  getRepos(username) {
    this._githubService.getRepos(username)
      .subscribe(repos => {
        console.log(repos);

        this.repos = repos;
      });
  }
}
