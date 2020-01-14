import { FileSystem, JsonFile } from '@rushstack/node-core-library'
import { resolve } from 'path'

const resourcesFixturesLoadJson = (fileName: string) => {
  const parentPath = resolve(__dirname, '..', '..', 'resources', 'fixtures')
  const normalizedFilePath = resolve(parentPath, fileName)
  if (!FileSystem.exists(normalizedFilePath)) {
    throw new Error(`Input file not found: ${fileName} in ${parentPath}`)
  }

  return JsonFile.load(normalizedFilePath)
}

export const fixtures = {
  loadJson: resourcesFixturesLoadJson,
}
