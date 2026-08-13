import { Alert, Button, Collapse, Table, Tag, Timeline, Typography } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { RouteMap } from "../components/RouteMap";
import { taiwanDays, weather } from "../data";
import { googlePlaceUrl } from "../lib/maps";

export function TaiwanPage() {
  return (
    <div className="page">
      <Typography.Title className="display" level={1}>
        台湾 8 天
      </Typography.Title>
      <Typography.Paragraph>
        8 天 7 晚：台北 3 晚 → 台南 2 晚 → 台北跨年 2 晚。花莲、高雄、垦丁这趟都不排。九份只做一日，下雨改北投。
      </Typography.Paragraph>

      <Alert
        type="info"
        showIcon
        style={{ marginBottom: 20 }}
        message="两处值得提前想"
        description="圣诞从 AMS 走，票贵人多，10 月就要锁可改期。台北会换两次酒店（去台南前一次、跨年信义一次），大箱子可以寄放台北车站或第一家酒店。"
      />

      <RouteMap />

      <Timeline
        items={taiwanDays.map((day) => ({
          color: day.date === "2026-12-31" ? "#b4451e" : "#1f4b55",
          children: (
            <div className="day-card">
              <div>
                <div className="day-city">{day.city}</div>
                <div className="day-date">
                  {day.date.slice(5).replace("-", "/")}
                  <span style={{ fontSize: 14, marginLeft: 6 }}>{day.weekday}</span>
                </div>
              </div>
              <div>
                <Typography.Title level={4} style={{ margin: "0 0 8px" }}>
                  {day.title}
                </Typography.Title>
                <Typography.Paragraph style={{ marginBottom: 8 }}>{day.body}</Typography.Paragraph>
                <div>
                  <Tag>{day.stay}</Tag>
                  {day.tips.map((tip) => (
                    <Tag key={tip} color="orange">
                      {tip}
                    </Tag>
                  ))}
                  <Button
                    type="link"
                    size="small"
                    icon={<ExportOutlined />}
                    href={googlePlaceUrl(day.mapsQuery)}
                    target="_blank"
                    rel="noreferrer"
                    style={{ paddingInline: 4 }}
                  >
                    地图
                  </Button>
                </div>
              </div>
            </div>
          ),
        }))}
      />

      <Typography.Title level={3} className="display">
        天气和行李
      </Typography.Title>
      <Table
        pagination={false}
        rowKey="place"
        dataSource={weather}
        columns={[
          { title: "地方", dataIndex: "place" },
          { title: "体感", dataIndex: "feel" },
          { title: "带什么", dataIndex: "pack" },
        ]}
      />

      <Collapse
        style={{ marginTop: 24 }}
        items={[
          {
            key: "transport",
            label: "交通怎么订",
            children: (
              <ul>
                <li>桃园 → 台北：机场捷运</li>
                <li>台北市内：悠游卡 + 捷运</li>
                <li>台北 → 台南、台南 → 台北：高铁。12/31 早班必须锁</li>
                <li>九份：台北出发一日，不订民宿，下午 4 点前回来</li>
              </ul>
            ),
          },
        ]}
      />
    </div>
  );
}
