import { getStore } from './store'
import type { StoreSchema } from './index'

/**
 * Domain-agnostic facade over the typed electron-store instance.
 * Reads return `undefined` when the key is absent — defaults are the owning feature's responsibility.
 * Writes replace the token's value wholesale.
 */
export const storeApi = {
    getByToken<TToken extends keyof StoreSchema>(token: TToken): StoreSchema[TToken] | undefined {
        const store = getStore()
        return store.has(token) ? store.get(token) : undefined
    },

    writeByToken<TToken extends keyof StoreSchema>(token: TToken, value: StoreSchema[TToken]): void {
        getStore().set(token, value)
    },
}
