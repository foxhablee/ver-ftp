export { createStore } from './store'
export { storeApi } from './api'

/**
 * Persisted store shape. Empty by design — each feature augments it via
 * `declare module '@/backend/shared/store'` with its own key, so the store
 * layer stays domain-agnostic.
 */
export interface StoreSchema {}
