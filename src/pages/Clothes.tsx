import { lifeClothes, weather } from "../data";

export function ClothesPage() {
  return (
    <article>
      <h1>衣</h1>
      <p className="lede">台北湿冷，台南干暖。靠叠穿，不从荷兰寄大衣。</p>
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
    </article>
  );
}
