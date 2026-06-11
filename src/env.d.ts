/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FTP_TEST_HOST: string
    readonly VITE_FTP_TEST_PORT: string
    readonly VITE_FTP_TEST_USER: string
    readonly VITE_FTP_TEST_PASSWORD: string
    readonly VITE_FTP_TEST_SECURE: 'true' | 'false'
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
