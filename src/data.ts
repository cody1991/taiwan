export type DayImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TaiwanDay = {
  date: string;
  weekday: string;
  city: string;
  title: string;
  stay: string;
  body: string;
  tips: string[];
  mapsQuery: string;
  image?: DayImage;
};

export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function dayTone(day: Pick<TaiwanDay, "city" | "date">) {
  if (day.date === "2026-12-31") return "nye";
  if (day.city === "台南") return "tainan";
  if (day.city === "深圳") return "sz";
  return "taipei";
}

export type MapStop = {
  id: string;
  name: string;
  note: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
};

export type FlightOption = {
  name: string;
  when: string;
  detail: string;
  preferred?: boolean;
};

export type ChecklistItem = {
  id: string;
  label: string;
};

export type ChecklistGroup = {
  id: string;
  title: string;
  items: ChecklistItem[];
};

export const milestones = [
  { date: "2026-09-26", label: "入台证窗口打开，约海牙面談" },
  { date: "2026-10-15", label: "买可改期的 AMS–TPE" },
  { date: "2026-11-15", label: "锁酒店、高铁、TPE–SZX" },
  { date: "2026-12-25", label: "阿姆斯特丹起飞" },
  { date: "2026-12-31", label: "台北 101 跨年" },
  { date: "2027-01-02", label: "桃园飞深圳" },
  { date: "2027-02-06", label: "春节初一" },
];

export function nextMilestone(fromIso: string) {
  return milestones.find((item) => item.date >= fromIso) ?? milestones.at(-1);
}

export const trip = {
  title: "冬岛行程",
  subtitle: "荷兰 → 台湾 → 深圳南山",
  outbound: "2026-12-25",
  taiwanStart: "2026-12-26",
  taiwanEnd: "2027-01-02",
  shenzhenStart: "2027-01-02",
  cnyEve: "2027-02-05",
  cnyDay: "2027-02-06",
  permitWindow: "2026-09-26",
  awayDays: 52,
  taiwanDays: 8,
  shenzhenDays: 43,
  nlLeaveDays: 4,
};

export const phases = [
  { key: "prep", label: "荷兰准备", range: "8/13 – 12/24", note: "入台证、机票、酒店" },
  { key: "go", label: "去程", range: "12/25 – 12/26", note: "华航 CI74 AMS → TPE" },
  { key: "tw", label: "台湾", range: "12/26 – 1/02", note: "台北 + 台南 + 跨年" },
  { key: "sz", label: "南山", range: "1/02 起", note: "家人、远程、过年" },
  { key: "cny", label: "春节", range: "2/05 – 2/12", note: "除夕 2/5 · 初一 2/6" },
];

export const taiwanDays: TaiwanDay[] = [
  {
    date: "2026-12-26",
    weekday: "六",
    city: "台北",
    title: "抵达台北",
    stay: "中山 / 西门 / 大安",
    body: "圣诞当天从阿姆斯特丹起飞，次日约 06:35 到桃园。机场捷运进城，上午睡觉、换零钱、买悠游卡。下午西门或大稻埕，晚上饶河或宁夏夜市。跨年两晚提前锁信义或东区。",
    tips: ["第一天只吃、只睡", "荷兰 12/25、12/26 都是公假"],
    mapsQuery: "台北车站",
    image: {
      src: "food/food-oyster-omelette.jpg",
      alt: "夜市蚵仔煎",
      caption: "饶河或宁夏 · 蚵仔煎",
    },
  },
  {
    date: "2026-12-27",
    weekday: "日",
    city: "台北",
    title: "老城 + 故宫",
    stay: "台北",
    body: "故宫周日开馆（周一才休）。上午故宫，下午迪化街、大稻埕、龙山寺。晚上宁夏或华西街。时差没倒过来就故宫改到下午。",
    tips: ["故宫别排周一"],
    mapsQuery: "国立故宫博物院",
  },
  {
    date: "2026-12-28",
    weekday: "一",
    city: "台北",
    title: "九份或北投",
    stay: "台北",
    body: "晴：九份一日，傍晚回台北，不在九份过夜。雨：北投泡汤，下雨也不废。不要排阳明山，12 月山顶常起雾封路。晚上收行李，第二天去台南。",
    tips: ["看天气二选一", "九份过夜太吃天数", "16:00 前离开九份"],
    mapsQuery: "九份老街",
  },
  {
    date: "2026-12-29",
    weekday: "二",
    city: "台南",
    title: "高铁去台南",
    stay: "台南 2 晚",
    body: "早班高铁约 1 小时 40 分。下午安平古堡、安平老街。晚上国华街：牛肉汤、虾仁饭、碗粿。一周行程里，台南是美食高峰，高雄这趟不排。",
    tips: ["晚饭给国华街"],
    mapsQuery: "安平古堡",
    image: {
      src: "food/food-beef-soup.jpg",
      alt: "台南牛肉汤",
      caption: "国华街 · 牛肉汤",
    },
  },
  {
    date: "2026-12-30",
    weekday: "三",
    city: "台南",
    title: "台南慢走",
    stay: "台南",
    body: "孔庙、赤崁楼、林百货、神农街。中午再吃一轮，下午咖啡馆。不要去垦丁，落山风大，来回吃掉一天。",
    tips: ["砍垦丁、砍高雄"],
    mapsQuery: "台南孔庙",
    image: {
      src: "food/food-wagui.jpg",
      alt: "台南碗粿",
      caption: "台南 · 碗粿",
    },
  },
  {
    date: "2026-12-31",
    weekday: "四",
    city: "台北",
    title: "高铁回台北 · 跨年",
    stay: "信义 / 东区",
    body: "早班高铁回台北。下午睡觉。晚上看 101 烟火，不要进市民广场主舞台。冬天吹东北风，站在 101 北侧或东侧：国父纪念馆、松山文创、四四南村、象山。捷运从国父纪念馆或象山下。",
    tips: ["12/31 早班高铁必须锁", "酒店要能走路到信义"],
    mapsQuery: "台北101",
  },
  {
    date: "2027-01-01",
    weekday: "五",
    city: "台北",
    title: "元旦收尾",
    stay: "台北",
    body: "荷兰这天也是公假。晚起，永康街、东门、诚品，买伴手礼。不要排新景点。",
    tips: ["只买东西，不赶路"],
    mapsQuery: "永康街",
    image: {
      src: "food/food-pineapple-cake.jpg",
      alt: "凤梨酥",
      caption: "伴手礼 · 凤梨酥",
    },
  },
  {
    date: "2027-01-02",
    weekday: "六",
    city: "深圳",
    title: "飞深圳南山",
    stay: "南山 · 后海 / 科技园 / 深圳湾",
    body: "机场捷运去桃园，预留 3 小时。TPE → SZX 直飞大约 2 小时。到宝安后去南山。",
    tips: ["周六到，周日安顿，周一只班"],
    mapsQuery: "深圳宝安国际机场",
  },
];

export const mapStops: MapStop[] = [
  { id: "tpe-in", name: "桃园机场", note: "12/26 抵达", lat: 25.0777, lng: 121.2328, x: 108, y: 58 },
  { id: "taipei", name: "台北", note: "12/26–28 住", lat: 25.0478, lng: 121.517, x: 132, y: 48 },
  { id: "jiufen", name: "九份", note: "12/28 一日", lat: 25.1095, lng: 121.8443, x: 162, y: 40 },
  { id: "tainan", name: "台南", note: "12/29–30 住", lat: 22.9971, lng: 120.2026, x: 88, y: 188 },
  { id: "taipei101", name: "台北 101", note: "12/31 跨年", lat: 25.034, lng: 121.5645, x: 140, y: 66 },
  { id: "tpe-out", name: "桃园机场", note: "1/2 飞深圳", lat: 25.0777, lng: 121.2328, x: 108, y: 58 },
];

export const tastes = [
  { src: "food/food-oyster-omelette.jpg", label: "蚵仔煎", place: "台北夜市" },
  { src: "food/food-beef-soup.jpg", label: "牛肉汤", place: "台南国华街" },
  { src: "food/food-wagui.jpg", label: "碗粿", place: "台南" },
  { src: "food/food-pineapple-cake.jpg", label: "凤梨酥", place: "元旦伴手礼" },
];

export const weather = [
  { place: "台北、九份", feel: "湿冷，可能连阴雨", pack: "防水外套、可叠穿毛衣" },
  { place: "台南", feel: "干暖，白天可短袖", pack: "薄外套晚上用" },
  { place: "跨年户外", feel: "站 2–4 小时", pack: "保暖层、充电宝" },
];

export const outboundFlights: FlightOption[] = [
  {
    name: "华航 CI74",
    when: "周五约 10:40 AMS → 次日 06:35 TPE · A350",
    detail: "首选。12/25 圣诞当天走，荷兰公假，不占年假。CI74 周一、三、五、六有班，周五对得上。",
    preferred: true,
  },
  {
    name: "荷航 KL807",
    when: "晚上约 20:05 AMS → 次日下午 TPE",
    detail: "当天还要上班才考虑。下午到，第一天废掉。",
  },
];

export const checklist: ChecklistGroup[] = [
  {
    id: "aug-sep",
    title: "8–9 月",
    items: [
      { id: "docs", label: "护照效期、荷兰居留效期对照入台证规则" },
      { id: "leave", label: "向公司确认 12/28–12/31 年假，以及 1–2 月能否南山远程" },
      { id: "job-letter", label: "准备在职证明（全职、职位、入职日期）" },
      { id: "photo", label: "2 寸白底证件照（电子 + 一张纸质）" },
    ],
  },
  {
    id: "permit",
    title: "9/26 起 · 入台证",
    items: [
      { id: "book-slot", label: "移民署系统一开 12 月档期就约海牙" },
      { id: "ns", label: "约上后马上订海牙来回，09:30 前到馆" },
      { id: "upload", label: "线上上传材料" },
      { id: "interview", label: "面談：护照、居留、预约单、照片、在职证明、现金 €18/€30" },
    ],
  },
  {
    id: "oct",
    title: "10 月",
    items: [
      { id: "ams-tpe", label: "买 12/25 AMS–TPE，选可改期" },
      { id: "tpe-hotel-1", label: "订台北前 3 晚（12/26–28）" },
      { id: "nye-hotel", label: "订台北跨年 2 晚（12/31–01/01），信义/东区" },
    ],
  },
  {
    id: "nov",
    title: "11 月",
    items: [
      { id: "print-permit", label: "入台证下载打印，备份到手机" },
      { id: "other-hotels", label: "订台南 2 晚（12/29–30）" },
      { id: "thsr", label: "高铁：台北→台南（12/29）、台南→台北（12/31 早班）" },
      { id: "tpe-szx", label: "1/2 TPE–SZX" },
    ],
  },
  {
    id: "week",
    title: "出发前一周",
    items: [
      { id: "nye-traffic", label: "查 12/31 台北交管和捷运加班" },
      { id: "twd", label: "换一点新台币现金" },
      { id: "pack", label: "防水外套、可叠穿、不寄大衣" },
      { id: "print", label: "打印入台证 + 护照复印" },
      { id: "residence", label: "荷兰居留卡带在身上" },
    ],
  },
  {
    id: "on-trip",
    title: "在路上",
    items: [
      { id: "fireworks", label: "12/31 下午睡觉，晚上北侧或东侧看烟火" },
      { id: "souvenir", label: "01/01 买伴手礼" },
      { id: "airport", label: "01/02 提前 3 小时到桃园" },
    ],
  },
];

export const permitSteps = [
  "线上填表，上传护照、居留、证件照、在职证明",
  "约海牙面談日期",
  "打印预约确认单，上午 09:30–12:00 当面缴费核验",
  "审核约 4 周，补件会更久",
  "核准后自行下载打印，入境台湾出示",
];

export const permitFacts = [
  { label: "窗口", value: "只开放未来三个月，约 9/26 可约 12/26 入境" },
  { label: "地点", value: "Van Stolkweg 23, Den Haag" },
  { label: "费用", value: "单次 €18 · 多次 €30，现金，必须本人" },
  { label: "居留", value: "单次证面談当天剩余 ≥ 6 个月；多次证 ≥ 1 年" },
  { label: "电话", value: "+31 70 250 3000 分机 114" },
];

export const routeOptions = [
  {
    key: "A",
    title: "推荐",
    summary: "台湾 8 天 7 晚 + 南山过年",
    points: [
      "12/25 AMS → TPE，1/2 飞深圳",
      "台北 + 台南 + 跨年；花莲、高雄这趟不排",
    ],
  },
  {
    key: "B",
    title: "短假",
    summary: "只待台北 5 晚",
    points: [
      "不去台南，跨年前后都在台北",
      "只有深圳也不能远程时才用",
    ],
  },
];

export const bookings = [
  {
    id: "permit",
    name: "入台证",
    href: "https://www.roc-taiwan.org/nl/post/24535.html",
    note: "海牙代表处 · 9/26 起约",
  },
  {
    id: "ci",
    name: "华航",
    href: "https://www.china-airlines.com",
    note: "12/25 AMS–TPE",
  },
  {
    id: "thsr",
    name: "台湾高铁",
    href: "https://www.thsrc.com.tw",
    note: "12/29 去、12/31 回",
  },
];

export const budget = [
  { item: "去程 AMS–TPE（圣诞）", range: "€700–1,200" },
  { item: "两岸 TPE–SZX", range: "€80–200" },
  { item: "台湾酒店 7 晚", range: "€500–900" },
  { item: "台湾吃喝交通", range: "€300–500" },
  { item: "入台证", range: "€18" },
];

export const avoid = [
  "去程就中转玩",
  "12 月底垦丁、花莲",
];
