/**
 * Primary class responsible for logging
 */
export class LoggerInstance {
  /** The name of the logging instance (usually the class name) */
  public name: string = '';

  public globalSettings: LoggerSettings;

  public instanceSettings: LoggerSettings = {};

  constructor(name: string, settings: LoggerSettings) {
    this.name = name;
    this.globalSettings = settings;
  }

  public setLevel(level: LogLevel): void {
    this.instanceSettings.level = level;
  }

  public raw(obj: any): void {
    let level = this.getLevel()
    if(level <= LogLevel.DEBUG){
      console.log(obj);
    }
    
  }

  public debug(message: string): void {
    let level = this.getLevel()
    if (level <= LogLevel.DEBUG) {
      let log = this.__createLogMessage('DEBUG', message);
      console.log(log);
    }
  }

  public info(message: string): void {
    let level = this.getLevel()
    if (level <= LogLevel.INFO) {
      let log = this.__createLogMessage('INFO', message);
      console.info(log);
    }
  }

  public warn(message: string): void {
    let level = this.getLevel()
    if (level <= LogLevel.WARN) {
      let log = this.__createLogMessage('WARNING', message);
      console.warn(log);
    }
  }

  public error(message: string): void {
    let level = this.getLevel()
    if (level <= LogLevel.ERROR) {
      let log = this.__createLogMessage('ERROR', message);
      console.error(log);
    }
  }

  private __createLogMessage(level: string, message: string): string {
    let timestamp = this.__getFormattedTime();
    return `${timestamp} [${level}] ${this.name} : ${message}`;
  }

  private __getFormattedTime(): string {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${ms}`;
  }

  public getLevel(): LogLevel {
    let level: LogLevel = this.instanceSettings.level;
    if (this.instanceSettings.level === undefined || level > this.globalSettings.level) {
      level = this.globalSettings.level;
    }
    return level;
  }
}

export interface LoggerSettings {
  level?: LogLevel;
}

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3
}
