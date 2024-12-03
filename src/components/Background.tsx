import * as React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 主背景 - 使用重複的傳統圖案 */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="chinese-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* 雲紋背景 */}
              <path d="M40 0C28.954 0 20 8.954 20 20s8.954 20 20 20 20-8.954 20-20S51.046 0 40 0zm0 36c-8.837 0-16-7.163-16-16S31.163 4 40 4s16 7.163 16 16-7.163 16-16 16z" fill="#92400e"/>
              <path d="M40 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S46.627 8 40 8zm0 22c-5.514 0-10-4.486-10-10S34.486 10 40 10s10 4.486 10 10-4.486 10-10 10z" fill="#92400e"/>
              {/* 添加回紋圖案 */}
              <path d="M0 40h10c0-16.569 13.431-30 30-30V0C17.909 0 0 17.909 0 40z" fill="#92400e"/>
              <path d="M70 40h10c0-22.091-17.909-40-40-40v10c16.569 0 30 13.431 30 30z" fill="#92400e"/>
              <path d="M40 70v10c22.091 0 40-17.909 40-40h-10c0 16.569-13.431 30-30 30z" fill="#92400e"/>
              <path d="M40 70c-16.569 0-30-13.431-30-30H0c0 22.091 17.909 40 40 40z" fill="#92400e"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chinese-pattern)"/>
        </svg>
      </div>

      {/* 右上角裝飾 - 祥雲圖案 */}
      <div className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.12] transform rotate-45">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M85,35c0-10.6-8.6-19.2-19.2-19.2c-2.9,0-5.7,0.7-8.2,1.9c-3.9-7.1-11.4-11.9-20-11.9c-12.6,0-22.9,10.2-22.9,22.9
            c0,1.1,0.1,2.2,0.3,3.3c-5.3,2.7-8.9,8.2-8.9,14.5c0,9,7.3,16.3,16.3,16.3h53.2c10.6,0,19.2-8.6,19.2-19.2
            C95,38.9,90.6,35,85,35z" fill="#92400e"/>
        </svg>
      </div>

      {/* 左下角裝飾 - 傳統紋樣 */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-[0.12]">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M50,90c-22.1,0-40-17.9-40-40
            c0-22.1,17.9-40,40-40c22.1,0,40,17.9,40,40C90,72.1,72.1,90,50,90z" fill="#92400e"/>
          <path d="M50,20c-16.6,0-30,13.4-30,30s13.4,30,30,30s30-13.4,30-30S66.6,20,50,20z M50,70c-11,0-20-9-20-20
            c0-11,9-20,20-20c11,0,20,9,20,20C70,61,61,70,50,70z" fill="#92400e"/>
        </svg>
      </div>

      {/* 中央裝飾 - 漸變背景 */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(146,64,14,0.2) 0%, rgba(146,64,14,0) 70%)'
        }}
      />
    </div>
  );
};