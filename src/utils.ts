import { readdirSync, statSync, readFileSync } from 'fs'
import { join } from 'path'
import * as loadJsonFile from 'load-json-file'

/**
 * Find files and return only ones with contents matching name
 */
const getFilePathsFinder = (
  fileNameRegExp: RegExp,
  fullPath: string,
): string[] => {
  const files: string[] = []
  const directoryExists = statSync(fullPath).isDirectory()
  if (directoryExists) {
    const fileNames: string[] = readdirSync(fullPath, { encoding: 'utf-8' })
      .filter(fileName => fileNameRegExp.test(fileName))
      .map(fileName => join(fullPath, fileName))
    files.push(...fileNames)
  }

  return files
}

export const getFilePaths = (
  fileNameRegExp: RegExp,
  relativeDirName?: string,
): string[] => {
  const fullPath = relativeDirName
    ? join(__dirname, relativeDirName)
    : join(__dirname)
  // console.log('getFilePaths', { relativeDirName, fullPath })
  const files = getFilePathsFinder(fileNameRegExp, fullPath)
  return files
}

export const loadAllFilesAsOneString = (
  pattern: RegExp,
  relativeDirName: string,
) =>
  (() => {
    const files = getFilePaths(pattern, relativeDirName)
    // console.log('loadAllFilesAsOneString', files)
    const contents: string[] = []
    for (const filePath of files) {
      try {
        const fileContents = readFileSync(filePath, { encoding: 'utf-8' })
        contents.push(fileContents)
      } catch (e) {
        console.log('loadAllFiles loading error', e)
      }
    }

    return contents
  })()

export const loadAllJsonFiles = (pattern: RegExp, relativeDirName: string) =>
  (() => {
    const files = getFilePaths(pattern, relativeDirName)
    const parsed: any[] = []
    for (const filePath of files) {
      try {
        const contents = loadJsonFile.sync(filePath)
        if (Array.isArray(contents)) {
          parsed.push(...contents)
        }
      } catch (e) {
        console.log('loadAllFiles loading error', e)
      }
    }

    return parsed
  })()
