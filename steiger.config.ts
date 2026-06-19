import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
    ...fsd.configs.recommended,
    {
        files: ['./src/renderer/**'],
    },
    {
        files: ['./src/backend/**'],
    },

    {
        ignores: ['**/__mocks__/**', '**/*.test.*', '**/*.spec.*'],
    },
])
