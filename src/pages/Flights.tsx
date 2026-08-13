import { bookings, outboundFlights, returnFlights } from "../data";

export function FlightsPage() {
  return (
    <article>
      <h1>航班</h1>
      <p className="lede">
        三段分开买。不要一张票串荷兰–台湾–深圳。深圳没有直飞阿姆斯特丹，回程从广州走。
      </p>

      <p className="links-inline">
        {bookings
          .filter((item) => item.id !== "permit" && item.id !== "thsr")
          .map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
      </p>

      <h2>去程 AMS → TPE · 12/25</h2>
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

      <h2>两岸 TPE → SZX · 1/2</h2>
      <section className="block">
        <p>每天有直飞，大约 1 小时 50 分。CI527、ZH9072/9074、CZ3088、B7187，多在中午到下午。</p>
        <p>订不到就桃园飞香港再过深圳湾。要跨年，仍从桃园出。</p>
      </section>

      <h2>回程 · 春节后</h2>
      {returnFlights.map((item) => (
        <section key={item.name} className={item.preferred ? "block is-pick" : "block"}>
          <h3>
            {item.name}
            {item.preferred ? " · 推荐" : ""}
          </h3>
          <p>{item.when}</p>
          <p>{item.detail}</p>
        </section>
      ))}

      <h2>订票顺序</h2>
      <ol>
        <li>现在到 10 月：先盯 2 月广州或香港回程。</li>
        <li>10 月：买 12/25 AMS–TPE，选可改期。</li>
        <li>11 月：买 1/2 TPE–SZX。</li>
        <li>三段都买单程。</li>
      </ol>
    </article>
  );
}
