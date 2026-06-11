import { defineConfig } from 'steiger'
import fsd from '@feature-sliced/steiger-plugin'

export default defineConfig([
  ...fsd.configs.recommended,

  // У нас слайсы делятся на сегменты backend/preload/ui под Electron-рантаймы.
  // Steiger по умолчанию знает только канонический набор сегментов FSD
  // (ui, model, api, lib, config). Отключаем правило про неизвестные сегменты,
  // пока не уточним его актуальное имя в @feature-sliced/steiger-plugin@^0.6.
  // TODO: проверить правило по доке плагина и заменить на точечный whitelist
  //       backend/preload/ui вместо полного off.
  {
    files: ['./src/**'],
    rules: {
      // 'fsd/segments-by-purpose': 'off',
    },
  },

  {
    ignores: ['**/__mocks__/**', '**/*.test.*', '**/*.spec.*'],
  },
])
