/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-10 15:32:43
 * @LastEditTime: 2024-12-11 10:45:19
 * @Description: 
 */
const commonConfig = require('../../gulpfile')
const gulp = require('gulp');
const fs = require('fs')
const fse = require('fs-extra');
const gm = require('gray-matter');
const fg = require('fast-glob');
const getDesc = (mdPath) => {
  if (!fs.existsSync(mdPath)) {
    return;
  }
  const mdFile = fs.readFileSync(mdPath, 'utf-8')
  const { content } = gm(mdFile);
  let description = (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}
const getMataData = async() => {
  const metadata = {
    functions:[]
  }
  const hooks = fg.sync('src/use*', { onlyDirectories: true })
    .map((hook) => hook.replace('src/', ''))
    .sort();
  await Promise.allSettled(hooks.map(async (hook) => {
    const description = await getDesc(`src/${hook}/index.md`)
    return {
      description,
      name: hook
    }
  })).then(res => {
    metadata.functions = res.map(item => {
      console.log('item',item);
      
      if (item.status == 'fulfilled') { 
        return item.value;
      } 
        return null
    })
  })
  return metadata
}
gulp.task('metadata',async() => {
  let metadata = await getMataData()
  await fse.writeJson('metadata.json', metadata, {
    spaces: 2
  });
});
exports.default = gulp.series(commonConfig.default, 'metadata');
