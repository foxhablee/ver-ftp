import { contextBridge } from 'electron'

// Custom APIs for renderer
const api = {}

export type IpcApi = typeof api

try {
    contextBridge.exposeInMainWorld('api', api)
} catch (error) {
    console.error(error)
}
