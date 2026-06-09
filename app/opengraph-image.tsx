import { ImageResponse } from 'next/og';

export const alt = 'Aarohi Veg Restaurant — pure vegetarian dining in Daryaganj, Delhi';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(120% 120% at 50% 0%, #D14D31 0%, #BE3A2B 45%, #591407 100%)',
          color: '#FBF7EF',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            border: '1px solid rgba(200,160,75,0.4)',
            borderRadius: 999,
            padding: '10px 22px',
            fontSize: 26,
            color: '#D4B062',
            marginBottom: 30,
          }}
        >
          ★ 4.9 · 241+ Reviews · 100% Pure Veg
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, textAlign: 'center', lineHeight: 1.1 }}>
          Aarohi Veg Restaurant
        </div>
        <div style={{ fontSize: 34, color: 'rgba(251,247,239,0.75)', marginTop: 18 }}>
          Authentic Vegetarian Delights · Daryaganj, New Delhi
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            color: '#D4B062',
            display: 'flex',
            gap: 18,
          }}
        >
          North Indian · South Indian · Indo-Chinese
        </div>
      </div>
    ),
    { ...size }
  );
}
