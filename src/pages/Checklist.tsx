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

  return (
    <article>
      <h1>预订清单</h1>
      <p className="lede">
        已完成 {checked.length} / {allIds.length}。勾选留在这台浏览器。
      </p>
      <button type="button" className="text-btn" onClick={() => { setChecked([]); saveChecked([]); }}>
        清空
      </button>

      {checklist.map((group) => (
        <section key={group.id} className="check-group">
          <h2>
            {group.title}
            <span>
              {group.items.filter((item) => checked.includes(item.id)).length}/{group.items.length}
            </span>
          </h2>
          <ul>
            {group.items.map((item) => (
              <li key={item.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked.includes(item.id)}
                    onChange={(event) => toggle(item.id, event.target.checked)}
                  />
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
