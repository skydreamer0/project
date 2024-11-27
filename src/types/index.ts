export type TimeRange = [number, number];

export interface Fortune {
  symbol: string;
  element: string;
  trigram: string;
  unicode: string;
}

export interface FortuneFormData {
  date: string;
  time: string;
  location: string;
  timezone: string;
}

export interface City {
  name: string;
  country: string;
  timezone: string;
}