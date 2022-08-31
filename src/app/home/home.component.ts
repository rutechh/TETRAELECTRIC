import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgImageSliderComponent } from 'ng-image-slider';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
		autoplaySpeed: 1000,
    navSpeed: 700,
    navText: [''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  imagesize = {width: '200px', height: '400px', space: 15};
  imageObject: Array<object> = [{
    image: 'assets/img/1phase.png',
    thumbImage: 'assets/img/1phase.png',
    alt: '',
    title: 'One Phase Meter'
  }, {
    image: 'assets/img/3phase.png',
    thumbImage: 'assets/img/3phase.png',
    alt: '',
    title: 'Three Phase meter'
  }, {
    image: 'assets/img/3phasebox.png',
    thumbImage: 'assets/img/3phasebox.png',
    alt: '',
    title: 'Three Phase meter'
  }, {
    image: 'assets/img/box.png',
    thumbImage: 'assets/img/box.png',
    alt: '',
    title: 'Double Phase meter'
  }, {
    image: 'assets/img/box2.png',
    thumbImage: 'assets/img/box2.png',
    alt: '',
    title: 'Double Phase meter'
  }, {
    image: 'assets/img/box3.png',
    thumbImage: 'assets/img/box3.png',
    alt: '',
    title: 'Single Phase Meter'
  },
  {
    image: 'assets/img/box4.png', // Support base64 image
    thumbImage: 'assets/img/box4.png', // Support base64 image
    title: 'Three Phase meter', //Optional: You can use this key if want to show image with title
    alt: '', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }];



}
