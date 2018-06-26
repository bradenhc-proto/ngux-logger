import { Injectable } from '@angular/core';
import { LoggerInstance, LoggerSettings, LogLevel } from './logger-instance';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private globalSettings: LoggerSettings = {
    level: LogLevel.ERROR
  };

  private globalInstance: LoggerInstance;

  private instances: Map<string, LoggerInstance> = new Map();

  constructor() { 
    this.globalInstance = new LoggerInstance('ngux.global', this.globalSettings);
  }

  public getInstance(name: string): LoggerInstance {
    if(!this.instances.has(name)){
      this.instances.set(name, new LoggerInstance(name, this.globalSettings));
    }
    return this.instances.get(name);
  }

  public debug(message: string): void {
    this.globalInstance.debug(message);
  }

  public info(message: string): void {
    this.globalInstance.info(message);
  }

  public warn(message:string): void {
    this.globalInstance.warn(message);
  }

  public error(message: string): void {
    this.globalInstance.error(message);
  }
}
