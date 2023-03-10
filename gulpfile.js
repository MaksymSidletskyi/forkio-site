// импорт галпа
import gulp from "gulp";
// импорт путей
import { path } from "./gulp/config/path.js";

// импорт плагинов
import { plugins } from "./gulp/config/plugins.js"

global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),  
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { reset } from "./gulp/tasks/reset.js" //имя функции и путь к этой функции после запустить
import { copy } from "./gulp/tasks/copy.js" 
import { html } from "./gulp/tasks/html.js" 
import { scss } from "./gulp/tasks/scss.js" 
import { js } from "./gulp/tasks/js.js" 
import { images } from "./gulp/tasks/images.js" 
import { server } from "./gulp/tasks/server.js" 
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";


function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
  }
  



const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
// последовательность выполнение тасков
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images)) ;



const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

//экспорт сценариев
export { dev };
export { build };

// запуск тасков
gulp.task("default", dev);