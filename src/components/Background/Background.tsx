import React from 'react';
import { CloudPattern } from './patterns/CloudPattern';
import { KnotPattern } from './patterns/KnotPattern';
import { DoubleDragonPattern } from './patterns/DoubleDragonPattern';
import { BackgroundPattern } from './BackgroundPattern';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 主背景圖案 */}
      <BackgroundPattern />

      {/* 右上角裝飾 - 祥雲圖案 */}
      <div className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.12] transform rotate-45">
        <CloudPattern />
      </div>

      {/* 左下角裝飾 - 傳統紋樣 */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-[0.12]">
        <KnotPattern />
      </div>

      {/* 中央上方 - 雙龍圖案 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 opacity-[0.08]">
        <DoubleDragonPattern />
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