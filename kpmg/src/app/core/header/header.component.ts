import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  open: boolean = false;

  ngOnInit() {
  }

  OpenMenu() {
    this.open = !this.open;
  }
  CloseMenu() {
    this.open = false;
  }

}
