import { Component } from '@angular/core';
import { Content } from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'H_Hingu_Nature';
  myList: List;

  constructor() {
    let contentitem: Content;
    this.myList = new List();

    contentitem = {
      id: 0,
      title: 'Waterfall',
      author: "Harshil",
      imageLink: "https://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2021/02/waterfall-quotes-waterfall-captions-10-1.jpgw3.webphttps://www.thediaryofanomad.com/wp-content/w3-webp/uploads/2021/02/waterfall-quotes-waterfall-captions-10-1.jpgw3.webp",
      type: "Waterfall area",
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 1,
      title: 'Sunset',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/1440/900/1/47/Otium8.jpg",
      type: "Sunset",
    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 2,
      title: 'Trees',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/1680/1050/43/11/vc1haJ.jpg",
      type: "greenary",

    };
    this.myList.addContent(contentitem);
    contentitem = {
      id: 3,
      title: 'Rivers',
      author: "Harshil",
      imageLink: "https://img.wallpapersafari.com/desktop/800/450/45/34/Zwv6FY.jpg",
      type: "Rivers",
    };
    this.myList.addContent(contentitem);

  }
}
