# 荷兰 → 台湾 → 深圳南山

线上站点用 `BrowserRouter`，地址是 `/taiwan/`、`/taiwan/taiwan` 这种，不再带 `#`。

本地查看：

```bash
npm install
npm run dev
```

发布地址：[https://cody1991.github.io/taiwan/](https://cody1991.github.io/taiwan/)

改完后提交并推送 `main`，GitHub Actions 会跑测试、构建，然后更新 GitHub Pages，不用再本地 `npm run dev`。

```bash
git add -A
git commit -m "说明这次改了什么"
git push
```

清单勾选仍只存在当前浏览器。

```bash
npm test
npm run build
```

`docs/` 里是同一份行程的 Markdown 底稿。网站数据在 `src/data.ts`。

## 一句话行程

2026 年 12 月中旬去台湾，平安夜到深圳南山过年。回荷兰以后再定。

今天是 **2026-08-13**。台湾 **8 天 7 晚**：台北 + 台南，不跑花莲和高雄。12/24 人已经在南山。

**12/16 阿姆斯特丹直飞 → 台湾 8 天（台北 + 台南）→ 12/24 直飞深圳 → 南山过年。**

## 总时间轴

| 阶段 | 日期 | 地点 | 做什么 |
| --- | --- | --- | --- |
| 准备 | 2026-08-13 → 12-15 | 荷兰 | 入台证、机票、酒店、高铁 |
| 去程 | 12-16 上午 → 12-17 清晨 | AMS → TPE | 华航 CI74 |
| 台湾 | 12-17 → 12-24 | 台北 + 台南 | 见 [docs/taiwan.md](docs/taiwan.md) |
| 两岸 | 12-24 | TPE → SZX | 南航 CZ3088 |
| 南山 | 12-24 起 | 深圳南山 | 家人、远程工作、过年 |
| 春节 | 02-05 除夕 / 02-06 初一 | 深圳 | 官方假期大约 2/5–2/12（以国务院通知为准） |

## 为什么这样排

1. **去程用华航周三早班 CI74**，12/16 走。人要 12 月底在南山，不能再卡圣诞档。
2. **一周只走台北和台南**。花莲太鲁阁冬天费时间、容易下雨；高雄和台南功能重复，留台南吃。
3. **12/24 飞深圳**，平安夜到，圣诞、跨年、春节都在家。

## 现在立刻要做的 3 件事

1. **核对证件**：中国护照剩余效期 > 6 个月；荷兰居留证到预约入台证面談那天还剩 6 个月以上（多次证要 1 年以上）。
2. **盯入台证窗口**：移民署只开放「未来三个月」预约。12/17 入境的话，大约 **9/17** 可以开始约海牙面談。审核大约 4 周。详见 [docs/entry-permit.md](docs/entry-permit.md)。
3. **10 月买去程**：12/16 AMS–TPE，选可改期。

## 文档

- [台湾逐日行程](docs/taiwan.md)
- [航班](docs/flights.md)
- [入台证](docs/entry-permit.md)
- [预订清单](docs/checklist.md)

## 关键出处

- 2027 春节：2 月 6 日（羊年），除夕 2 月 5 日。[China Highlights](https://www.chinahighlights.com/travelguide/festivals/when-chinese-new-year.htm)
- AMS–TPE：华航 CI74。[FlightsFrom](https://www.flightsfrom.com/AMS-TPE)
- TPE–SZX：南航 CZ3088。[FlightConnections](https://www.flightconnections.com/flights-from-tpe-to-szx)
- 入台证：驻荷兰台北代表处，海牙 Van Stolkweg 23。[申请说明](https://www.roc-taiwan.org/nl/post/24535.html)
- 荷兰圣诞假：12/25、12/26 公假；学校圣诞假大约 12/19–01/03。[Holland.com](https://www.holland.com/global/tourism/getting-around/information/public-holidays)
