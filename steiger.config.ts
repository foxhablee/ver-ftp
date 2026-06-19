import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
    ...fsd.configs.recommended,
    {
        ignores: ['**/__mocks__/**', '**/*.test.*', '**/*.spec.*'],
    },
])
