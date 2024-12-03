import React from 'react';

export const BackgroundPattern: React.FC = () => (
  <div className="absolute inset-0 opacity-[0.08]">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="chinese-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* 雲紋背景 */}
          <path d="M60 0C48.954 0 40 8.954 40 20s8.954 20 20 20 20-8.954 20-20S71.046 0 60 0zm0 36c-8.837 0-16-7.163-16-16S51.163 4 60 4s16 7.163 16 16-7.163 16-16 16z" fill="#92400e"/>
          
          {/* 回紋圖案 */}
          <path d="M0 60h15c0-24.853 20.147-45 45-45V0C26.863 0 0 26.863 0 60z" fill="#92400e"/>
          <path d="M105 60h15c0-33.137-26.863-60-60-60v15c24.853 0 45 20.147 45 45z" fill="#92400e"/>
          <path d="M60 105v15c33.137 0 60-26.863 60-60h-15c0 24.853-20.147 45-45 45z" fill="#92400e"/>
          <path d="M60 105c-24.853 0-45-20.147-45-45H0c0 33.137 26.863 60 60 60z" fill="#92400e"/>
          
          {/* 中心裝飾 */}
          <circle cx="60" cy="60" r="8" fill="#92400e" opacity="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#chinese-pattern)"/>
    </svg>
  </div>
);