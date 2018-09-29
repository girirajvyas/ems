import { Component, OnInit } from '@angular/core';
import { AppSettings } from './shared/app.settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rakuten-ems-npm';

  ngOnInit(){
    this.title = AppSettings.APPLICATION_TITLE;
  }
}
