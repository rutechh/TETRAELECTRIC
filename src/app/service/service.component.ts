import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  year: number = new Date().getFullYear();

  ngOnInit() {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

}
