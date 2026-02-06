---
title: "ARGB vs RGB：5V/12V 安全、接口与供电预算"
description: "以安全为第一优先：别混插、估算电流、长灯带如何供电与注入。"
updatedAt: 2026-02-06
lastTestedAt: 2026-02-06
tldr: "ARGB(5V) 可寻址；RGB(12V) 不可寻址。不要跨电压连接。长灯带要做供电与注入规划。"
difficulty: beginner
timeMinutes: 15
---

## 一分钟理解 ARGB(5V) 与 RGB(12V)

- **ARGB(5V)**：数据 + 5V + GND，可单颗灯珠控制
- **RGB(12V)**：共享颜色通道，整条同色

## 为什么混插危险

电压不匹配可能烧坏灯带、控制器或主板接口。

## 供电预算（经验法则）

长灯带通常需要外置供电与电源注入，避免压降导致变暗与色偏。

