import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: 'all',
    watch: {
      // Tool-managed directories (Claude Code skills, Playwright MCP's own
      // workspace, freebuff) get written to outside of any build step and
      // have caused EBUSY crashes on Windows when Vite tries to watch them.
      ignored: ['**/.claude/**', '**/.playwright-mcp/**', '**/.freebuff/**'],
    },
  },
});
