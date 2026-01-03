import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync, mkdirSync, cpSync, readFileSync, writeFileSync } from 'fs'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    {
      name: 'copy-globals-css',
      writeBundle() {
        // Read the source globals.css
        const sourceCss = readFileSync(
          resolve(__dirname, 'src/styles/globals.css'),
          'utf-8'
        )

        // Replace the relative path to fonts to point to the package path
        const distCss = sourceCss.replace(/\.\.\/assets\/fonts/g, '@soar-design/soar-react-components/dist/assets/fonts')

        // Write the modified CSS to dist/globals.css
        writeFileSync(
          resolve(__dirname, 'dist/globals.css'),
          distCss
        )

        // Copy fonts to dist/assets/ so they are accessible relative to dist/globals.css
        const distAssetsDir = resolve(__dirname, 'dist/assets')
        mkdirSync(distAssetsDir, { recursive: true })
        cpSync(
          resolve(__dirname, 'src/assets/fonts'),
          resolve(__dirname, 'dist/assets/fonts'),
          { recursive: true }
        )
      }
    },
    dts({
      include: ['src'],
      exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
      rollupTypes: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        banner: "'use client';",
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    cssCodeSplit: false
  }
})
