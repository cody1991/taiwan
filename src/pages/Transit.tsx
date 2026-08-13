import { Link } from "react-router-dom";
import { lifeTransit } from "../data";

export function TransitPage() {
  return (
    <article>
      <h1>行</h1>
      <p className="lede">
        岛上不租车。机票见 <Link to="/flights">航班</Link>。
      </p>
      {lifeTransit.map((item) => (
        <section key={item.title} className="block">
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </section>
      ))}
    </article>
  );
}
