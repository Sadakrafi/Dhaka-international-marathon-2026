import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import type { BuildEnvironmentOptions } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function assetFileNames(assetInfo: { names?: string[]; name?: string }) {
  const name = assetInfo.names?.[0] ?? assetInfo.name ?? ''
  if (name.endsWith('.css')) return 'assets/styles.css'
  return 'assets/[name]-[hash][extname]'
}

const clientBuild: BuildEnvironmentOptions = {
  outDir: 'dist/client',
  emptyOutDir: true,
  copyPublicDir: true,
  cssCodeSplit: false,
  rolldownOptions: {
    input: path.resolve(rootDir, 'src/entry-client.tsx'),
    output: {
      entryFileNames: 'assets/[name].js',
      chunkFileNames: 'assets/[name]-[hash].js',
      assetFileNames,
    },
  },
}

const serverBuild: BuildEnvironmentOptions = {
  ssr: true,
  outDir: 'dist/server',
  emptyOutDir: true,
  copyPublicDir: false,
  rolldownOptions: {
    input: path.resolve(rootDir, 'src/entry-server.tsx'),
    output: {
      entryFileNames: '[name].js',
      chunkFileNames: 'assets/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash][extname]',
    },
  },
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [TanStackRouterVite(), react()],
  build: isSsrBuild ? serverBuild : clientBuild,
}))
