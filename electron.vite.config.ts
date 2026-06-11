import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    main: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        build: {
            lib: {
                entry: 'src/app/backend/index.ts',
            },
        },
    },
    preload: {
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        build: {
            lib: {
                entry: 'src/app/preload/index.ts',
            },
        },
    },
    renderer: {
        root: resolve('src'),
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        build: {
            rollupOptions: {
                input: resolve('src', 'index.html'),
            },
        },
        plugins: [react()],
    },
})
