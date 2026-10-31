# 墨刃 · Inkblade for DeepSeek Harness

将 Obsidian 的 Inkblade 设计语言适配到 DeepSeek Harness Web/桌面客户端：墨夜冷黑与旧金、宣纸与古铜、冷青链接和克制的朱砂语义色。它不是原 Obsidian CSS 的直接移植；DSH 的布局与组件由 DSH 自己控制。

## 安装与切换

1. 在 DeepSeek Harness 左侧「插件」中选择「添加插件」或「安装第三方插件」。
2. 输入本项目目录的**绝对路径**或公开仓库地址 `https://github.com/xwtaidev/dsh-inkblade-theme`，检查后安装并启用。选择工程目录而不是 `client.js`。为复现特定版本，安装前请核对并固定 Git 完整提交 SHA。发布包名为 `@xwtaidev/dsh-theme-inkblade`，但只有实际发布到 npm 之后才能通过 npm 包名安装。公开 GitHub 仓库或 Release 不等于已发布 npm 包，也不会自动进入市场索引。
3. 在「设置 → 通用 → 外观」选择浅色、深色或跟随系统。主题启用后覆盖两种模式的颜色；禁用插件即可恢复底层配色。
4. 两个主题插件不要同时启用；同时启用时按 DSH 的注册顺序逐项覆盖，后注册的值优先，并不是主题选择器中的独立选项。

这是免构建的插件包：`client.js` 是预构建的 ModuleLoader 客户端入口；不需要安装依赖或下载字体。修改代码后已安装的包可能需要重启应用或重新加载插件，不能假设自动热更新。

## 适配范围

使用 DSH 的 `ctx.theme.overrideTokens` 成对覆盖浅色/深色语义令牌，保留用户的字号、系统配色切换和原有功能；Markdown 标题使用本地衬线回退字体，并继续响应 DSH 字号调节。部分组件可能使用独立令牌、局部重定义或硬编码颜色，不保证应用的每个像素都会改变。原主题的 Obsidian 专用文件树、Canvas 和自定义提示块不适用于 DSH；不更改 DSH 的布局。

主题插件加载后才应用覆盖，因此启动时可能短暂显示 DSH 内置颜色。DSH 目前只持久化内置 light/dark/system 偏好，不在外观选择器中列出第三方主题；选择此风格依靠启用或禁用插件。

## 兼容性与权限

需要提供 `ctx.theme.overrideTokens` 和相应客户端模块服务的 DeepSeek Harness；尚未声明经过完整验收的 DSH、Node 或操作系统版本范围。作者报告曾手动测试主题，但测试配置与覆盖范围尚未记录。

主题客户端仅注册颜色与标题字体 token 覆盖层，不主动读取文件、访问凭据或发起网络请求；宿主入口为空。安装插件及 DSH 本身可能需要网络或修改 profile，这些行为不属于主题客户端代码。局部颜色对比度测试不构成完整安全或无障碍认证。

## 开发与验证

需要 Node.js 18 或更高版本，执行 `npm test`。测试检查插件注册、深浅令牌、清理、清单以及正文/主按钮默认颜色的对比度；它不替代真实 DSH 的界面与可访问性验收。

## 来源和许可

基于 [Obsidian Inkblade](https://github.com/xwtaidev/obsidian-inkblade-theme) 1.0.0 的色彩和排版设计改编，原作者 xwtaidev；保留 [MIT 许可证](LICENSE)。Inkblade 是受《影之刃零》氛围启发的独立同人作品，与官方无隶属或授权关系。本包不含游戏美术、Logo、远程资源或商业字体。
