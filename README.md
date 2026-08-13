# 荷兰 → 台湾 → 深圳南山 → 荷兰

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

2026 年 12 月底去台湾，再去深圳南山过年，2027 年春节后回荷兰。

今天是 **2026-08-13**。台湾压成 **8 天 7 晚**：赶上 101 跨年，不跑花莲和高雄。深圳段默认可以在南山住、必要时远程。

## 一句话行程

**12/25 圣诞从阿姆斯特丹直飞 → 台湾 8 天（台北 + 台南 + 跨年）→ 1/2 直飞深圳 → 南山待到春节 → 2/14 广州直飞阿姆斯特丹。**

回程中转是锦上添花：想停就在香港停 1–2 晚，不想折腾就广州直飞。不要经中东停城。

## 总时间轴

| 阶段 | 日期 | 地点 | 做什么 |
| --- | --- | --- | --- |
| 准备 | 2026-08-13 → 12-24 | 荷兰 | 入台证、机票、酒店、高铁 |
| 去程 | 12-25 上午 → 12-26 清晨 | AMS → TPE | 华航 CI74，圣诞公假出发 |
| 台湾 | 12-26 → 01-02 | 台北 + 台南 + 回台北跨年 | 见 [docs/taiwan.md](docs/taiwan.md) |
| 两岸 | 01-02 下午 | TPE → SZX | 华航/深航/南航，约 2 小时 |
| 南山 | 01-02 → 02-14 | 深圳南山 | 家人、远程工作、过年 |
| 春节 | 02-05 除夕 / 02-06 初一 | 深圳 | 官方假期大约 2/5–2/12（以国务院通知为准） |
| 回程 | 02-14 | CAN → AMS | 南航 CZ307 直飞；或香港停 1–2 晚 |

离开荷兰大约 **12/25–02/14，共 52 天**。荷兰年假大约 4 个工作日（12/28–31）；12/25、12/26、01/01 是公假。

## 为什么这样排

1. **去程用华航周五早班 CI74**，12/25 圣诞公假走，不占年假。
2. **跨年必须回台北**。101 烟火是这趟最不该错过的节点。
3. **一周只走台北和台南**。花莲太鲁阁冬天费时间、容易下雨；高雄和台南功能重复，留台南吃。
4. **1/2 飞深圳**，周六到，周日能安顿，周一只班。
5. **过完年初七再走**。春节前后机票贵、航班乱，2/14 周日南航直飞，2/15 周一可以回荷兰上班。
6. **深圳没有直飞阿姆斯特丹**。最近的直飞是广州白云 CZ307；南山到白云高铁大约 1–1.5 小时。

## 现在立刻要做的 3 件事

1. **核对证件**：中国护照剩余效期 > 6 个月；荷兰居留证到预约入台证面談那天还剩 6 个月以上（多次证要 1 年以上）。
2. **盯入台证窗口**：移民署只开放「未来三个月」预约。12/26 入境的话，大约 **9/26** 可以开始约海牙面談。审核大约 4 周。详见 [docs/entry-permit.md](docs/entry-permit.md)。
3. **春节回程先占位**：2 月上旬中欧机票是一年最贵的一段。10 月就可以开始盯 CAN/HKG → AMS，比圣诞去程还要紧。

## 文档

- [台湾逐日行程](docs/taiwan.md)
- [航班与中转](docs/flights.md)
- [入台证](docs/entry-permit.md)
- [三种走法对比](docs/options.md)
- [预订清单](docs/checklist.md)

## 关键出处

- 2027 春节：2 月 6 日（羊年），除夕 2 月 5 日。[China Highlights](https://www.chinahighlights.com/travelguide/festivals/when-chinese-new-year.htm)
- AMS–TPE 直飞：华航 CI74、荷航 KL807。[FlightsFrom](https://www.flightsfrom.com/AMS-TPE)
- TPE–SZX 直飞：华航、南航、深航、立荣，每天有。[FlightConnections](https://www.flightconnections.com/flights-from-tpe-to-szx)
- CAN–AMS 直飞：南航 CZ307。[FlightMapper CZ307](https://info.flightmapper.net/flight/China_Southern_CZ_307)
- 入台证：驻荷兰台北代表处，海牙 Van Stolkweg 23。[申请说明](https://www.roc-taiwan.org/nl/post/24535.html)
- 荷兰圣诞假：12/25、12/26 公假；学校圣诞假大约 12/19–01/03。[Holland.com](https://www.holland.com/global/tourism/getting-around/information/public-holidays)
