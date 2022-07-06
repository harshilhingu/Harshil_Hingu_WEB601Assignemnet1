import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
@Input() natureItem?: Content
  constructor() { }

  ngOnInit(): void {
  }

  printConsole(){
    console.log(this.natureItem?.author);
    console.log(this.natureItem?.id);
  }

}