import { Button, Space } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import { mapStops } from "../data";
import { googleDirUrl } from "../lib/maps";

const googleRoutePlaces = ["桃园国际机场", "台北车站", "九份老街", "台南车站", "台北101", "桃园国际机场"];

export function RouteMap() {
  const line = mapStops.map((stop) => `${stop.x},${stop.y}`).join(" ");
  const markers = mapStops.filter((stop) => stop.id !== "tpe-out");

  return (
    <div id="map" className="route-map">
      <div className="route-map-bar">
        <div>
          <div className="display" style={{ fontSize: 20 }}>
            台湾路线
          </div>
          <div style={{ color: "#3d534c", fontSize: 13, marginTop: 4 }}>
            桃园 → 台北 → 九份 → 台南 → 101 → 桃园。示意走法；点右边用 Google 地图画出真实路线（开车图层，实际坐高铁）。
          </div>
        </div>
        <Space wrap>
          <Button
            type="primary"
            icon={<ExportOutlined />}
            href={googleDirUrl(googleRoutePlaces, "driving")}
            target="_blank"
            rel="noreferrer"
          >
            在 Google 地图打开
          </Button>
        </Space>
      </div>

      <svg viewBox="0 0 220 300" role="img" aria-label="台湾行程路线图">
        <path
          className="island"
          d="M128 22c22 6 36 28 34 58 0 18-6 36-4 56 3 28 10 48 2 68-10 26-32 44-54 48-22 4-40-8-48-28-10-24-8-52-6-80 2-26 6-50 18-70C82 48 104 26 128 22z"
        />
        <polyline className="route-line" points={line} fill="none" />
        {markers.map((stop, index) => {
          const east = stop.x > 130;
          const labelX = stop.x + (east ? 14 : -14);
          return (
            <g key={stop.id}>
              <circle className="stop-dot" cx={stop.x} cy={stop.y} r="8" />
              <text className="stop-index" x={stop.x} y={stop.y + 4} textAnchor="middle">
                {index + 1}
              </text>
              <text className="stop-label" x={labelX} y={stop.y - 8} textAnchor={east ? "start" : "end"}>
                {stop.name}
              </text>
              <text className="stop-note" x={labelX} y={stop.y + 6} textAnchor={east ? "start" : "end"}>
                {stop.note}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
