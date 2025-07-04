import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@rcv-table/core': resolve(__dirname, '../../packages/core/src'),
      '@rcv-table/react': resolve(__dirname, '../../packages/react/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
