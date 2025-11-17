---
title: 在Linux运行Windows软件
date: 2025-03-01 08:00
Author: Jaye·Wu
top_img: false
categories:
  - Linux
tags:
  - 软件工具
uid: 20251113104956
cover: https://i.imgs.ovh/2025/11/17/Cfw5qe.webp
---
![](https://i.imgs.ovh/2025/11/17/Cfw5qe.webp)

如果你是 Linux 用户，却因无法运行 Windows 专属软件或游戏而困扰，那么 Bottles 这款开源神器将彻底改变你的体验！作为一款专为 Linux 系统设计的 Windows 兼容层管理工具，Bottles 让你告别复杂配置，轻松搭建稳定运行环境，无论是热门游戏还是专业软件都能流畅运行。

## 什么是 Bottles？

Bottles 是一个基于 Wine 和容器技术的图形化管理工具，它通过创建独立的 "瓶子" 环境，让 Windows 应用在 Linux 系统中安全稳定地运行。与传统 Wine 配置相比，Bottles 将复杂的命令行操作转化为直观的GUI界面交互。

![](https://raw.gitcode.com/gh_mirrors/bo/Bottles/raw/c85edf809a91cd84c82e1aa0548827d691b07a74/data/screenshots/1.png)

[Bottles | 官方文档](https://docs.usebottles.com/)
### Wine是什么？
![](https://ivonblog.com/posts/linux-wine-introduction/images/wineonlinux.webp)

Wine（全称“Wine Is Not an Emulator”）一款能将Windows exe转译成为Linux指令的技术，参阅[Wine指令使用教学](https://ivonblog.com/posts/linux-wine-introduction)。基于POSIX兼容操作系统（如[Linux](https://baike.baidu.com/item/Linux/27050)、[macOS](https://baike.baidu.com/item/macOS/8654551)、[BSD](https://baike.baidu.com/item/BSD/3794498)）运行Windows应用程序的开源兼容层，通过[API](https://baike.baidu.com/item/API/10154)转换技术将Windows函数调用动态转换为POSIX调用，支持加载本地系统DLL文件。

该项目始于1993年由Bob Amstadt发起，后由Alexandre Julliard主导开发，采用LGPL开源协议。

Wine本身得打指令才能启动，这个时候有个Wine的前端管理程式会比较方便。


## 🌟 Bottles 优势

在Bottles之前，已经有Wine前端管理程式出现，例如PlayOnLinux和Lutris，还有[Linux版Steam客户端](https://ivonblog.com/posts/install-steam-on-linux/)。那么为什么要用Bottles呢？
#### ✅ 傻瓜式操作，零基础也能快速上手

Bottles 采用现代化设计的图形界面，所有功能一目了然。只需三步即可完成第一个 Windows 应用的安装：

1.  创建专属 "瓶子" 环境
2.  选择优化模板（游戏 / 办公 / 开发）
3.  安装并运行应用程序

![](https://raw.gitcode.com/gh_mirrors/bo/Bottles/raw/c85edf809a91cd84c82e1aa0548827d691b07a74/data/screenshots/3.png?utm_source=gitcode_repo_files)


#### ⚡ 性能优化，超越传统兼容方案

通过内置的 DXVK、VKD3D 等优化组件，Bottles 能大幅提升图形渲染性能。测试数据显示，部分游戏在 Bottles 中的帧率甚至超越原生 Windows 系统，让你享受更流畅的游戏体验。

#### 🔒 隔离环境，安全稳定两不误

每个应用都运行在独立的 "瓶子" 中，避免软件冲突和系统污染。你可以为不同类型的应用创建专用环境，即使某个环境出现问题，也不会影响其他应用和系统本身。

#### 🔄 持续更新，社区驱动的开源项目

作为活跃的开源项目，Bottles 拥有庞大的社区支持和频繁的更新迭代。开发团队根据用户反馈不断优化兼容性数据库，新增对热门软件和游戏的支持，让你的使用体验越来越好。

*   官方文档：项目内的 [docs/](https://link.gitcode.com/i/29d8a8948f65689904408afafb957f11) 目录包含详细使用指南
*   应用数据库：社区维护的兼容性列表，帮助你选择最佳配置
*   Discord 社区：实时获取技术支持和使用技巧


例如跑WinRAR、Photoshop CC、Line、微信、QQ、Microsoft Office 365、Grand Theft Auto……等Windows才有的程式。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-195006.webp)

在Linux執行Photoshop CC 2021


## 🎮 三大核心使用场景

#### 1. 游戏玩家的跨平台解决方案

对于 Linux 游戏玩家来说，Bottles 简直是福音！它支持 Steam 游戏库中的 Windows 游戏，通过优化的运行环境配置，让《赛博朋克 2077》《英雄联盟》等 3A 大作在 Linux 上实现接近原生的运行效果。

![](https://raw.gitcode.com/gh_mirrors/bo/Bottles/raw/c85edf809a91cd84c82e1aa0548827d691b07a74/data/screenshots/2.png?utm_source=gitcode_repo_files)



#### 2. 专业人士的生产力工具

设计师、工程师等专业人士常常依赖 Windows 专属软件，Bottles 让你在 Linux 系统中无缝运行 Photoshop、AutoCAD 等专业软件，无需在双系统间反复切换，极大提升工作效率。

#### 3. 普通用户的日常应用兼容

从办公软件到聊天工具，Bottles 支持几乎所有常用 Windows 应用。无论是微信、QQ 等社交软件，还是 Office 全家桶，都能在 Linux 上完美运行，让你的日常使用不受系统限制。

网易云音乐可在 Wine（Bottles）平台上运行新版本，提供了类似原生 Windows 应用的体验。安装过程涉及在 Bottles 中创建环境并安装必要的运行时库。该版本支持 HiDPI，可通过 Wine 工具配置。完成安装后，用户可以在 Bottles 中运行网易云音乐可执行文件或将其添加到快速启动栏。  


![](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAEI_n1pGwz5s__TEFchQ3XkMnfaWhKNfAACphgAAiu44FSKRSdSlC5W2zYE.png)


## 📥 如何安装 Bottles？

Bottles 提供多种安装方式，适用于不同 Linux 发行版

**Bottles作者推荐用Flatpak技术安裝Bottles**，輸入y确认

```bash
flatpak install flathub com.usebottles.bottles
```

建议预先开放权限，允许Bottles给Linux新增桌面捷径

```bash
flatpak override com.usebottles.bottles --user --filesystem=xdg-data/applications
```

开放Bottles读取你的常用目录，例如「下载」目录，避免在执行exe的时候出现权限问题

```bash
flatpak override com.usebottles.bottles --user --filesystem=xdg-download
```

1. 安装后在应用程式列表找到Bottles。
	![](https://ivonblog.com/posts/setup-linux-bottles/images/9saU1vq.webp)
2. 打开并等待Bottles初始化完成。
	![](https://ivonblog.com/posts/setup-linux-bottles/images/aFy2rjY.webp)


## 🎯 Bottles 使用技巧与资源

点击左上角新建一个Bottles

![屏幕截图\_20240714\_203651.png](https://img.renil.cc/i/2024/07/14/6693c67333ebf.png)

Bottles的功用就是用来建立Wine执行环境，就像把Wine装入酒瓶(Bottle)一样，每个酒瓶都是一个Wine容器。

以Wine的术语来说，每个Bottles的酒瓶就是一个WINEPREFIX。

按照Bottles的设计，每个酒瓶应当只放一个Windows exe。如下图，游戏和一般软体分别位于不同的酒瓶，如果某个酒瓶环境被弄乱，直接删除即可，其他酒瓶不受影响。

![](https://ivonblog.com/posts/setup-linux-bottles/images/image1.webp)



![屏幕截图\_20240714\_203804.png](https://img.renil.cc/i/2024/07/14/6693c6c78a2c8.png)


这里名称随便填写，环境选择应用程序即可



可以按照自己电脑的实际情况打开Vulkan，3D加速之类的选项(在设置里面)

![屏幕截图\_20240714\_204457.png](https://img.renil.cc/i/2024/07/14/6693c85befd8b.png)
![屏幕截图\_20240714\_204259.png](https://img.renil.cc/i/2024/07/14/6693c7df11bae.png)


如上图，运行可执行文件即可。安装完成后可以直接在下面打开，也可以快速添加为快捷方式，在开始按键的旁边。

### Bottles的资料位置

Bottles 模拟的C槽位于`~/.var/app/com.usebottles.bottles/data/bottles/bottles/<酒瓶名称>/drive_c`

进入该酒瓶主画面。点选右上角`Browse Files...`开启Bottles建立的虚拟C槽。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-024529.webp)

你的档案管理器应该会自动开启，这个就是Bottles建立的假C槽了。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-024657.webp)

## 自定义 Bottles 环境

如果程式需要额外套件才能运作，就得细调酒瓶的环境，Bottles将要用指令调整的东西都图形化了。

在酒瓶的主选单有以下选项，个别介绍。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-030958.webp)

### 设置项 Settings

`Runner`选项用于切换Wine版本，预设为Valve开发的`soda`。如果程式执行发生问题，可以切换成原版`sys-wine`试试看。

![](https://ivonblog.com/posts/setup-linux-bottles/images/image2.webp)

图形设定，是否要使用`DXVK` (将DirectX指令转成Vulkan) 之类的设定。这边通常不用动。

滑到最下面，`Compatibiity`处可设定要模拟的Windows版本和系统语言。通常用Windows 10就够了。

`Snapshots`则是设定是否自动制作Wine环境的快照，防止程式一更新就无法运作。

`Graphics`里面的Screen Scaling设定，可缩放Windows程式的字体大小(DPI)。

### 依赖项 Dependencies

此处是用于安装依赖套件的，类似Winetricks的效果。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-031829.webp)

安装如下图所示的几个必要运行库，比如msvs运行库，riched20还有webview2等。设置里面还有兼容性，把Bottles那个打开。

注意安装需要良好的网络环境和一点点时间。

例如，很多中文程式需要安装`cjkfonts`字体，防止乱码。

有些程式要安装`vcredist` (Visual C++ Redistributable) 才能运作。

程式具体需要哪些套件，请至WineDB或ProtonDB参看该程式的安装说明。

有些Windows依赖套件并无列在Bottles的`Dependencies`选单，若有需求请向作者[回报](https://docs.usebottles.com/contribute/missing-dependencies)。

### 快照 Snapshots

应用程式可能因为更新后便无法启动，适时按右上角＋号新增快照，输入注解后即可新增。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-031617.webp)

点选快照后即会自动将酒瓶的Wine环境回退至该版本。

酒瓶的主画面右上角尚提供完整备份`Full Backup`的功能，可将酒瓶环境汇出为压缩档。这样重装Bottles主程式后便能快速复原。

### 工作管理員 Task Manager

模擬Windows的工作管理員。

![](https://ivonblog.com/posts/setup-linux-bottles/images/Screenshot-20230129-032234.webp)

如果此处无法中止程式，也可以点选酒瓶主画面右上角的`Force Stop All Processes`强制中止所有处理程序。

### Wine旧版工具

酒瓶主画面最下面的是Wine本身的工具，包含登录档(Registry)、命令提示字元(cmd)、控制台(Control Panel)、设定画面(wiencfg)等。

![屏幕截图\_20240714\_204809.png](https://img.renil.cc/i/2024/07/14/6693c9151706c.png)


这里按自己电脑实际情况来，实际为96乘以缩放倍率，比如我的电脑是150%缩放比例，就可以96x1.5=144。假如是175%就是168。

## ⚠️ 常见问题

**如何用指令執行Bottles的酒瓶**

範例，使用flatpak run，執行「Undertale」酒瓶裡面的Undertale.exe

```bash
/usr/bin/flatpak run --command=bottles-cli com.usebottles.bottles run -p Undertale -b Undertale -- %u
```

### exe执行后沒有反应

exe执行后无反应，可能是Flatpak权限问题导致，请一律将该exe和相关程式档案放到Bottles的C槽 (`~/.var/app/com.usebottles.bottles/data/bottles/bottles/<酒瓶名称>/drive_c`)

并勾选"Run in Terminal"后执行，再看终端机输出的讯息判读错误来源。

### exe的档案管理员看不到特定目录的档案

假设你有二个硬碟，而Bottles执行exe时看不到第二个硬碟的档案，这是Flatpak的档案系统隔离所致。

跟上面建议执行程式的时候把exe直接放到Bottles的假C槽的理由一样。因为从其他硬碟读取exe，很容易发生无法读取dll等各种奇怪状况。

如果你坚持要从另一个硬碟执行exe，那请开启终端机，输入以下指令开放存取exe所在目录的权限：

```bash
flatpak override --user --filesystem="目錄" com.usebottles.bottles
```

例如要存取第二個硬碟上的Pictures目錄：

```bash
flatpak override --user --filesystem="/run/media/user/HDD/Pictures" com.usebottles.bottles
```

再重启Bottles。

**module:import\_dll Loading library xxx.dll (which is needed by…**

同上，使用指令开放该目录的读取权限

**Unhandled exception: page fault on read…**

- 关掉DXVK
- 尝试切换Wine版本
- 检查该程式是否有依赖套件未安装
- 试试该程式的32位元版
- 将该程式放到Bottles的C槽再执行

### 程式文字变成方块

请安装`cjkfonts`字体。或手动下载Windows字型，将档案放到Bottles假C槽的`/windows/Fonts/` 目录。

你还可以设定[fontconfig](https://ivonblog.com/posts/linux-fontconfig)调整字体优先级别。

### Wayland闪退、卡顿

Wine的应用程式可能不支持 Wayland，它会用XWayland下去跑，导致效能降低。

如果遇到应用程式黑屏，可尝试关闭酒瓶设定的「使用独立显示卡」选项。或者回退到X11工作阶段。



## 📈 结语

随着 Bottles 等兼容性工具的成熟，Linux 系统正在逐步打破 "软件兼容性差" 的刻板印象。这款开源工具不仅为用户提供了便利，更推动了 Linux 平台的普及与发展。无论你是游戏玩家、专业人士还是普通用户，Bottles 都能让你的 Linux 体验提升到新高度。

![](https://raw.gitcode.com/gh_mirrors/bo/Bottles/raw/c85edf809a91cd84c82e1aa0548827d691b07a74/data/images/bottles-welcome.png)


## 相关文章

- [Bottles Documentation](https://docs.usebottles.com/)
- [Flatpak版Linux Visual Studio Code安裝筆記分類 Linux系統 Linux好用軟體 標籤 Flatpak Visual Studio Code](https://ivonblog.com/posts/visual-studio-code-flatpak/)
- [如何在Linux系統跑Windows軟體，三種方法不同的思路分類 Linux系統 Linux好用軟體 標籤 Wine QEMU-KVM Windows Linux](https://ivonblog.com/posts/how-to-run-windows-programs-on-linux/)
- [經典音樂播放器 ～ Linux安裝foobar2000分類 Linux系統 Linux好用軟體 標籤 Music Player Wine](https://ivonblog.com/posts/linux-wine-foobar2000/)
- [用Bottles运行兼容层无法启动的Steamdeck学习版游戏_哔哩哔哩_bilibili](【https://www.bilibili.com/video/BV1Kc411S7Cn)
- [如何在Linux執行Windows exe檔，用Bottles管理多版本的Wine容器 · Ivon的部落格](https://ivonblog.com/posts/setup-linux-bottles/)
- [Linux系统中运行windows软件，安装Bottles中间的坑_linux bottles-CSDN博客](https://blog.csdn.net/liurugongzi123/article/details/130233021)
