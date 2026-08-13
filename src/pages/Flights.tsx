import { bookings, crossStraitFlights, outboundFlights } from "../data";

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

      <h2>两岸 TPE → SZX · 12/24 周四</h2>
      {crossStraitFlights.map((item) => (
        <section key={item.name} className={item.preferred ? "block is-pick" : "block"}>
          <h3>
            {item.name}
            {item.preferred ? " · 首选" : ""}
          </h3>
          <p>{item.when}</p>
          <p>{item.detail}</p>
        </section>
      ))}
      <p>订不到直飞再桃园飞香港过深圳湾。从台北出，不要从台南赶当天。预留 3 小时到桃园。</p>

      <h2>订票顺序</h2>
      <ol>
        <li>10 月：买 12/16 AMS–TPE，选可改期。</li>
        <li>11 月：买 12/24 TPE–SZX。</li>
        <li>两段都买单程。</li>
      </ol>
    </article>
  );
}
