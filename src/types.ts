export interface FortuneFormData {
  date: string;
  time: string;
  location: string;
  timezone: string;
}

export interface Fortune {
  symbol: string;
  element: string;
  trigram: string;
  unicode: string;
}

export interface City {
  name: {
    [key: string]: string;
  };
  country: {
    [key: string]: string;
  };
  searchTerms: string[];
  timezone: string;
  latitude: number;
  longitude: number;
}

export interface TimeRange {
  start: string;
  end: string;
  name: string;
}

export interface LunarDateInfo {
  lunarYear: number;
  lunarMonth: number;
  lunarDay: number;
  chineseTime: string;
  zodiac: string;
  hour: number;
}
