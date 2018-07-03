import {Component, Input, OnInit} from '@angular/core';
import {GithubService} from '../../services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  @Input() repos;

  constructor() { }

  ngOnInit() {
  }

  sort() {
    this.repos.sort((a, b) => b.watchers_count - a.watchers_count);
  }

}
