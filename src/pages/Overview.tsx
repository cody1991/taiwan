import { Link } from "react-router-dom";
import { assetUrl, bookings, budget, nextMilestone, phases, tastes, trip } from "../data";
import { daysUntil } from "../lib/dates";

const todayIso = new Date().toISOString().slice(0, 10);
const permitHref = bookings.find((item) => item.id === "permit")?.href;

const hops = [
  { code: "AMS", note: "12/25 华航 CI74" },
  { code: "TPE", note: "12/26–1/02 台北 + 台南" },
  { code: "SZX", note: "南山过年 · 初一 2/6" },
  { code: "CAN", note: "2/14 南航直飞 AMS" },
];

function untilLabel(days: number) {
  if (days > 0) return ` · 还有 ${days} 天`;
  if (days === 0) return " · 就是今天";
  return " · 已过";
}

function NextCta({ date }: { date: string }) {
  if (date === trip.permitWindow && permitHref) {
    return (
      <a className="btn" href={permitHref} target="_blank" rel="noreferrer">
        打开入台证说明
      </a>
    );
  }
  if (date === "2026-12-31" || date === "2027-01-02") {
    return (
      <Link className="btn" to="/taiwan">
        看台湾那天
      </Link>
    );
  }
  if (date === "2027-02-06") {
    return (
      <Link className="btn" to="/options">
        看走法
      </Link>
    );
  }
  return (
    <Link className="btn" to={date <= "2026-12-25" || date === trip.returnDate ? "/flights" : "/checklist"}>
      {date === trip.returnDate ? "看回程" : date <= "2026-12-25" ? "看航班" : "打开清单"}
    </Link>
  );
}

export function OverviewPage() {
  const stillTraveling = todayIso <= trip.returnDate;
  const next = stillTraveling ? nextMilestone(todayIso) : undefined;
  const untilNext = next ? daysUntil(next.date, todayIso) : 0;

  return (
    <article>
      <header className="cover">
        <svg className="cover-island" viewBox="0 0 220 300" aria-hidden="true">
          <path d="M128 22c22 6 36 28 34 58 0 18-6 36-4 56 3 28 10 48 2 68-10 26-32 44-54 48-22 4-40-8-48-28-10-24-8-52-6-80 2-26 6-50 18-70C82 48 104 26 128 22z" />
        </svg>
        <div>
          <p className="kicker latin">Netherlands → Taiwan → Nanshan</p>
          <p className="cover-dates">12.25 — 02.14</p>
          <h1>{trip.title}</h1>
          <p className="lede">
            圣诞从阿姆斯特丹直飞，台湾 8 天只走台北和台南，赶上 101 跨年。1 月 2 日去南山过年，2 月 14
            日广州直飞回来。
          </p>
        </div>
      </header>

      {next && (
        <section className="next">
          <p className="kicker">下一件{untilLabel(untilNext)}</p>
          <h2>{next.label}</h2>
          <p>{next.date}</p>
          <NextCta date={next.date} />
        </section>
      )}

      <section className="facts">
        <div>
          <b>{trip.taiwanDays}</b>
          <span>台湾天数</span>
        </div>
        <div>
          <b>101</b>
          <span>台北跨年</span>
        </div>
        <div>
          <b>CZ307</b>
          <span>广州直飞回来</span>
        </div>
      </section>

      <h2>路线</h2>
      <ol className="path">
        {hops.map((hop) => (
          <li key={hop.code}>
            <strong>{hop.code}</strong>
            <span>{hop.note}</span>
          </li>
        ))}
      </ol>
      <p>
        <Link to="/taiwan">看台湾逐日和地图</Link>
      </p>

      <h2>这趟会吃</h2>
      <ul className="tastes">
        {tastes.map((item) => (
          <li key={item.src}>
            <Link to="/taiwan">
              <img src={assetUrl(item.src)} alt="" />
              <b>{item.label}</b>
              <span>{item.place}</span>
            </Link>
          </li>
        ))}
      </ul>

      <h2>阶段</h2>
      <ol className="timeline">
        {phases.map((phase) => (
          <li key={phase.key}>
            <span>{phase.range}</span>
            <strong>{phase.label}</strong>
            <em>{phase.note}</em>
          </li>
        ))}
      </ol>

      <h2>现在就能点</h2>
      <ul className="links">
        {bookings.map((item) => (
          <li key={item.id}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
            <span>{item.note}</span>
          </li>
        ))}
      </ul>

      <h2>大概花费（一人）</h2>
      <table className="plain">
        <tbody>
          {budget.map((row) => (
            <tr key={row.item}>
              <td>{row.item}</td>
              <td>{row.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="quiet">圣诞去程和春节回程是大头，10 月就要锁可改期。合计大约 €2,200–4,000。</p>
    </article>
  );
}
