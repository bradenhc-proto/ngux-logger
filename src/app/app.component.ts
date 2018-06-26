import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'projects/logger/src/public_api';
import { LoggerInstance, LogLevel } from 'projects/logger/src/lib/logger-instance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  private log: LoggerInstance;

  constructor(private ls: LoggerService) {
    this.log = ls.getInstance(AppComponent.name);
  }

  ngOnInit() {
    this.log.setLevel(LogLevel.DEBUG);
    this.log.debug('Hello World!');
    this.ls.info('Information');
    this.log.info('Information');
    this.log.error('An error message');
    this.ls.error('A global error');
  }
}
