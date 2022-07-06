import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  title = "Nature";
  natureList: Content[];
  constructor() {
    this.natureList = [{
      id: 1,
      title: 'Waterfall',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/1920/1080/16/7/bcvNn0.jpg",
      type: "Waterfall area"
    },{
      id: 2,
      title: 'Sunset',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/1440/900/1/47/Otium8.jpg",
      type: "Sunset"
    },
    {
      id: 3,
      title: 'Trees',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/1680/1050/43/11/vc1haJ.jpg",
      type: "greenary"
    },
    {
      id: 4,
      title: 'Rivers',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/800/450/45/34/Zwv6FY.jpg",
      type: "Rivers"
    },
    {
      id: 5,
      title:'Sea',
      author: "Harshil",
      imageLink: 'https://img.wallpapersafari.com/desktop/1680/1050/61/19/52w6S7.jpg',
      type: "Sea"
    },
  ];
  }

  ngOnInit(): void {
  }

}