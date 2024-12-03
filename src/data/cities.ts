import { City } from '../types';

export const cities: City[] = [
  // 東亞
  {
    name: {
      'zh-TW': '台北',
      'en-US': 'Taipei',
      'de-DE': 'Taipeh'
    },
    country: {
      'zh-TW': '台灣',
      'en-US': 'Taiwan',
      'de-DE': 'Taiwan'
    },
    searchTerms: ['taipei', 'taiwan', 'taipeh', '台北', '臺北', '台灣', '臺灣'],
    timezone: 'Asia/Taipei',
    latitude: 25.0330,
    longitude: 121.5654
  },
  {
    name: {
      'zh-TW': '中國',
      'en-US': 'China',
      'de-DE': 'China'
    },
    country: {
      'zh-TW': '中國',
      'en-US': 'China',
      'de-DE': 'China'
    },
    searchTerms: ['china', 'beijing', 'shanghai', '中國', '北京', '上海'],
    timezone: 'Asia/Shanghai',
    latitude: 39.9042,
    longitude: 116.4074
  },
  {
    name: {
      'zh-TW': '東京',
      'en-US': 'Tokyo',
      'de-DE': 'Tokio'
    },
    country: {
      'zh-TW': '日本',
      'en-US': 'Japan',
      'de-DE': 'Japan'
    },
    searchTerms: ['tokyo', 'japan', 'tokio', '東京', '日本'],
    timezone: 'Asia/Tokyo',
    latitude: 35.6762,
    longitude: 139.6503
  },
  {
    name: {
      'zh-TW': '首爾',
      'en-US': 'Seoul',
      'de-DE': 'Seoul'
    },
    country: {
      'zh-TW': '南韓',
      'en-US': 'South Korea',
      'de-DE': 'Südkorea'
    },
    searchTerms: ['seoul', 'korea', '首爾', '南韓', '韓國'],
    timezone: 'Asia/Seoul',
    latitude: 37.5665,
    longitude: 126.9780
  },

  // 東南亞
  {
    name: {
      'zh-TW': '新加坡',
      'en-US': 'Singapore',
      'de-DE': 'Singapur'
    },
    country: {
      'zh-TW': '新加坡',
      'en-US': 'Singapore',
      'de-DE': 'Singapur'
    },
    searchTerms: ['singapore', 'singapur', '新加坡'],
    timezone: 'Asia/Singapore',
    latitude: 1.3521,
    longitude: 103.8198
  },

  // 歐洲
  {
    name: {
      'zh-TW': '倫敦',
      'en-US': 'London',
      'de-DE': 'London'
    },
    country: {
      'zh-TW': '英國',
      'en-US': 'United Kingdom',
      'de-DE': 'Vereinigtes Königreich'
    },
    searchTerms: ['london', 'uk', 'britain', 'england', '倫敦', '英國'],
    timezone: 'Europe/London',
    latitude: 51.5074,
    longitude: -0.1278
  },
  {
    name: {
      'zh-TW': '巴黎',
      'en-US': 'Paris',
      'de-DE': 'Paris'
    },
    country: {
      'zh-TW': '法國',
      'en-US': 'France',
      'de-DE': 'Frankreich'
    },
    searchTerms: ['paris', 'france', '巴黎', '法國'],
    timezone: 'Europe/Paris',
    latitude: 48.8566,
    longitude: 2.3522
  },
  {
    name: {
      'zh-TW': '柏林',
      'en-US': 'Berlin',
      'de-DE': 'Berlin'
    },
    country: {
      'zh-TW': '德國',
      'en-US': 'Germany',
      'de-DE': 'Deutschland'
    },
    searchTerms: ['berlin', 'germany', 'deutschland', '柏林', '德國'],
    timezone: 'Europe/Berlin',
    latitude: 52.5200,
    longitude: 13.4050
  },

  // 北美洲
  {
    name: {
      'zh-TW': '紐約',
      'en-US': 'New York',
      'de-DE': 'New York'
    },
    country: {
      'zh-TW': '美國',
      'en-US': 'United States',
      'de-DE': 'Vereinigte Staaten'
    },
    searchTerms: ['new york', 'usa', 'america', '紐約', '美國'],
    timezone: 'America/New_York',
    latitude: 40.7128,
    longitude: -74.0060
  },
];