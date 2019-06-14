import fs from 'fs';
import path from 'path';
// import nodeResolvePlugin from 'rollup-plugin-node-resolve';

const result = (() => {
  const srcPath = path.join(__dirname, 'src');
  const distPath = path.join(__dirname, 'dist');
  const fileNames = fs.readdirSync(srcPath);
  const files = fileNames.reduce((arr, fileName) => {
    arr.push({
      input: path.join(srcPath, fileName),
      output: {
        file: path.join(distPath, fileName),
        format: 'cjs',
      },
      // plugins: [nodeResolvePlugin()],
    });
    return arr;
  }, []);

  return files;
})();

export default result;
