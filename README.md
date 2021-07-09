 


> 在 [https://xirishi0.github.io/fightextension/](https://xirishi0.github.io/fightextension/) 打开此页面

## 用作扩展

此仓库可以作为 **插件** 添加到 MakeCode 中。

* 打开 [https://arcade.makecode.com/](https://arcade.makecode.com/)
* 点击 **新项目**
* 点击齿轮图标菜单下的 **扩展**
* 搜索 **https://github.com/xirishi0/fightextension** 或 **github:xirishi0/fightextension** 并导入

## 编辑此项目 ![构建状态标志](https://github.com/xirishi0/fightextension/workflows/MakeCode/badge.svg)

在 MakeCode 中编辑此仓库。

* 打开 [https://arcade.makecode.com/](https://arcade.makecode.com/)
* 点击 **导入**，然后点击 **导入 URL**
* 粘贴 **https://github.com/xirishi0/fightextension** 并点击导入

## 积木块预览

此图像显示主分支中最后一次提交的块代码。
此图像可能需要几分钟才能刷新。

![块的渲染视图](https://github.com/xirishi0/fightextension/raw/master/.github/makecode/blocks.png)

#### 元数据（用于搜索、渲染）

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

playGame.characterMenus()

## 代码模块
* 游戏模块：
    mygame-1.ts
    mygame-2.ts 
    mygame.ts
* 整合模块：
    playgame.ts

## 项目模板：
    直接导入项目https://makecode.com/_VWd0C5iLcAEo；
    不用模板、只导入插件则在项目里添加拓展github:xirishi0/fightextension；
    本插件的example.ts里有也有一个简单的模板，可以复制到main.ts里；
    其他example-xx.ts里有角色示例，粘贴进main.ts里就可以使用了，
    如果报错，就将example.ts里的内容也复制进去；
    注：要测试人物还需要【当开机时(main.ts)】-【开始游戏(playgame)】-【开始游戏(characterMenus】
    

## 打包整合：
    用一个函数function myFunc(){}将main.ts包起来，分享/上传github成为插件；
    在主项目中导入该插件，调用myFunc()；
    然后在myFunc()之后使用playgame.characterMenus()；
    注：如果dlc里调用了playgame.characterMenus()，需要删除。

## 已知bug & 待完善功能：
* 若角色名字过长，在选择菜单里会无法完整显示；
* 没有地块相关的拓展功能；
* 没有提供类似arcade精灵重叠的弹射物与角色碰撞的接口；
* 角色命名可能会冲突；
* 缺少人机对战功能；

