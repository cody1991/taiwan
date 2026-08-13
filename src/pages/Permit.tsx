import { Descriptions, Steps, Typography } from "antd";
import { permitFacts, permitSteps } from "../data";

export function PermitPage() {
  return (
    <div className="page">
      <Typography.Title className="display" level={1}>
        入台证
      </Typography.Title>
      <Typography.Paragraph>
        旅居荷兰的大陆居民走「国外来台观光」，不是大陆旅行社报团那种。驻荷兰台北代表处从 2024-12-23
        起一律线上申办，再去海牙当面面談缴费。
      </Typography.Paragraph>
      <Typography.Paragraph>
        说明：
        <a href="https://www.roc-taiwan.org/nl/post/24535.html" target="_blank" rel="noreferrer">
          驻荷兰台北代表处申请页
        </a>
      </Typography.Paragraph>

      <Descriptions bordered column={1} size="middle" style={{ margin: "24px 0" }}>
        {permitFacts.map((fact) => (
          <Descriptions.Item key={fact.label} label={fact.label}>
            {fact.value}
          </Descriptions.Item>
        ))}
      </Descriptions>

      <Typography.Title level={3} className="display">
        流程
      </Typography.Title>
      <Steps
        direction="vertical"
        current={-1}
        items={permitSteps.map((title) => ({ title }))}
      />

      <Typography.Title level={3} className="display">
        资格（工作居留通常走第 3 条）
      </Typography.Title>
      <ol>
        <li>在国外留学</li>
        <li>取得当地永久居留权</li>
        <li>旅居国外一年以上且有工作证明</li>
        <li>取得当地依亲长期居留且有财力证明</li>
        <li>前四款的随行配偶或二亲等内血亲</li>
      </ol>
      <Typography.Paragraph>
        单次证从核发日起 3 个月内要入境。9/26 之后尽早约，但不要早于窗口。面談现场不收补交的新居留证。
      </Typography.Paragraph>
    </div>
  );
}
