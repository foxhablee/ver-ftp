import * as git from 'isomorphic-git'
import * as fs from 'node:fs'
import * as os from 'node:os'
import * as path from 'node:path'

export async function initGitFolder(): Promise<void> {
    const gitDir = import.meta.env.DEV ? path.resolve(process.cwd(), 'git-test') : os.homedir()

    return git.init({ fs, dir: gitDir })
}
