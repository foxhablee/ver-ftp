export async function getPageId(): Promise<number> {
    const pageIdRes = await window.api.window.getId(undefined)

    if (!pageIdRes.ok) return -1
    else return pageIdRes.data
}
