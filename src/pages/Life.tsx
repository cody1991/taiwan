import { Link } from "react-router-dom";
import { bookings, lifeClothes, lifeStay, lifeTransit, weather } from "../data";

export function LifePage() {
  return (
    <article>
      <h1>衣住行</h1>
      <p className="lede">
        吃见 <Link to="/food">美食</Link>。这里只写订房、穿衣、岛上怎么走。
      </p>

      <h2>住</h2>
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

      <h2>衣</h2>
      <table className="plain">
        <thead>
          <tr>
            <th>地方</th>
            <th>体感</th>
            <th>带什么</th>
          </tr>
        </thead>
        <tbody>
          {weather.map((row) => (
            <tr key={row.place}>
              <td>{row.place}</td>
              <td>{row.feel}</td>
              <td>{row.pack}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {lifeClothes.map((item) => (
        <section key={item.title} className="block">
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </section>
      ))}

      <h2>行</h2>
      {lifeTransit.map((item) => (
        <section key={item.title} className="block">
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </section>
      ))}
    </article>
  );
}
