import { Link } from "react-router-dom";
import { bookings, budget, nextMilestone, phases, trip } from "../data";
import { daysUntil } from "../lib/dates";

const todayIso = new Date().toISOString().slice(0, 10);
const permitHref = bookings.find((item) => item.id === "permit")?.href;

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
      <p className="kicker latin">Netherlands → Taiwan → Nanshan</p>
      <h1>{trip.title}</h1>
      <p className="lede">
        圣诞从阿姆斯特丹直飞，台湾 8 天只走台北和台南，赶上 101 跨年。1 月 2 日去南山过年，2 月 14
        日广州直飞回来。不经中东停城。
      </p>

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
          <b>{trip.nlLeaveDays}</b>
          <span>荷兰年假（工作日）</span>
        </div>
        <div>
          <b>{trip.taiwanDays}</b>
          <span>台湾天数</span>
        </div>
        <div>
          <b>广州直飞</b>
          <span>春节后回程</span>
        </div>
      </section>
      <p className="quiet">含南山过年，离开荷兰大约 {trip.awayDays} 天。那不是假期，是住家里、必要时远程。</p>

      <h2>路线</h2>
      <ol className="journey">
        <li>
          <strong>AMS</strong>
          <span>12/25 华航 CI74</span>
        </li>
        <li>
          <strong>TPE</strong>
          <span>12/26–1/02 台北 + 台南</span>
        </li>
        <li>
          <strong>SZX</strong>
          <span>南山过年 · 初一 2/6</span>
        </li>
        <li>
          <strong>CAN</strong>
          <span>2/14 南航直飞 AMS</span>
        </li>
      </ol>
      <p>
        <Link to="/taiwan">看台湾逐日和地图</Link>
      </p>

      <h2>阶段</h2>
      <ol className="phases">
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
