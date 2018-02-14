# 初识Linux

#### 本节学习目标
* 初步掌握Linux系统的命令

#### 本节内容
* 什么是Linux系统?
  * Linux操作系统诞生于1991 年10 月5 日（这是第一次正式向外公布时间），是一套免费使用和自由传播的类Unix操作系统。Linux存在着许多不同的Linux版本，但它们都使用了Linux内核。Linux可安装在各种计算机硬件设备中，比如手机、平板电脑、路由器、视频游戏控制台、台式计算机、大型机和超级计算机。
  * 但Linux 的本质来源并不是 Unix，只是它借鉴了 Unix 的设计思想，所以在系统业界上把这种和 Unix 是一致设计思想的系统归为：类 Unix 系统。类 Unix 系统，除了这里讲到的 Linux，还有大家熟知的 Mac OS X、FreeBSD（这两个是直接从 Unix 系发展过来的，所以相对 Linux 是比较地道的类 Unix 系统）

> 想要更多的了解Linux？请阅读[Linux - wiki](https://zh.wikipedia.org/zh/Linux)。

* 为什么建议大家学习Linux？
  * 首先Linux 是一个开源的，安全的，免费的操作系统。但这几个词还是很抽象，我们作为系统的上层使用者，之所以喜欢某个操作系统，我认为更多是因为它可以加快的生产效率，提高产能。而Linux就具备这样的特点，LInux非常适合作为常见编程语言的开发环境。
  * 当我们接触到编程领域，无论是作为任何一个语言的开发者，只要我们在这个领域内，不管怎么学习下去，Linux永远绕不开。从前期的语言开发，到后期的服务器部署，分布式，集群环境，数据库相关等，Linux都在等着我们。

> 想要了解更多的Linux？请阅读[为什么要学习 Linux？ - 知乎](https://www.zhihu.com/question/20117703)。

> 这里再推荐一篇讲关于Mac OS X的文章，感兴趣请自行阅读。[为什么国外程序员爱用 Mac？- vpsee.com](https://www.vpsee.com/2009/06/why-programmers-love-mac/)

* 常用的Linux命令
  * 文件/目录: `cd`, `mkdir`, `cp`, `rm`, `mv`, `pwd`, `ls`, `tar`, `zip`, `find`, `grep`, `less`, `tail`, `tree`
  * 帐号操作: `su`, `sudo`, `whoami`, `passwd`
  * 包管理: `apt-get`，添加软件源
  * 进程相关:  `ps` , `kill`
  * 系统信息相关: `top`, `df`, `uname`
  * 网络相关：`ping`, `telnet`, `curl`, `netstat`，修改hosts


* 命令行基础视频讲解
<video width="100%" id="video" controls="" preload="auto" poster="/assets/linux basic poster.png">
      <source id="mp4" src="/video/Linux命令行基础.mp4" type="video/mp4">
      <p>抱歉，你的浏览器不支持在线视频播放。</p>
</video>

#### 其他资料推荐
* [Linux命令行学习手册](http://happypeter.github.io/LGCB/book/)
* [Linux基础概要](https://www.gitbook.com/book/abcfy2/linux_basic/details)

#### 本节练习
* 使用[Zoom](https://zoom.us/)录制自己对命令行的操作练习过程。直播过程中，请使用Zoom把直播视频保存在本地。（直播的时候录制视频操作按钮位置下如图所示）

![](/assets/recordPosition.png)

> **提示：**由于我们在PreCourse中暂不涉及Linux系统的安装，因此以下练习windows用户请直接在git bash中练习（在前面章节学习Git时已经安装了git bash了）

> git bash界面大致如下图所示：
![](/assets/gitbash.png)

> 若你是Mac用户，那么直接在终端中进行Linux命令练习即可，终端的界面大致如下图所示：
![](/assets/terminalofMac.png)

录制的视频需包含以下内容：
* [基本文件和目录操作](http://happypeter.github.io/LGCB/book/04_file_basics.html)
* [重定向](http://happypeter.github.io/LGCB/book/05_redirection.html)
* [权限](http://happypeter.github.io/LGCB/book/06_bash_perm.html)
* [进程](http://happypeter.github.io/LGCB/book/07_process.html)

录制示例如下：

* [Linux基础操作-示例1
](https://v.qq.com/x/page/e05315d0u8x.html)
* [Linux基础操作-示例2
](https://v.qq.com/x/page/m0528nv12ai.html)
* [Linux基础操作-示例3
](https://v.qq.com/x/page/f0527rk93w3.html)
