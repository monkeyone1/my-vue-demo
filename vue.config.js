//const PrerenderSpaPlugin = require('prerender-spa-plugin')
// const path = require('path')
// const Renderer = PrerenderSpaPlugin.PuppeteerRenderer
module.exports = {
  configureWebpack: {
    plugins: [
    //   new PrerenderSpaPlugin(
    //     {
    //       // npm run build的输出目录
    //       staticDir: path.resolve(__dirname, 'dist'),
    //       // 需要进行预渲染的页面
    //       routes: ['/','/home','/about'], 
    //       minify: {
    //         collapseBooleanAttributes:true,
    //         collapseWhitespace:true,
    //         decodeEntities:true,
    //         keepClosingSlash:true,
    //         sortAttributes:true
    //         },
    //       renderer: new Renderer
    //       ({
    //         // 需要注入一个值，这样就可以检测页面当前是否是预渲染的
    //         inject: {
    //           bar:1
    //         },
    //         // slowMo:5000,
    //         headless:false,
    //         // devtools: true,
    //         // 视图组件是在API请求获取所有必要数据后呈现的，因此我们在dom中存在“data view”属性后创建页面快照
    //         renderAfterDocumentEvent: "render-event"
    //       })
    //     }
    // )
    ]
  }
}