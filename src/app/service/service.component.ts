import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  showMenu: boolean = true;
  constructor() { }
  year: number = new Date().getFullYear();

  ngOnInit() {
  }
  toggleNav(){
    this.showMenu = !this.showMenu;
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
