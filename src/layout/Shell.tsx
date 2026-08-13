import { Layout, Menu } from "antd";
import {
  AuditOutlined,
  CheckSquareOutlined,
  CompassOutlined,
  HomeOutlined,
  RocketOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { useMemo, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { trip } from "../data";

const items = [
  { key: "/", icon: <HomeOutlined />, label: <Link to="/">总览</Link> },
  { key: "/taiwan", icon: <CompassOutlined />, label: <Link to="/taiwan">台湾逐日</Link> },
  { key: "/flights", icon: <RocketOutlined />, label: <Link to="/flights">航班</Link> },
  { key: "/permit", icon: <AuditOutlined />, label: <Link to="/permit">入台证</Link> },
  { key: "/options", icon: <SwapOutlined />, label: <Link to="/options">三种走法</Link> },
  { key: "/checklist", icon: <CheckSquareOutlined />, label: <Link to="/checklist">清单</Link> },
];

export function Shell() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const selected = useMemo(() => {
    const match = items.find((item) =>
      item.key === "/" ? location.pathname === "/" : location.pathname.startsWith(item.key),
    );
    return [match?.key ?? "/"];
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh", background: "transparent" }}>
      <Layout.Sider
        breakpoint="lg"
        collapsedWidth={0}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={248}
        style={{ borderRight: "1px solid rgba(196,165,116,0.18)" }}
      >
        <div style={{ padding: "28px 22px 18px" }}>
          <div className="latin" style={{ color: "#c4a574", fontSize: 18 }}>
            Winter island
          </div>
          <div className="display" style={{ color: "#f3eee4", fontSize: 28, marginTop: 4 }}>
            {trip.title}
          </div>
          <div style={{ color: "rgba(243,238,228,0.62)", fontSize: 12, marginTop: 8, lineHeight: 1.6 }}>
            {trip.subtitle}
          </div>
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={selected} items={items} />
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ padding: "28px 28px 64px" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
