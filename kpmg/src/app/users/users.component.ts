import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  ngOnInit() {
  }

  readMore(e) {
    e.target.parentNode.classList.add('more');
  }

}
