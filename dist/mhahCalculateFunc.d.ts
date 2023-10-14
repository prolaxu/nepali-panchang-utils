import { MhahConstant } from './mhahConstant';
import { MhahPanchangImpl } from './mhahPanchangImpl';
export declare class MhahCalculateFunc {
    calculate(d: Date, mhahConstant: MhahConstant): {
        Day: any;
        Tithi: any;
        Paksha: any;
        Nakshatra: any;
        Karna: any;
        Yoga: any;
        Ayanamsa: any;
        Raasi: any;
        Julian: any;
    };
    getTithi(Lmoon: number, Lsun: number): number;
    getNakshatra(mhahPanchangImpl: MhahPanchangImpl, Lmoon: number, ayanamsa: number): number;
    getZYoga(mhahPanchangImpl: MhahPanchangImpl, ayanamsa: number, jd: number): number;
    getYoga(zyoga: number): number;
    getKarana(Lmoon0: number, Lsun0: number): number[];
    getRaasi(mhahPanchangImpl: MhahPanchangImpl, Lmoon: number, ayanamsa: number): number;
    getPaksha(n_tithi: number): number;
}
