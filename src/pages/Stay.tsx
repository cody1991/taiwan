import { bookings, lifeStay } from "../data";

export function StayPage() {
  return (
    <article>
      <h1>住</h1>
      <p className="lede">台北两段加台南一段。入台证没下来前只订可免费取消。</p>
      <p className="links-inline">
        {bookings
          .filter((item) => item.id === "agoda" || item.id === "booking")
          .map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          ))}
      </p>
      {lifeStay.map((item) => (
        <section key={item.title} className="block">
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </section>
      ))}
    </article>
  );
}
