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
  { date: "2026-09-17", label: "入台证窗口打开，约海牙面談" },
  { date: "2026-10-15", label: "买可改期的 AMS–TPE" },
  { date: "2026-11-15", label: "锁酒店、高铁、TPE–SZX" },
  { date: "2026-12-16", label: "阿姆斯特丹起飞" },
  { date: "2026-12-24", label: "桃园飞深圳" },
  { date: "2027-02-06", label: "春节初一" },
];

export function nextMilestone(fromIso: string) {
  return milestones.find((item) => item.date >= fromIso) ?? milestones.at(-1);
}

export const trip = {
  title: "冬岛行程",
  subtitle: "荷兰 → 台湾 → 深圳南山",
  outbound: "2026-12-16",
  taiwanStart: "2026-12-17",
  taiwanEnd: "2026-12-24",
  shenzhenStart: "2026-12-24",
  cnyEve: "2027-02-05",
  cnyDay: "2027-02-06",
  permitWindow: "2026-09-17",
  awayDays: 52,
  taiwanDays: 8,
  shenzhenDays: 43,
  nlLeaveDays: 4,
};

export const phases = [
  { key: "prep", label: "荷兰准备", range: "8/13 – 12/15", note: "入台证、机票、酒店" },
  { key: "go", label: "去程", range: "12/16 – 12/17", note: "华航 CI74 AMS → TPE" },
  { key: "tw", label: "台湾", range: "12/17 – 12/24", note: "台北 + 台南" },
  { key: "sz", label: "南山", range: "12/24 起", note: "家人、远程、过年" },
  { key: "cny", label: "春节", range: "2/05 – 2/12", note: "除夕 2/5 · 初一 2/6" },
];

export const taiwanDays: TaiwanDay[] = [
  {
    date: "2026-12-17",
    weekday: "四",
    city: "台北",
    title: "抵达台北",
    stay: "中山 / 西门 / 大安",
    body: "周三从阿姆斯特丹起飞，周四约 06:35 到桃园。机场捷运进城，上午睡觉、换零钱、买悠游卡。下午西门或大稻埕，晚上饶河或宁夏夜市。",
    tips: ["第一天只吃、只睡"],
    mapsQuery: "台北车站",
    image: {
      src: "food/food-oyster-omelette.jpg",
      alt: "夜市蚵仔煎",
      caption: "饶河或宁夏 · 蚵仔煎",
    },
  },
  {
    date: "2026-12-18",
    weekday: "五",
    city: "台北",
    title: "老城 + 故宫",
    stay: "台北",
    body: "故宫周五开馆（周一才休）。上午故宫，下午迪化街、大稻埕、龙山寺。晚上宁夏或华西街。时差没倒过来就故宫改到下午。",
    tips: ["故宫别排周一"],
    mapsQuery: "国立故宫博物院",
  },
  {
    date: "2026-12-19",
    weekday: "六",
    city: "台北",
    title: "九份或北投",
    stay: "台北",
    body: "晴：九份一日，傍晚回台北，不在九份过夜。雨：北投泡汤。不要排阳明山，12 月山顶常起雾封路。晚上收行李，第二天去台南。",
    tips: ["看天气二选一", "九份过夜太吃天数", "16:00 前离开九份"],
    mapsQuery: "九份老街",
  },
  {
    date: "2026-12-20",
    weekday: "日",
    city: "台南",
    title: "高铁去台南",
    stay: "台南 2 晚",
    body: "早班高铁约 1 小时 40 分。下午安平古堡、安平老街。晚上国华街：牛肉汤、虾仁饭、碗粿。高雄这趟不排。",
    tips: ["晚饭给国华街"],
    mapsQuery: "安平古堡",
    image: {
      src: "food/food-beef-soup.jpg",
      alt: "台南牛肉汤",
      caption: "国华街 · 牛肉汤",
    },
  },
  {
    date: "2026-12-21",
    weekday: "一",
    city: "台南",
    title: "台南慢走",
    stay: "台南",
    body: "孔庙、赤崁楼、林百货、神农街。中午再吃一轮，下午咖啡馆。不要去垦丁。故宫这天休馆，人在台南正好。",
    tips: ["砍垦丁、砍高雄"],
    mapsQuery: "台南孔庙",
    image: {
      src: "food/food-wagui.jpg",
      alt: "台南碗粿",
      caption: "台南 · 碗粿",
    },
  },
  {
    date: "2026-12-22",
    weekday: "二",
    city: "台北",
    title: "高铁回台北",
    stay: "台北 2 晚",
    body: "早班高铁回台北。下午永康、东门、诚品，买伴手礼。不必赶 101，也不必换到信义。",
    tips: ["伴手礼今天买"],
    mapsQuery: "永康街",
    image: {
      src: "food/food-pineapple-cake.jpg",
      alt: "凤梨酥",
      caption: "伴手礼 · 凤梨酥",
    },
  },
  {
    date: "2026-12-23",
    weekday: "三",
    city: "台北",
    title: "台北收尾",
    stay: "台北",
    body: "晚起。没走完的咖啡馆、书店。不要排新远郊。晚上早睡。",
    tips: ["只闲逛，不赶路"],
    mapsQuery: "台北车站",
  },
  {
    date: "2026-12-24",
    weekday: "四",
    city: "深圳",
    title: "飞深圳南山",
    stay: "南山 · 后海 / 科技园 / 深圳湾",
    body: "从台北去桃园，预留 3 小时。TPE → SZX 直飞大约 2 小时。平安夜到南山。圣诞、跨年、春节都在家。",
    tips: ["12/24 两岸票早点锁"],
    mapsQuery: "深圳宝安国际机场",
  },
];

export const mapStops: MapStop[] = [
  { id: "tpe-in", name: "桃园机场", note: "12/17 抵达", lat: 25.0777, lng: 121.2328, x: 108, y: 58 },
  { id: "taipei", name: "台北", note: "12/17–19 住", lat: 25.0478, lng: 121.517, x: 132, y: 48 },
  { id: "jiufen", name: "九份", note: "12/19 一日", lat: 25.1095, lng: 121.8443, x: 162, y: 40 },
  { id: "tainan", name: "台南", note: "12/20–21 住", lat: 22.9971, lng: 120.2026, x: 88, y: 188 },
  { id: "taipei-back", name: "台北", note: "12/22–23 住", lat: 25.0478, lng: 121.517, x: 132, y: 48 },
  { id: "tpe-out", name: "桃园机场", note: "12/24 飞深圳", lat: 25.0777, lng: 121.2328, x: 108, y: 58 },
];

export type FoodItem = {
  name: string;
  where: string;
  note: string;
  mapsQuery: string;
  image?: string;
};

export type FoodGroup = {
  id: string;
  title: string;
  when: string;
  items: FoodItem[];
};

export const foodGroups: FoodGroup[] = [
  {
    id: "taipei-night",
    title: "台北夜市",
    when: "12/17 抵达当晚 · 12/18 宁夏或华西",
    items: [
      {
        name: "蚵仔煎",
        where: "饶河或宁夏",
        note: "冬天也有。蛋、蚵仔、粉浆，淋粉红酱。选轮转快的摊。",
        mapsQuery: "饶河夜市 蚵仔煎",
        image: "food/food-oyster-omelette.jpg",
      },
      {
        name: "胡椒饼",
        where: "饶河、华西一带",
        note: "炭烤、外脆内汁。一个当夜宵刚好，别当正餐唯一。",
        mapsQuery: "饶河夜市 胡椒饼",
      },
      {
        name: "卤肉饭",
        where: "夜市或午餐小店",
        note: "台北日常。肥瘦分开的比较香。早餐店也有。",
        mapsQuery: "台北 卤肉饭",
      },
      {
        name: "珍珠奶茶",
        where: "随处",
        note: "冬天改热的。少糖少冰，连喝两杯会腻。",
        mapsQuery: "台北 珍珠奶茶",
      },
    ],
  },
  {
    id: "tainan",
    title: "台南国华街",
    when: "12/20 晚饭 · 12/21 中午再一轮",
    items: [
      {
        name: "牛肉汤",
        where: "国华街一带",
        note: "这趟最该吃的。清汤、温体牛、沾沙茶。早或午比晚上正宗。晚上也有。",
        mapsQuery: "台南 国华街 牛肉汤",
        image: "food/food-beef-soup.jpg",
      },
      {
        name: "虾仁饭",
        where: "国华、保安路",
        note: "油饭底、虾仁、肉燥。一小碗，可以和牛肉汤连吃。",
        mapsQuery: "台南 虾仁饭",
      },
      {
        name: "碗粿",
        where: "台南街头",
        note: "米浆蒸的，浇肉燥和酱。早餐或下午都合适。",
        mapsQuery: "台南 碗粿",
        image: "food/food-wagui.jpg",
      },
      {
        name: "担仔面",
        where: "国华街、林百货附近",
        note: "虾汤、一撮面、肉燥。是点心不是大餐。",
        mapsQuery: "台南 担仔面",
      },
    ],
  },
  {
    id: "souvenir",
    title: "伴手礼",
    when: "12/22 永康、东门、诚品",
    items: [
      {
        name: "凤梨酥",
        where: "台北礼盒店",
        note: "带到南山最稳。买当场吃的热的也行。",
        mapsQuery: "台北 凤梨酥",
        image: "food/food-pineapple-cake.jpg",
      },
      {
        name: "牛轧糖",
        where: "礼盒店、机场",
        note: "不怕压。城里买够了就别在桃园补。",
        mapsQuery: "台北 牛轧糖",
      },
    ],
  },
];

export const tastes = foodGroups.flatMap((group) =>
  group.items
    .filter((item) => item.image)
    .map((item) => ({ src: item.image ?? "", label: item.name, place: item.where })),
);

export const foodSkip = [
  "芒果冰：12 月不是季节",
  "鼎泰丰：没必要为它排队",
  "太阳饼：别为了它去台中",
];

export const weather = [
  { place: "台北、九份", feel: "湿冷，大约 12–20°C，可能连阴雨", pack: "防水外套、可叠穿毛衣" },
  { place: "台南", feel: "干暖，白天可短袖", pack: "薄外套晚上用" },
];

export const lifeStay = [
  {
    title: "下单规则",
    detail:
      "入台证没下来前只订可免费取消。姓名和护照、机票、入台证一致。平台用 Agoda 或 Booking 都行，台湾 Agoda 往往更便宜；人在荷兰，Booking 出问题找客服方便。Trip.com、酒店官网也可以。别订不写护照、只能现场付现、或写着不接待大陆客人的民宿。正规旅馆给护照和入台证就能住。入台证和机票锁死后再改不可退，通常会再便宜一点。",
  },
  {
    title: "位置比星级重要",
    detail:
      "看捷运出口步行 5 分钟内，以及 24 小时柜台。第一天约 06:15 到桃园，多数房间 15:00 才给，没有夜班柜台会在门口干等。商务旅馆通常比设计酒店合适：能寄行李、隔音过得去就行。早餐可订可不订，出门吃更方便。",
  },
  {
    title: "台北住哪",
    detail:
      "12/17–19 和 12/22–23 尽量同一家，大箱子寄放，去台南只带登机箱。优先中山或台北车站，机场捷运下来少换线。西门吃的多但吵，不适合清晨补觉。大安、东区舒服，可是第一天多换一次车。12/24 赶中午飞机，最后一晚别订士林、北投那种远的。",
  },
  {
    title: "台南住哪",
    detail:
      "12/20–21 住中西区，国华街、海安路、赤崁步行圈。不要住高铁台南站，也不要住永康区（那是另一个行政区，不是台北永康街）。高铁站下车打车进城。",
  },
  {
    title: "房间不用纠结",
    detail:
      "冬天常常没有暖气，只有空调，被子够就行。无窗反而好睡。电压 110V、美规两脚，带一个欧转美接头。不要为了浴缸、景观点升级。",
  },
];

export const lifeClothes = [
  {
    title: "台北",
    detail:
      "12 月湿冷，体感比温度低。防水外套一件、毛衣或抓绒叠穿，不从荷兰寄大衣。鞋要防水。室内空调很冷，留一件薄长袖。九份山上更湿，外套别收进包底。",
  },
  {
    title: "台南",
    detail:
      "白天可以短袖，晚上加薄外套。两地温差靠叠穿解决，不必两套行李。",
  },
  {
    title: "少带",
    detail:
      "正装、厚羽绒服、不能干的帆布鞋都不必。常用药原包装随身。移动电源不托运。",
  },
];

export const lifeTransit = [
  {
    title: "悠游卡",
    detail:
      "桃园机场捷运站或 7-11、全家买。捷运、公交、部分 YouBike 都能刷。到了再买，荷兰不用提前。再备一点新台币现金，夜市和小摊用。",
  },
  {
    title: "机场捷运",
    detail:
      "CI74 清晨到桃园，坐机场捷运进台北车站，大约 40 分钟。12/24 去赶 CZ3088，10 点前从市区出发。",
  },
  {
    title: "高铁",
    detail:
      "只订两张：12/20 台北→台南，12/22 早班台南→台北。官网或 App，大约出发前 28 天放票。台南高铁站到国华街坐计程车。",
  },
  {
    title: "市内",
    detail:
      "不租车。台北靠捷运。台南靠走和计程车（Uber / Line Taxi）。九份当日往返，下午 4 点前回来。手机开 eSIM 或机场买卡，用 Google 地图。",
  },
];

export const outboundFlights: FlightOption[] = [
  {
    name: "华航 CI74",
    when: "周三约 11:00 AMS → 次日约 06:15 TPE · A350",
    detail: "12/16 直飞。冬春时刻大约 11:00 起飞、次日清晨到，买之前再对一次。",
  },
];

export const crossStraitFlights: FlightOption[] = [
  {
    name: "南航 CZ3088",
    when: "周四约 13:40 TPE → 15:50 SZX",
    detail: "12/24 中午走，下午到宝安，晚上在南山过平安夜。从台北出，预留 3 小时到桃园。",
  },
];

export const checklist: ChecklistGroup[] = [
  {
    id: "aug-sep",
    title: "8–9 月",
    items: [
      { id: "docs", label: "护照效期、荷兰居留效期对照入台证规则" },
      { id: "leave", label: "向公司确认 12/16 起去台湾，以及 12 月底起能否南山远程" },
      { id: "job-letter", label: "准备在职证明（全职、职位、入职日期）" },
      { id: "photo", label: "2 寸白底证件照（电子 + 一张纸质）" },
    ],
  },
  {
    id: "permit",
    title: "9/17 起 · 入台证",
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
      { id: "ams-tpe", label: "买 12/16 AMS–TPE，选可改期" },
      { id: "tpe-hotel-1", label: "订台北前 3 晚（12/17–19），可免费取消，捷运旁" },
      { id: "nye-hotel", label: "订台北后 2 晚（12/22–23），尽量同一家" },
    ],
  },
  {
    id: "nov",
    title: "11 月",
    items: [
      { id: "print-permit", label: "入台证下载打印，备份到手机" },
      { id: "other-hotels", label: "订台南 2 晚（12/20–21），国华街步行圈" },
      { id: "thsr", label: "高铁：台北→台南（12/20）、台南→台北（12/22 早班）" },
      { id: "tpe-szx", label: "买 12/24 南航 CZ3088 TPE–SZX" },
    ],
  },
  {
    id: "week",
    title: "出发前一周",
    items: [
      { id: "twd", label: "换一点新台币现金" },
      { id: "pack", label: "防水外套、可叠穿、防水鞋、欧转美接头；不寄大衣" },
      { id: "print", label: "打印入台证 + 护照复印，手机再存一份 PDF" },
      { id: "residence", label: "荷兰居留卡放随身，不要托运" },
      { id: "onward", label: "准备酒店地址、12/24 离台机票截图，入境台湾备用" },
    ],
  },
  {
    id: "on-trip",
    title: "在路上",
    items: [
      { id: "souvenir", label: "12/22 买伴手礼" },
      { id: "airport", label: "12/24 提前 3 小时到桃园" },
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
  { label: "窗口", value: "只开放未来三个月，约 9/17 可约 12/17 入境" },
  { label: "地点", value: "Van Stolkweg 23, Den Haag" },
  { label: "费用", value: "单次 €18 · 多次 €30，现金，必须本人" },
  { label: "居留", value: "单次证面談当天剩余 ≥ 6 个月；多次证 ≥ 1 年" },
  { label: "电话", value: "+31 70 250 3000 分机 114" },
];

export const borderNotes = [
  {
    title: "阿姆斯特丹出关",
    detail:
      "护照和荷兰居留卡一起给，居留别放托运。中国护照出申根会盖章或进 EES。值机后走非欧盟通道。液体 100ml，电脑单独过检。",
  },
  {
    title: "桃园入境",
    detail:
      "大陆护照没有免签，走一般外国人/入台证，不要跟免签队伍。柜台给护照、入台证打印件、荷兰居留；手机备 PDF。准备酒店地址和 12/24 离台机票。单次证从核发日起 3 个月内入境，这趟 12/17 进、12/24 出。",
  },
  {
    title: "桃园出境去深圳",
    detail:
      "两岸航班按国际手续，核对航站楼，提前 3 小时。单次入台证出关即用完，不能再进台湾。中国护照回国，不是台胞证。12/24 平安夜人会多。",
  },
  {
    title: "深圳入境",
    detail:
      "走中国公民通道，护照即可。伴手礼里的凤梨酥、茶叶一般没问题；鲜果、肉、种子不要带。新台币在大陆不好用，出台湾前花掉或换一点人民币。",
  },
  {
    title: "现金申报",
    detail:
      "入台湾：外币等值超过 1 万美元，或新台币超过 10 万，要申报。回大陆：人民币超过 2 万，或外币等值超过 5 千美元，要申报。这趟观光额度通常碰不到。",
  },
];

export const packOk = [
  "换洗衣物、常用药（原包装）、充电器、电脑、相机",
  "移动电源随身带，看得到 Wh 标；不能托运",
  "从荷兰带的密封零食、巧克力，入台量别太大",
  "从台湾带回的凤梨酥、牛轧糖、茶叶、真空包装零食",
  "额度内的免税酒烟：入台烈酒大约 1 升；回大陆酒大约 1.5 升、烟 400 支",
  "少量新台币现金、银行卡",
];

export const packNo = [
  "鲜果、鲜奶、鲜肉、火腿、香肠、带肉馅点心、种子、盆栽、泥土",
  "超过 100ml 的液体过阿姆斯特丹安检（免税酒安检后再买）",
  "仿真枪、喷雾、刀具、未申报的超额现金",
  "活体动植物",
  "新台币大额带回大陆（不好用，出台湾前花掉）",
];

export const bookings = [
  {
    id: "permit",
    name: "入台证",
    href: "https://www.roc-taiwan.org/nl/post/24535.html",
    note: "海牙代表处 · 9/17 起约",
  },
  {
    id: "ci",
    name: "华航",
    href: "https://www.china-airlines.com",
    note: "12/16 CI74 AMS–TPE",
  },
  {
    id: "cz",
    name: "南航",
    href: "https://www.csair.com",
    note: "12/24 CZ3088 TPE–SZX",
  },
  {
    id: "thsr",
    name: "台湾高铁",
    href: "https://www.thsrc.com.tw",
    note: "12/20 去、12/22 回",
  },
  {
    id: "agoda",
    name: "Agoda",
    href: "https://www.agoda.com",
    note: "订房，台湾常更便宜",
  },
  {
    id: "booking",
    name: "Booking",
    href: "https://www.booking.com",
    note: "订房，荷兰客服方便",
  },
];

export const budget = [
  { item: "去程 AMS–TPE", range: "€550–1,000" },
  { item: "两岸 TPE–SZX", range: "€80–200" },
  { item: "台湾酒店 7 晚", range: "€450–800" },
  { item: "台湾吃喝交通", range: "€300–500" },
  { item: "入台证", range: "€18" },
];
