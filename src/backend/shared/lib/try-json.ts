export function tryJsonParse<TJson extends object | []>(jsonString: string): TJson | null {
    try {
        return JSON.parse(jsonString)
    } catch (error) {
        console.error('Error while parsing json', { error, jsonString })
        return null
    }
}

export function tryJsonStringify(data: object): string | null {
    try {
        return JSON.stringify(data)
    } catch (error) {
        console.error('Error while stringify json', { error, data })
        return null
    }
}
