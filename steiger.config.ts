import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
    ...fsd.configs.recommended,
    {
        files: ['./src/**'],
        rules: {
            'fsd/no-public-api-sidestep': 'off',
            'fsd/public-api': 'off',
        },
    },

    {
        ignores: ['**/__mocks__/**', '**/*.test.*', '**/*.spec.*'],
    },
])
