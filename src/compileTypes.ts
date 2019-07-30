import {compileFromFile} from 'json-schema-to-typescript'
import * as fs from "fs"
import * as path from "path"

let directoryPath = path.join(__dirname, 'jsonschemas')
fs.truncate('src/jsonschemas/types.d.ts', () => null)
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err)
    }

    files.forEach(function (file) {
        let match = file.match(/(.*).json/g)
        if (match != null) {
            compileFromFile(path.join(directoryPath, file), {cwd: directoryPath, bannerComment: ""})
                .then(ts => fs.appendFile('src/jsonschemas/types.d.ts', ts, () => null))

        }
    })
})
