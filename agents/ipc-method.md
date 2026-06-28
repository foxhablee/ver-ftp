# Шпаргалка IPC-метода

## Структура

```
src/backend/features/<feature-folder>/
├── api/<verb>.ts                 # business logic, без ipc-контекста
├── ipc/<name>.ts                 # handler через wrapIpcHandler
├── model/<name>.ipc-model.ts     # CHANNEL + Method
└── index.ts                      # public API
```

`<feature-folder>` и `<name>` могут содержать несколько методов/контрактов в одном файле.

## Шаги

1. Контракт (`model/<name>.ipc-model.ts`):
   `CHANNEL = 'domain:some-verb' as const` + `type Method = CreateIpcMethod<{ channel, props?, response?, errors? }>`.
2. Бизнес-логика (`api/<verb>.ts`): чистая функция на доменных объектах.
3. Handler (`ipc/<name>.ts`):
   `wrapIpcHandler<Method>(CHANNEL, async (_, props) => ...)`.
   Ошибки: `throw new IpcError(code, msg)`.
   Если нужен `BrowserWindow` и зависимости из слоя выше — handler-фабрика, в main регистрируется `handler({ someDeps })`.
4. Public API слайса (`index.ts`): экспортит ipcHandler и CHANNEL.
5. Main (`src/backend/app/ipc.ts`): `ipcMain.handle(CHANNEL, ipcHandler)`.
6. Preload (`src/preload/api.ts`): `[CHANNEL]: makeIpcHandler<Method>('...')`.
   Импорт CHANNEL и Method только из `*.ipc-model.ts` напрямую.
7. Renderer: `window.api` напрямую не дёргать — обёртки/абстракции/RTK Query.
