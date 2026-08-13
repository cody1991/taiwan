import { avoid, routeOptions } from "../data";

export function OptionsPage() {
  return (
    <article>
      <h1>三种走法</h1>
      <p className="lede">现在走方案 A。回程广州直飞。想停只停香港。</p>

      {routeOptions.map((item) => (
        <section key={item.key} className={item.key === "A" ? "block is-pick" : "block"}>
          <h2>
            {item.key}. {item.title}
            {item.key === "A" ? " · 当前" : ""}
          </h2>
          <p>{item.summary}</p>
          <ul>
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      ))}

      <h2>不建议</h2>
      <ul>
        {avoid.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
