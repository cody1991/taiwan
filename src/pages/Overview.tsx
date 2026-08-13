import { Alert, Card, Col, Row, Statistic, Tag, Timeline, Typography } from "antd";
import { Link } from "react-router-dom";
import { nextMilestone, phases, trip } from "../data";
import { daysUntil } from "../lib/dates";

const todayIso = new Date().toISOString().slice(0, 10);

export function OverviewPage() {
  const next = nextMilestone(todayIso);
  const untilNext = next ? daysUntil(next.date, todayIso) : 0;

  return (
    <div className="page">
      <Typography.Paragraph className="latin" style={{ fontSize: 22, marginBottom: 4, color: "#1f4b55" }}>
        Netherlands → Taiwan → Nanshan
      </Typography.Paragraph>
      <Typography.Title className="display" level={1} style={{ marginTop: 0, fontSize: 42 }}>
        {trip.title}
      </Typography.Title>
      <Typography.Paragraph style={{ fontSize: 16, maxWidth: 640 }}>
        12/25 圣诞从阿姆斯特丹直飞，台湾 8 天 7 晚（台北 + 台南 + 101 跨年），1/2 飞深圳南山，过完年 2/14
        从广州飞回荷兰。
      </Typography.Paragraph>

      {next && (
        <Alert
          type="warning"
          showIcon
          style={{ margin: "8px 0 24px" }}
          message={`下一件：${next.label}`}
          description={`${next.date} · ${untilNext >= 0 ? `还有 ${untilNext} 天` : "已过"}`}
        />
      )}

      <Row gutter={[16, 16]}>
        <Col xs={12} md={6}>
          <Card>
            <Statistic title="离开荷兰" value={trip.awayDays} suffix="天" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Statistic title="台湾" value={trip.taiwanDays} suffix="天" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Statistic title="南山" value={trip.shenzhenDays} suffix="天" />
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Statistic title="荷兰年假" value={trip.nlLeaveDays} suffix="个工作日" />
          </Card>
        </Col>
      </Row>

      <div className="route-ribbon">
        <div className="route-stop">
          <div className="code">AMS</div>
          <div className="meta">12/25 起飞 · 华航 CI74</div>
        </div>
        <div className="route-stop">
          <div className="code">TPE</div>
          <div className="meta">12/26–1/02 · 跨年在台北</div>
        </div>
        <div className="route-stop">
          <div className="code">SZX</div>
          <div className="meta">南山过年 · 初一 2/6</div>
        </div>
        <div className="route-stop">
          <div className="code">CAN</div>
          <div className="meta">2/14 南航直飞回 AMS</div>
        </div>
      </div>

      <Typography.Paragraph>
        <Link to="/taiwan">台湾路线图 · 可在 Google 地图打开</Link>
      </Typography.Paragraph>

      <Typography.Title level={3} className="display">
        阶段
      </Typography.Title>
      <Timeline
        items={phases.map((phase) => ({
          color: phase.key === "tw" ? "#b4451e" : "#1f4b55",
          children: (
            <div>
              <Tag>{phase.range}</Tag>
              <strong style={{ marginLeft: 8 }}>{phase.label}</strong>
              <div style={{ color: "#3d534c", marginTop: 4 }}>{phase.note}</div>
            </div>
          ),
        }))}
      />
    </div>
  );
}
