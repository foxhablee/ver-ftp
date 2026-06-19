import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    main: {
        envPrefix: ['BACKEND_', 'VITE_'],
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        build: {
            lib: {
                entry: 'src/backend/app/index.ts',
            },
        },
    },
    preload: {
        envPrefix: ['PRELOAD_', 'VITE_'],
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        build: {
            lib: {
                entry: 'src/preload/index.ts',
            },
        },
    },
    renderer: {
        envPrefix: ['RENDERER_', 'VITE_'],
        root: resolve('src/renderer'),
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        build: {
            rollupOptions: {
                input: resolve('src/renderer', 'index.html'),
            },
        },
        plugins: [react()],
    },
})
