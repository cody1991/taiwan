import { bookings, outboundFlights } from "../data";

export function FlightsPage() {
  return (
    <article>
      <h1>航班</h1>
      <p className="lede">两段分开买。不要一张票串荷兰–台湾–深圳。</p>

      <p className="links-inline">
        {bookings
          .filter((item) => item.id !== "permit" && item.id !== "thsr")
          .map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
      </p>

      <h2>去程 AMS → TPE · 12/16</h2>
      {outboundFlights.map((item) => (
        <section key={item.name} className={item.preferred ? "block is-pick" : "block"}>
          <h3>
            {item.name}
            {item.preferred ? " · 首选" : ""}
          </h3>
          <p>{item.when}</p>
          <p>{item.detail}</p>
        </section>
      ))}

      <h2>两岸 TPE → SZX · 12/24</h2>
      <section className="block">
        <p>每天有直飞，大约 1 小时 50 分。CI527、ZH9072/9074、CZ3088、B7187，多在中午到下午。</p>
        <p>订不到就桃园飞香港再过深圳湾。从台北出，不要从台南赶当天。平安夜到南山。</p>
      </section>

      <h2>订票顺序</h2>
      <ol>
        <li>10 月：买 12/16 AMS–TPE，选可改期。</li>
        <li>11 月：买 12/24 TPE–SZX。</li>
        <li>两段都买单程。</li>
      </ol>
    </article>
  );
}
