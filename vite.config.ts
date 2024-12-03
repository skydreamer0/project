import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/project/',
  plugins: [react()],
  optimizeDeps: {
    include: ['date-fns', 'date-fns-tz'],
    exclude: ['lucide-react']
  },
  resolve: {
    dedupe: ['date-fns', 'date-fns-tz']
  }
});