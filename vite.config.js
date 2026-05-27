import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        landing: resolve(__dirname, 'landing.html'),
        report: resolve(__dirname, 'report.html'),
        surveyIntro: resolve(__dirname, 'mockups/survey-complete-intro.html'),
      },
    },
  },
});
