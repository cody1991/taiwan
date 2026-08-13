import { Button, Checkbox, Collapse, Space, Typography } from "antd";
import { useMemo, useState } from "react";
import { checklist } from "../data";
import { loadChecked, saveChecked } from "../lib/checklist";

export function ChecklistPage() {
  const allIds = useMemo(
    () => checklist.flatMap((group) => group.items.map((item) => item.id)),
    [],
  );
  const [checked, setChecked] = useState<string[]>(() => loadChecked());

  function toggle(id: string, on: boolean) {
    const next = on ? [...checked, id] : checked.filter((item) => item !== id);
    setChecked(next);
    saveChecked(next);
  }

  function reset() {
    setChecked([]);
    saveChecked([]);
  }

  return (
    <div className="page">
      <Typography.Title className="display" level={1}>
        预订清单
      </Typography.Title>
      <Space style={{ marginBottom: 16 }}>
        <Typography.Text>
          已完成 {checked.length} / {allIds.length}
        </Typography.Text>
        <Button size="small" onClick={reset}>
          清空
        </Button>
      </Space>
      <Typography.Paragraph type="secondary">勾选会留在这台浏览器里。</Typography.Paragraph>

      <Collapse
        defaultActiveKey={checklist.map((group) => group.id)}
        items={checklist.map((group) => ({
          key: group.id,
          label: `${group.title} · ${group.items.filter((item) => checked.includes(item.id)).length}/${group.items.length}`,
          children: (
            <Space direction="vertical">
              {group.items.map((item) => (
                <Checkbox
                  key={item.id}
                  checked={checked.includes(item.id)}
                  onChange={(event) => toggle(item.id, event.target.checked)}
                >
                  {item.label}
                </Checkbox>
              ))}
            </Space>
          ),
        }))}
      />
    </div>
  );
}
