import fs from 'fs';
import util from 'util';
import path from 'path';

/* eslint-disable */
const rollup = require('rollup');

const readDir = util.promisify(fs.readdir);
const FORMAT = 'cjs';
const ignoreFiles = ['rollup.js', 'rollup.config.js', 'babel.config.js'];

readDir(__dirname).then(async (data) => {
  const jsFiles = data.reduce((arr, name) => {
    if (/\.js$/.test(name) && !ignoreFiles.includes(name)) {
      arr.push(name);
    }
    return arr;
  }, []);

  /* eslint-disable */
  for (const name of jsFiles) {
    const filePath = path.resolve(__dirname, name);
    const bundle = await rollup.rollup({ input: filePath });
    await bundle.write({
      file: path.resolve(__dirname, `lib/${name}`),
      format: FORMAT,
    });
  }
});

// export default {
//     input: './isNumber.js',
//     output: {
//         file: './lib/isNumber.js',
//         format: 'cjs'
//     }
// }
