const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');
// 1.clean：清楚上一次打包的文件结果
gulp.task('clean',async () => {
  await del('lib/**')
  await del('es/**')
  await del('dist/**')
  await del('metadata.json')
})
// 2.es: 打包成esm，ts-》js esnext-》es5
gulp.task('es',  () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module:'ESNext'
  })
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'))
})
// 3.cjs:从es打包好的文件中提取转成cjs,通过babel转
gulp.task('cjs', () => {
  return gulp.src(['./es/**/*.js']).pipe(babel({
    configFile:'../../.babelrc'
  })).pipe(gulp.dest('lib/'))
})
// 4.declaretion 类型声明
gulp.task('declaration', function () { 
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  })
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'))
})
// 4.copy readme.md 
gulp.task('copyReadme', async () => {
  await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'))
})
exports.default = gulp.series('clean','es','cjs','declaration','copyReadme')