import { NgModule } from '@angular/core';
import { LoggerComponent } from './logger.component';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
  ],
  declarations: [LoggerComponent],
  exports: [LoggerComponent],
  providers: [LoggerService]
})
export class LoggerModule { }
