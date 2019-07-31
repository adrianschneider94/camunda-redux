import {compileFromFile} from 'json-schema-to-typescript'
import * as fs from "fs"

var files: Array<string> = []

let directoryPath = 'static/schemas'
var getFiles = function (path: string, files: Array<string>) {
    fs.readdirSync(path).forEach(function (file) {
        var subpath = path + '/' + file
        if (fs.lstatSync(subpath).isDirectory()) {
            getFiles(subpath, files)
        } else {
            files.push(path + '/' + file)
        }
    })
}

getFiles(directoryPath, files)

fs.truncate('src/remoteTypes.d.ts', () => null)
files.forEach(function (file) {
    let match = file.match(/(\/.*)*(.*).json/g)
    if (match != null) {
        compileFromFile(file, {bannerComment: ""})
            .then(ts => fs.appendFile('src/remoteTypes.d.ts', ts.replace(/export interface (.+) {/g, "export type $1 = {"), () => null))

    }
})

