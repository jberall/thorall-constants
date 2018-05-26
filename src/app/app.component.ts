import { Component, OnInit } from '@angular/core';
import {
  AbeyanceTypeEnum,
  StateTypeEnum,
  AttachmentIdEnum
} from './../../dist/thorall-enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log(AbeyanceTypeEnum, StateTypeEnum, AttachmentIdEnum);
  }
}
