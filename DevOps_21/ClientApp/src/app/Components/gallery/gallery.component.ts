import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Pink-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  
  state:string;

  constructor() {
    this.state = 'Welcome';
   }

  ngOnInit() {
  }


  change(key:string) {
    this.state = key;
  }


}
