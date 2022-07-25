(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{362:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"目录页说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录页说明"}},[t._v("#")]),t._v(" 目录页说明")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("目录页数据需要依赖于结构化的侧边栏数据，就是说你需要在"),s("code",[t._v("config.js")]),t._v("配置 "),s("code",[t._v("sidebar: 'structuring'")]),t._v(" 或 "),s("code",[t._v("sidebar: { mode: 'structuring', collapsable: false}")]),t._v(" 才能实现目录页数据的获取。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("目录页("),s("code",[t._v(".md")]),t._v("文件)可以放置在"),s("code",[t._v("二级目录")]),t._v("、"),s("code",[t._v("三级目录")]),t._v("和"),s("code",[t._v("四级目录")]),t._v("。（"),s("RouterLink",{attrs:{to:"/pages/33d574/#级别说明"}},[t._v("级别说明")]),t._v("）")],1)]),t._v(" "),s("li",[s("p",[t._v("如果你不想在侧边栏显示目录页，你可以在"),s("code",[t._v("一级目录")]),t._v("中单独创建一个文件夹放置你的目录页("),s("code",[t._v(".md")]),t._v("文件)，并在front matter中设置"),s("code",[t._v("sidebar: false")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("如果你想让目录页和其他页面一起出现在侧边栏，你可以和其他页面共同放置在相应的文件夹。(不要设置"),s("code",[t._v("sidebar: false")]),t._v(")")])]),t._v(" "),s("li",[s("p",[t._v("参照下面的示例配置好front matter，然后就可以在导航栏或首页添加目录页链接了。")])])]),t._v(" "),s("p",[s("strong",[t._v("示例")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pageComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用页面组件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Catalogue "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 组件名：Catalogue => 目录页组件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 组件所需数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  01.前端 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置为指定文件夹的名称 (有序号的要带序号)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imgUrl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /img/web.png "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录页内的图片")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("description")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JavaScript、ES6、Vue框架等前端技术 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 目录描述（可加入a标签）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 前端 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面标题")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-01-12 11:51:53")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建日期")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("permalink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /note/javascript "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 永久链接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sidebar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不显示侧边栏")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("article")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不是文章页 (不显示面包屑栏、最近更新栏等)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("comment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不显示评论栏")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("editLink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不显示编辑按钮")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("配置好目录页之后，点击文章页的面包屑将会跳转到目录页。")])]),t._v(" "),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("h3",{attrs:{id:"pagecomponent-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecomponent-name"}},[t._v("#")]),t._v(" pageComponent.name")]),t._v(" "),s("ul",[s("li",[t._v("组件名，必需")]),t._v(" "),s("li",[t._v("使用目录页时 "),s("strong",[t._v("必须")]),t._v(" 设置为"),s("code",[t._v("Catalogue")])])]),t._v(" "),s("h3",{attrs:{id:"pagecomponent-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecomponent-data"}},[t._v("#")]),t._v(" pageComponent.data")]),t._v(" "),s("ul",[s("li",[t._v("组件所需数据，必需")])]),t._v(" "),s("h3",{attrs:{id:"pagecomponent-data-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecomponent-data-key"}},[t._v("#")]),t._v(" pageComponent.data.key")]),t._v(" "),s("ul",[s("li",[t._v("设置要为其生成目录的文件夹名称，必需")]),t._v(" "),s("li",[t._v("所设置的文件夹只能是"),s("code",[t._v("一级目录")]),t._v("中的文件夹")])]),t._v(" "),s("h3",{attrs:{id:"pagecomponent-data-imgurl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecomponent-data-imgurl"}},[t._v("#")]),t._v(" pageComponent.data.imgUrl")]),t._v(" "),s("ul",[s("li",[t._v("目录页内的图片，必需")]),t._v(" "),s("li",[t._v("图片尺寸在页面中显示为80px*80px")])]),t._v(" "),s("h3",{attrs:{id:"pagecomponent-data-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecomponent-data-description"}},[t._v("#")]),t._v(" pageComponent.data.description")]),t._v(" "),s("ul",[s("li",[t._v("目录描述，必需")]),t._v(" "),s("li",[t._v("可加a标签（如需加入a标签时，标签内部的引号请使用单引号）")])]),t._v(" "),s("h2",{attrs:{id:"如何在导航栏中添加目录页链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何在导航栏中添加目录页链接"}},[t._v("#")]),t._v(" 如何在导航栏中添加目录页链接")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("nav")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有二级导航时可以直接添加")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'目录页'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/web/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有二级导航时")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/ui/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//目录页， vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("items")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTML'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/11/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CSS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/pages/22/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/docs/.vuepress/config/nav.js",target:"_blank",rel:"noopener noreferrer"}},[t._v(".vuepress/config/nav.js"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);