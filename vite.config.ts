import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, 'src/constants/pages.ts'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
