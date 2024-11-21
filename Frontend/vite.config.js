import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable external network access
    port: 5173, // Specify the port
    strictPort: true, // Ensure the port is used or fail
    open: true, // Open browser on server start
  },
})
