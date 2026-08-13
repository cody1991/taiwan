import { Link } from "react-router-dom";
import { googleDirUrl, googlePlaceUrl } from "../lib/maps";
import { assetUrl, dayTone, mapStops, taiwanDays } from "../data";

const googleRoutePlaces = ["桃园国际机场", "台北车站", "九份老街", "高铁台南站", "台北车站", "桃园国际机场"];

export function TaiwanPage() {
  const markers = mapStops.filter((stop) => stop.id !== "tpe-out");

  return (
    <article>
      <p className="kicker">12/17 – 12/24</p>
      <h1>台湾 8 天</h1>
      <p className="lede">
        台北 3 晚，台南 2 晚，再回台北 2 晚缓冲。12/24 飞南山。花莲、高雄、垦丁不排。九份只做一日，下雨改北投。
      </p>

      <aside className="note">
        12/16 从 AMS 走，比圣诞档松。台北换两次酒店，大箱子寄放车站或第一家店。九份当天下午 4 点前回来。
      </aside>

      <section className="map-block" id="map">
        <div className="map-head">
          <div>
            <h2>路线</h2>
            <p>示意图。真实导航用 Google 地图；岛上实际坐高铁，不是开车。</p>
          </div>
          <a className="btn" href={googleDirUrl(googleRoutePlaces, "driving")} target="_blank" rel="noreferrer">
            在 Google 地图打开
          </a>
        </div>
        <div className="map-body">
          <svg viewBox="0 0 220 300" role="img" aria-label="台湾行程示意图">
            <path
              className="island"
              d="M128 22c22 6 36 28 34 58 0 18-6 36-4 56 3 28 10 48 2 68-10 26-32 44-54 48-22 4-40-8-48-28-10-24-8-52-6-80 2-26 6-50 18-70C82 48 104 26 128 22z"
            />
            <polyline
              className="route-line"
              points={mapStops.map((stop) => `${stop.x},${stop.y}`).join(" ")}
              fill="none"
            />
            {markers.map((stop, index) => (
              <g key={stop.id}>
                <circle className="stop-dot" cx={stop.x} cy={stop.y} r="8" />
                <text className="stop-index" x={stop.x} y={stop.y + 4} textAnchor="middle">
                  {index + 1}
                </text>
              </g>
            ))}
          </svg>
          <ol className="map-legend">
            {markers.map((stop, index) => (
              <li key={stop.id}>
                <b>{index + 1}</b>
                <div>
                  {stop.name}
                  <span>{stop.note}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ol className="days">
        {taiwanDays.map((day) => (
          <li key={day.date} className={`day is-${dayTone(day)}`}>
            <div className="day-copy">
              <div className="day-meta">
                <span className="day-city">{day.city}</span>
                <time dateTime={day.date}>
                  {day.date.slice(5).replace("-", "/")} {day.weekday}
                </time>
              </div>
              <h3>{day.title}</h3>
              <p>{day.body}</p>
              <ol className="day-beats">
                {day.beats.map((beat) => (
                  <li key={beat}>{beat}</li>
                ))}
              </ol>
              <p className="day-stay">{day.stay}</p>
              <p className="day-tips">{day.tips.join(" · ")}</p>
              <a href={googlePlaceUrl(day.mapsQuery)} target="_blank" rel="noreferrer">
                打开地图
              </a>
            </div>
            {day.image && (
              <figure>
                <img src={assetUrl(day.image.src)} alt={day.image.alt} />
                <figcaption>{day.image.caption}</figcaption>
              </figure>
            )}
          </li>
        ))}
      </ol>

      <p>
        <Link to="/stay">住</Link>
        {" · "}
        <Link to="/clothes">衣</Link>
        {" · "}
        <Link to="/transit">行</Link>
      </p>
    </article>
  );
}
