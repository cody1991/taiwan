import { Card, List, Tag, Typography } from "antd";
import { routeOptions } from "../data";

export function OptionsPage() {
  return (
    <div className="page">
      <Typography.Title className="display" level={1}>
        三种走法
      </Typography.Title>
      <Typography.Paragraph>推荐方案 A。B 是请不了长假、深圳也不能远程时的退路。C 是回程想玩一站。</Typography.Paragraph>

      <List
        grid={{ gutter: 16, xs: 1, md: 1 }}
        dataSource={routeOptions}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={`${item.key}. ${item.title}`}
              extra={item.key === "A" ? <Tag color="red">当前方案</Tag> : null}
            >
              <p style={{ fontSize: 16 }}>{item.summary}</p>
              <ul style={{ marginBottom: 0 }}>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          </List.Item>
        )}
      />

      <Typography.Title level={3} className="display">
        不建议
      </Typography.Title>
      <ul>
        <li>经伊斯坦布尔、多哈、迪拜停城：中东局势会传导，这趟没必要绕进去。过境不入境另说。</li>
        <li>去程就中转玩：台湾天数被吃掉，跨年会赶。</li>
        <li>12 月底垦丁、花莲：一周行程装不下。</li>
        <li>除夕前后从深圳飞欧洲：票贵、误点、家里也需要人。</li>
        <li>指望深圳直飞阿姆斯特丹：目前没有客运直飞。</li>
      </ul>
    </div>
  );
}
