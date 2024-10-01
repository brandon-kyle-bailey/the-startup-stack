export interface ILogManager {
  debug(message: string, ...args: any[]): void;
  info(message: string, ...args: any[]): void;
  error(message: string, ...args: any[]): void;
}
export class LogManager implements ILogManager {
  private debugLog: boolean;
  constructor(deps: { debug: boolean }) {
    this.debugLog = deps.debug;
  }
  debug(message: string, ...args: any[]): void {
    if (this.debugLog) {
      console.debug(message, JSON.stringify(args));
    }
  }
  info(message: string, ...args: any[]): void {
    if (this.debugLog) {
      console.info(message, JSON.stringify(args));
    }
  }
  error(message: string, ...args: any[]): void {
    console.error(message, JSON.stringify(args));
  }
}
