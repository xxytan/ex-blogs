---
title: 修复谷歌翻译
published: 2026-02-07
description: 仍能够可行的国内谷歌翻译修复方法
tags: [谷歌翻译]
category: 教程
---
## 前言
22年9月下旬，谷歌翻译以“使用率低”而退出了中国。至此，除了广告服务以外，谷歌所有业务均已退出中国  
事实对于我来说好似晴天霹雳，但好在还有[必应翻译](https://bing.com/translator)  
出这篇文章也是急性而起，下文提到的项目也是很久之前就有的了，但是仍能够使用

## 准备
打开此GitHub仓库
::github{repo="Ponderfly/GoogleTranslateIpCheck"}
根据系统自行选择下载

解压下载得的压缩包，会获得一个命名为`系统-架构`的文件夹，其中仅包含四个文件，前缀为`GoogleTranslateIpCheck`的文件是我们主要关注的

## 使用

### Windows
- 运行`GoogleTranslateIpCheck.exe`，会自动开始检测可用的IPV4地址
- 若要检测IPV6地址，需在目录下打开`cmd`，运行
  ```bash
  GoogleTranslateIpCheck.exe -6
  ```
  便会开始检测可用的IPV6地址

检测完会列出可用的IPV4/6地址，并以延迟最低的IP给你列好填写规则[^1]

此时我们用记事本打开`C:\Windows\System32\drivers\etc\hosts`文件，在末尾加入给我们的填写规则，并保存

> [!CAUTION]
> 可能会提示无法保存在该目录下，此时我们把它保存在桌面，命名为`hosts`，把`.txt`后缀删掉，再把保存的文件复制到原`hosts`目录下并替换

### Linux
在解压后得到的文件夹下打开终端，运行
```bash
chmod +x GoogleTranslateIpCheck
```
来提权，然后运行
- ```bash
  ./GoogleTranslateIpCheck
  ```
  来检测可用的IPV4地址
- ```bash
  ./GoogleTranslateIpCheck -6
  ```
  来检测可用的IPV6地址
检测完后会列出可用的IPV4/6地址，并以延迟最低的IP给你列好填写规则[^1]，

此时打开`/etc/hosts`文件，在末尾加入给我们的填写规则，并保存

### Android（需ROOT）
- 需借助[Termux](https://github.com/termux/termux-app/releases/latest)，且需使用项目中的`linux-arm64`包  
  其他与[Linux](#linux)一致
- 或直接使用在其他系统中检测得的填写规则

||区别|
|-|-|
|`system`可读写|可以直接修改`/etc/hosts`文件|
|`system`仅可读|需借助Magisk的`systemless`模块或❤️使用[Surfing](https://github.com/GitMetaio/Surfing)的`挂载hosts`功能|

## 效果
有以下任意一条的效果则说明修复成功🎉
- 用浏览器打开[translate.google.com](https://translate.google.com)，能够在国内网络环境直接访问
- 使用Chrome自带的翻译功能，能够在国内网络环境下正常翻译外语网站

## 结束
- 在[Android](#android需root)下修复须有一定动手能力
- 若只使用浏览器内的翻译，安装像`沉浸式翻译`等插件也是不错的选择
- 无Mac是因为没用过🌚，但是步骤和[Linux](#linux)是差不多的

- 检测的IPV4基本都不可用（我只检测出来一个可用：:spoiler[142.251.169.90]），若你的网络支持IPV6，强烈建议使用检测IPV6的方式

[^1]: 例如：
    ```
    //IPV4
    172.0.2.1 translate.googleapis.com
    172.0.2.1 translate.google.com
    172.0.2.1 translate-pa.googleapis.com

    //IPV6
    ::1 translate.googleapis.com
    ::1 translate.google.com
    ::1 translate-pa.googleapis.com
    ```