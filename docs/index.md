---
home: true
# heroImage: https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200409124835.png
heroText: 前端学习之道
tagline: 🚀业余前端自由写手，知识管理，技术文章分享，资料收集
# actionText: 开始使用 →
actionLink: /pages/a2f161/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 前端技术
    details: HTML, CSS, JavaScript, HTML, Angular, React, Vue, Flutter, ....更多关于前端相关技术
    # link: /web/ # 可选
    # imgUrl: /img/DevOps-Pipeline-800.png # 可选
  - title: 本站介绍
    details: 本站主要针对前端技术分享。希望这些知识能给你们带来一些帮助。我更希望这个网站发展成WiKi 的形式，而不是一堆教程。我也希望大家能多提建议。
  - title: 后端技术
    details: .net core, nest, golang, nodejs, sqlserve, mysql, linux
# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

<!-- <p align="left">
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://www.npmjs.com/package/vuepress-theme-vdoing" target="_blank"><img src="https://img.shields.io/npm/dt/vuepress-theme-vdoing" alt="npm" class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
  <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>
</p> -->
<br/>

## 📚Blog

这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是 Web 前端技术。如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/zmj0920/vuepress-theme-vdoing)点个 Star，或者交换友链 ( •̀ ω •́ )✧


[<img src="https://github-readme-stats.vercel.app/api/pin/?username=zmj0920&amp;repo=FleetingTime" alt="ReadMe Card" class="no-zoom">](https://github.com/zmj0920/FleetingTime)
[<img src="https://github-readme-stats.vercel.app/api/pin/?username=zmj0920&amp;repo=vuepress-theme-vdoing" alt="ReadMe Card" class="no-zoom">](https://www.521em.cn/)

本站主题是 [`Vdoing`](https://github.com/zmj0920/vuepress-theme-vdoing)，这是一款简洁高效的 VuePress 知识管理&博客 主题。旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多[详情](https://github.com/zmj0920/vuepress-theme-vdoing)。

## 🐼Me

web 前端初级小白

#### 🎉技能

- 前端了解:HTML, CSS, JavaScript, HTML, Angular, React, Vue, Flutter, ....更多关于前端相关技术
- 后端: net core, nest, golang, nodejs, sqlserve, mysql, linux

本人 ↓↓↓

<img src='https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210522215249.jpg' alt='本人照片' style="width:106px;">

## ✨email: 联系

- **WeChat or QQ**: <a :href="qqUrl" class='qq'>506499594</a>
- **Email**: <a href="mailto:506499594@qq.com">506499594@qq.com</a>
- **GitHub**: <https://github.com/zmj0920>
- **交流 QQ 群**: 679278583

## 🎉前端学习关注公众号

<img src='https://cdn.jsdelivr.net/gh/zmj0920/image_store/blog/qrcode_for_gh_52992b8978d4_258%20(1).jpg'  style="width:258px;">

<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=506499494&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=506499494&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>

## 🎉 友情链接

::: cardList

```yaml
- name: Evan's blog # 昵称
  desc: 积跬步以至千里，喜欢学习喜欢你。 # 介绍
  avatar: https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103123203.jpg # 头像
  link: https://xugaoyi.com/  # 链接
  bgColor: "#CBEAFA" # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: "#6854A1" # 可选，默认var(--textColor)
- name: 麋鹿鲁哟
  desc: 大道至简，知易行难
  avatar: https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200122153807.jpg # 可选
  link: https://www.cnblogs.com/miluluyo/ # 可选
  bgColor: "#CBEAFA" # 可选，默认var(--bodyBg)。颜色值有#号时请添加单引号
  textColor: "#6854A1" # 可选，默认var(--textColor)
- name: XAOXUU
  desc: "#IOS #Volantis主题作者"
  avatar: https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png
  link: https://xaoxuu.com
  bgColor: "#718971"
  textColor: "#fff"
- name: 平凡的你我
  desc: 理想成为大牛的小陈同学
  avatar: https://reinness.com/avatar.png
  link: https://reinness.com
  bgColor: "#FCDBA0"
  textColor: "#A05F2C"
- name: kirito
  desc: 被带歪也不能怨我
  avatar: https://blog-1256556944.cos.ap-nanjing.myqcloud.com/kirito.jpg
  link: https://www.kirito41dd.cn/
  bgColor: "#CBEAFA"
  textColor: "#A05F2C"
- name: 孟哒哒
  desc: 本来无望的事,大胆尝试,往往能成功
  avatar: https://thirdqq.qlogo.cn/g?b=qq&nk=3336765271&s=100
  link: http://www.webjsx.com/
  bgColor: "#CBEAFA"
  textColor: "#A05F2C"
```

:::
