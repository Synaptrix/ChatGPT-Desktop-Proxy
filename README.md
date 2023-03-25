# ChatGPT-Desktop-Proxy

> 本项目服务于 [ChatGPT-Desktop](https://github.com/ChatGPT-Desktop/ChatGPT-Desktop) ，用于临时解决部分地区用户因为网络原因无法正常使用软件

> 项目已支持流式输出以及非openAI的链接转发，2023-03-25

## 使用方法

项目思路：
使用云服务器处理转发，理论上适用于各大云服务器厂商，请自行部署测试

项目架构：由之前的`Serverless Functions`升级为`Edge Function`

项目配置：转发以`/api`开头的所有请求

项目优势：使用边缘函数，将不再受限于`Vercel`上请求超时`10s`的限制，理论上同时会加快访问速度

如需额外自定义的功能，请参考 [链接](https://vercel.com/docs/concepts/functions/edge-functions) 

## 部署你自己的转发服务器（免费）

如果你只需要部署一个你自己用的转发服务，而不需要额外修改，那么你完全不需要下载源代码，可以直接点击下面的按钮，然后按照提示操作，即可完成部署

[![Deploy with Vercel](https://vercel.com/button?utm_source=busiyi&utm_campaign=oss)](https://vercel.com/new/clone?utm_source=busiyi&utm_campaign=oss&repository-url=https://github.com/ChatGPT-Desktop/ChatGPT-Desktop-Porxy)

`vercel.app` 域名已经封禁，但 `vercel` 服务仍然可以访问，你可以绑定自己的域名来正常使用

注意：如果广泛分享此转发服务，可能导致你的域名被墙

## 项目开发

如果你需要在本地开发和调试，请在`clone`仓库后执行：
1. `pnpm install` 安装依赖
2. `pnpm start` 启动项目

成功后，本地会启动`3000`端口作为转发服务器的入口

## 项目部署
```bash
pnpm run deploy
```
请根据提示自行配置`vercel`环境

## 免责声明

使用本项目代表您已阅读、理解并同意本免责声明的所有条款，以及自己可能承担的所有风险。本组织不为由此而产生的问题负责。

以下是本项目的免责声明条款：

- 本项目的所有内容仅供参考，不构成任何使用建议。
- 本组织不保证本项目的内容完整、准确、及时、可靠、适用性或可用性。
- 任何组织或个人不得将本项目作为决策的唯一依据，应当根据自己的情况进行独立判断和决策。
- 本组织不对因使用本项目而产生的任何直接或间接损失承担任何责任。

如果本项目对你有所帮助，欢迎`star`，但不接受任何付费功能请求
