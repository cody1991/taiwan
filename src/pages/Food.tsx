import { Link } from "react-router-dom";
import { assetUrl, foodGroups, foodSkip } from "../data";
import { googlePlaceUrl } from "../lib/maps";

export function FoodPage() {
  return (
    <article>
      <p className="kicker">12/17 – 12/23</p>
      <h1>食</h1>
      <p className="lede">
        只写这 8 天顺路能吃的。台北夜市、九份芋圆、台南国华街、离开前伴手礼和药妆。摊位看队伍和轮转。夜市现金，不用给小费。
      </p>

      {foodGroups.map((group) => (
        <section key={group.id} className="food-group">
          <h2>{group.title}</h2>
          <p className="quiet">{group.when}</p>
          <ul className="food-list">
            {group.items.map((item) => (
              <li key={item.name} className={item.image ? "food-card has-pic" : "food-card"}>
                <div>
                  <h3>{item.name}</h3>
                  <p className="food-where">{item.where}</p>
                  <p>{item.note}</p>
                  <a href={googlePlaceUrl(item.mapsQuery)} target="_blank" rel="noreferrer">
                    打开地图
                  </a>
                </div>
                {item.image && <img src={assetUrl(item.image)} alt={item.name} />}
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2>这趟先别排</h2>
      <ul>
        {foodSkip.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        <Link to="/stay">住</Link>
        {" · "}
        <Link to="/transit">行</Link>
      </p>
    </article>
  );
}
