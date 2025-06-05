import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bank_mordern_app/',
  plugins: [react()],
});
