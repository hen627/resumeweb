import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/resumeweb",
  plugins: [react()],
})

// base code is for github pages perhaps.