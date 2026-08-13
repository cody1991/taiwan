import { Link } from "react-router-dom";
import { bookings, crossStraitFlights, outboundFlights } from "../data";

export function FlightsPage() {
  return (
    <article>
      <h1>航班</h1>
      <p className="lede">两段分开买。去程华航 CI74，回深圳南航 CZ3088。</p>

      <p className="links-inline">
        {bookings
          .filter((item) => item.id === "ci" || item.id === "cz")
          .map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
      </p>

      <h2>去程 AMS → TPE · 12/16</h2>
      {outboundFlights.map((item) => (
        <section key={item.name} className="block is-pick">
          <h3>{item.name}</h3>
          <p>{item.when}</p>
          <p>{item.detail}</p>
        </section>
      ))}

      <h2>两岸 TPE → SZX · 12/24</h2>
      {crossStraitFlights.map((item) => (
        <section key={item.name} className="block is-pick">
          <h3>{item.name}</h3>
          <p>{item.when}</p>
          <p>{item.detail}</p>
        </section>
      ))}
      <p>
        出关入关见 <Link to="/permit">入台证页</Link>。岛上怎么走见 <Link to="/transit">行</Link>。
      </p>

      <h2>订票顺序</h2>
      <ol>
        <li>10 月：买 12/16 CI74，选可改期。</li>
        <li>11 月：买 12/24 CZ3088。</li>
        <li>两段都买单程。</li>
      </ol>
    </article>
  );
}
