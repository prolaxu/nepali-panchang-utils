export declare class MhahPanchang {
    private mhahConstant;
    private mhahCalculateFunc;
    private mhahSunMoonTimer;
    private mhahCalendar;
    calculate(dt: Date): {
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
    calendar(dt: Date, lat: number, lng: number, height?: number): {
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
    sunTimer(date: Date, lat: number, lng: number, height?: number): any;
    getMhahConstant(catgory: string, name: string): Array<string>;
    setMhahConstant(catgory: string, name: string, mhahlist: Array<string>): void;
}
