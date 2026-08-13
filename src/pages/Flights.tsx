import { Card, List, Tag, Typography } from "antd";
import { outboundFlights, returnFlights } from "../data";

export function FlightsPage() {
  return (
    <div className="page">
      <Typography.Title className="display" level={1}>
        航班
      </Typography.Title>
      <Typography.Paragraph>
        三段分开买。不要一张票串荷兰–台湾–深圳。两岸票和欧洲票的行李、改签都不一样。深圳没有直飞阿姆斯特丹。
      </Typography.Paragraph>

      <Typography.Title level={3} className="display">
        去程 AMS → TPE · 12/25
      </Typography.Title>
      <List
        grid={{ gutter: 16, xs: 1, md: 2 }}
        dataSource={outboundFlights}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name} extra={item.preferred ? <Tag color="red">首选</Tag> : null}>
              <p>{item.when}</p>
              <p style={{ color: "#3d534c", marginBottom: 0 }}>{item.detail}</p>
            </Card>
          </List.Item>
        )}
      />

      <Typography.Title level={3} className="display">
        两岸 TPE → SZX · 1/2
      </Typography.Title>
      <Card>
        <p>每天有直飞，大约 1 小时 50 分。常见航班：CI527、ZH9072/9074、CZ3088、B7187，多在 12:30–17:35。</p>
        <p style={{ marginBottom: 0 }}>
          订不到就桃园飞香港，再过深圳湾。本方案要跨年，仍从桃园出，不要改高雄出港。
        </p>
      </Card>

      <Typography.Title level={3} className="display" style={{ marginTop: 32 }}>
        回程 · 春节后
      </Typography.Title>
      <List
        grid={{ gutter: 16, xs: 1, md: 1 }}
        dataSource={returnFlights}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name} extra={item.preferred ? <Tag color="red">推荐</Tag> : null}>
              <p>{item.when}</p>
              <p style={{ color: "#3d534c", marginBottom: 0 }}>{item.detail}</p>
            </Card>
          </List.Item>
        )}
      />

      <Typography.Title level={3} className="display">
        订票顺序
      </Typography.Title>
      <ol>
        <li>现在到 10 月：先盯 2 月回程。春节中欧是卖方市场。</li>
        <li>10 月：买 12/25 AMS–TPE，选可改期。</li>
        <li>11 月：买 1/2 TPE–SZX。</li>
        <li>三段都买单程。不要荷兰往返。</li>
      </ol>
    </div>
  );
}
