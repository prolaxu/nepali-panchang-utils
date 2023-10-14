import { MhahCalculateFunc } from './mhahCalculateFunc';
import { MhahConstant } from './mhahConstant';
import { MhahSunMoonTimer } from './mhahSunMoonTimer';
import { MhahCalendar } from './mhahCalendar';

export class MhahPanchang {
  private mhahConstant = new MhahConstant();
  private mhahCalculateFunc = new MhahCalculateFunc();
  private mhahSunMoonTimer = new MhahSunMoonTimer();
  private mhahCalendar = new MhahCalendar();
  calculate(dt: Date) {
    return this.mhahCalculateFunc.calculate(dt, this.mhahConstant);
  }

  calendar(dt: Date, lat: number, lng: number, height?: number) {
    return this.mhahCalendar.calendar(this.mhahConstant, dt, lat, lng, height);
  }

  sunTimer(date: Date, lat: number, lng: number, height?: number) {
    height = height || 0;
    return this.mhahSunMoonTimer.sunTimer(date, lat, lng, height);
  }

  getMhahConstant(catgory: string, name: string): Array<string> {
    return this.mhahConstant[catgory][name];
  }

  setMhahConstant(catgory: string, name: string, mhahlist: Array<string>) {
    this.mhahConstant[catgory][name] = mhahlist;
  }
}
