import { theme, type ThemeConfig } from "antd";

export const appTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#b4451e",
    colorInfo: "#1f4b55",
    colorSuccess: "#3d534c",
    colorWarning: "#b4451e",
    colorText: "#15262d",
    colorTextSecondary: "#3d534c",
    colorBgLayout: "transparent",
    colorBgContainer: "rgba(255,252,246,0.86)",
    colorBorder: "rgba(21,38,45,0.12)",
    borderRadius: 2,
    fontFamily: '"Noto Sans SC", "PingFang SC", sans-serif',
    fontSize: 15,
  },
  components: {
    Layout: {
      siderBg: "#14242b",
      headerBg: "transparent",
      bodyBg: "transparent",
    },
    Menu: {
      darkItemBg: "#14242b",
      darkItemSelectedBg: "#1f4b55",
      darkItemSelectedColor: "#f3eee4",
      darkItemColor: "rgba(243,238,228,0.72)",
      darkItemHoverColor: "#f3eee4",
      itemBorderRadius: 0,
    },
    Card: {
      headerFontSize: 16,
    },
  },
};
