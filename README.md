---
title: CFWorkerDemo
emoji: 👀
colorFrom: green
colorTo: green
sdk: docker
pinned: false
---

# Cloudflare Workers

## 项目关联到 codesandbox 中，启动一个 wrangler 开发模式的服务

- 进入 codesandbox 后关联该项目，则可完成自动部署，会借助 wrangler 调用其 wrangler dev 在本地起一个可供调试的服务

## 生产部署到私人 cloudflare workers

- 借助 github actions ，在 github 项目中设置好 actions secrets 变量
  - ${{ secrets.CF_API_TOKEN }} 私人 cloudflare API_TOKEN
  - ${{ secrets.CF_ACCOUNT_ID }} 私人 cloudflare ACCOUNT_ID