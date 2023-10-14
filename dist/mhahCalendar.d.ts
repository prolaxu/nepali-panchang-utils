import { MhahConstant } from './mhahConstant';
import { MhahPanchangImpl } from './mhahPanchangImpl';
import { MhahCalculateFunc } from './mhahCalculateFunc';
export declare class MhahCalendar {
    calendar(mhahConstant: MhahConstant, dt: Date, lat: number, lng: number, height?: number): {
        Tithi: any;
        Paksha: any;
        Nakshatra: any;
        Yoga: any;
        Karna: any;
        Masa: any;
        MoonMasa: any;
        Raasi: any;
        Ritu: any;
    };
    getCalendarTithi(sunRise: number, mhahPanchangImpl: MhahPanchangImpl): number;
    getCalendarNakshatra(mhahCalculateFunc: MhahCalculateFunc, mhahPanchangImpl: MhahPanchangImpl, ayanamsa: number, sunRise: number): number;
    getCalendarYoga(mhahCalculateFunc: MhahCalculateFunc, mhahPanchangImpl: MhahPanchangImpl, sunRise: number, ayanamsa: number): number;
    getCalendarRaasi(mhahPanchangImpl: MhahPanchangImpl, Lsun: number, ayanamsa: number): number;
    getMasa(mhahPanchangImpl: MhahPanchangImpl, tithi: number, sunrise: number): {
        n_maasa: number;
        is_leap_month: boolean;
    };
    getRitu(masa_num: number): number;
}
