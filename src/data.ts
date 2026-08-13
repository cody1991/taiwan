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
  beats: string[];
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
  { date: "2026-09-17", label: "入台证窗口：9/16 荷兰 18:00 开始刷" },
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
  taiwanDays: 8,
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
    stay: "中山 / 台北车站",
    body: "时差 +7，第一天只办三件事：进城、睡觉、吃一顿。不要排景点。",
    beats: [
      "CI74 约 06:15 到桃园。入境拿护照、入台证、荷兰居留。出关后跟机场捷运，别去高铁。华航多半第二航厦，以指示为准。",
      "捷运站买悠游卡并加值。直达车比较快，普通车也到台北车站 A1，大约 35–50 分钟。",
      "酒店多半 15:00 才入住。先寄行李；酒店不收就用北车寄物柜。找早餐店吃豆浆蛋饼，或便利店，回房间睡到下午。",
      "醒来换一点现金。下午只在住处附近走：中山或北车商圈即可。",
      "晚上优先宁夏。饶河、华西都要再坐车，第一天不去。",
    ],
    tips: ["第一天不排故宫、不去九份", "第一晚只去宁夏"],
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
    title: "故宫 + 大稻埕",
    stay: "台北",
    body: "故宫周五开馆。时差还在就晚一点出门，中午前到也来得及。",
    beats: [
      "散客不用预约。现场买普通参观券，外籍约 NT$350（国人凭身分证才 150，你的护照走外籍票）。09:00–17:00，16:30 停售。周一休馆，今天周五能进。",
      "捷运淡水线到士林，出站转红 30 或计程车到故宫正馆。别走去剑潭爬山。",
      "正馆看半天就够，翠玉白菜那排人多，不想排就看建筑和书画。中午馆内或士林吃卤肉饭。",
      "下午捷运到大桥头或北门：迪化街、大稻埕、霞海城隍庙。想看庙再加龙山寺（龙山寺站），晚上顺路华西夜市。",
      "故宫出来若还在士林，剑潭站旁士林夜市顺路，比折回宁夏近。摊位看队伍，不要走完全场。",
    ],
    tips: ["故宫别排周一", "散客现场买票，不用预约"],
    mapsQuery: "国立故宫博物院",
  },
  {
    date: "2026-12-19",
    weekday: "六",
    city: "台北",
    title: "九份或北投",
    stay: "台北",
    body: "看早上窗外。晴去九份，雨去北投。不要临时改阳明山。晚上收去台南的包。",
    beats: [
      "晴：尽量上午从忠孝复兴坐 1062，刷悠游卡，大约 1 小时到九份老街。周六人多。",
      "九份走主街、看海、吃芋圆或鱼丸。不要加金瓜石、十分，来不及。15:30–16:00 在老街口等回程 1062。",
      "雨：淡水信义线到北投，换新北投。公共浴是裸汤，有纹身先问；要泳衣选汤屋。不想泡汤就坐到淡水老街。不要排阳明山。",
      "回台北吃一顿热的。把大箱子收好，明天只带登机箱上高铁。",
    ],
    tips: ["看天气二选一", "16:00 前离开九份", "不加金瓜石"],
    mapsQuery: "九份老街",
  },
  {
    date: "2026-12-20",
    weekday: "日",
    city: "台南",
    title: "高铁去台南",
    stay: "台南 2 晚 · 国华街圈",
    body: "早班南下。下午安平，晚饭把国华街吃一轮。高雄不顺路，不要加。",
    beats: [
      "早班高铁：台北车站跟机场捷运不是同一个大厅，跟「高铁」指标走。开车前预留 40 分钟进站。对号入座，约 1 小时 40 分。",
      "下车是高铁台南站，不是台南火车站。出站坐计程车到中西区酒店，约 15–20 分钟。",
      "放行李后去安平：古堡、老街、树屋走一圈，下午够用。顺路买虾卷。别排夕阳行程。",
      "晚上国华街先吃虾仁饭、碗粿、担仔面。牛肉汤留明天早上。周日花园夜市有开，吃不完打车去，别两边都走完。",
    ],
    tips: ["晚饭给国华街", "高铁站不是市区火车站"],
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
    body: "孔庙到神农街可以走着串。故宫这天休馆，人在台南正好。不要去垦丁。",
    beats: [
      "早上先喝牛肉汤，再走孔庙、赤崁楼。林百货周一可能休，路过开门再进，别当任务。",
      "下午神农街、海安路，找一家咖啡馆坐着。想看河岸走到运河边即可。",
      "晚上还在国华街附近解决。早点睡，明天早班回台北。",
    ],
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
    body: "早班北上。下午买伴手礼。有脚再去 101 或饶河。",
    beats: [
      "早班高铁回台北。大箱子如果寄在第一家酒店，今天取回。",
      "下午永康街、东门市场、附近礼盒店：凤梨酥、牛轧糖买好。城里买够，别留到桃园。",
      "想看 101：捷运市政府站，外立面免费。观景台现场买，队长就看外面。同一站有信义诚品、康是美。",
      "晚上可补饶河（松山站）。西门、药妆留到没逛完再去。",
    ],
    tips: ["伴手礼今天买", "101 外立面就够"],
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
    body: "空白日。补觉、补没走进去的巷子。101、西门、饶河没去成今天补。不要排新远郊。",
    beats: [
      "晚起。没去成的龙山寺、西门、中正纪念堂、国父纪念堂（看换岗就走）。YouBike 沿河骑一段也行，别骑去九份。",
      "检查护照、入台证、CZ3088 登机牌、充电宝在随身包。",
      "晚上早睡。明天 9:30 前从市区出发。",
    ],
    tips: ["只闲逛，不赶路"],
    mapsQuery: "台北车站",
  },
  {
    date: "2026-12-24",
    weekday: "四",
    city: "深圳",
    title: "飞深圳南山",
    stay: "南山 · 后海 / 科技园 / 深圳湾",
    body: "南航 CZ3088 约 13:40 起飞。下午到宝安，晚上在南山过平安夜。",
    beats: [
      "酒店退房，机场捷运回桃园。南航常在第一航厦、华航常在第二航厦，以登机牌为准。9:30 前离开市区。",
      "两岸按国际手续。多次证出关还在，以后从荷兰可以再进台湾。鲜果肉类不要带。",
      "约 15:50 到深圳宝安，走中国公民通道。地铁 11 号或计程车回南山。开微信乘车码，地图换高德。",
    ],
    tips: ["9:30 前离开市区", "核对航站楼"],
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
    when: "12/17 宁夏 · 12/18 士林或华西 · 12/22 可补饶河",
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
      {
        name: "盐酥鸡",
        where: "各夜市",
        note: "裹粉炸鸡块，撒胡椒。看炸锅翻得勤的摊。",
        mapsQuery: "夜市 盐酥鸡",
      },
      {
        name: "大肠包小肠",
        where: "宁夏、士林、饶河",
        note: "香肠加烤肠，抹蒜酱。一个当点心。",
        mapsQuery: "夜市 大肠包小肠",
      },
      {
        name: "甜不辣",
        where: "夜市路边摊",
        note: "鱼浆炸的，浇酱。冬天热食。",
        mapsQuery: "夜市 甜不辣",
      },
    ],
  },
  {
    id: "breakfast",
    title: "早餐",
    when: "每天出门前 · 第一天落地也吃",
    items: [
      {
        name: "豆浆、蛋饼、油条",
        where: "巷口早餐店、永和豆浆",
        note: "台北台南都有。第一天便利店也能凑。",
        mapsQuery: "台北 早餐 蛋饼",
      },
    ],
  },
  {
    id: "jiufen-food",
    title: "九份",
    when: "12/19 晴天老街",
    items: [
      {
        name: "芋圆",
        where: "九份老街",
        note: "热的。吃一碗就走，别为茶馆耗下午。",
        mapsQuery: "九份 芋圆",
      },
      {
        name: "鱼丸汤",
        where: "九份老街",
        note: "湿冷天合适。别点一桌。",
        mapsQuery: "九份 鱼丸",
      },
    ],
  },
  {
    id: "tainan",
    title: "台南国华街",
    when: "12/20 晚饭 · 12/21 早上牛肉汤",
    items: [
      {
        name: "牛肉汤",
        where: "国华街一带",
        note: "清汤、温体牛、沾沙茶。正宗在早上，12/21 早上去。12/20 晚上先吃别的。",
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
      {
        name: "虾卷",
        where: "安平、国华街",
        note: "12/20 安平顺路。现场炸的再买。",
        mapsQuery: "台南 虾卷",
      },
      {
        name: "鳝鱼意面",
        where: "国华、保安路一带",
        note: "12/21 中午可加。不是每天每家都有。",
        mapsQuery: "台南 鳝鱼意面",
      },
      {
        name: "花园夜市",
        where: "台南北区",
        note: "周四、六、日晚上。12/20 周日有。国华吃不完再打车，别两边都走完。",
        mapsQuery: "台南 花园夜市",
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
      {
        name: "茶叶、蛋黄酥",
        where: "礼盒店",
        note: "真空包装能进大陆。鲜蛋黄酥趁早吃，别当唯一伴手礼。",
        mapsQuery: "台北 蛋黄酥",
      },
    ],
  },
  {
    id: "drugstore",
    title: "药妆",
    when: "12/22 信义或西门 · 12/23 也行",
    items: [
      {
        name: "面膜、眼药水",
        where: "康是美、屈臣氏",
        note: "南山也有。想买就顺路，不要一堆液体过安检。",
        mapsQuery: "台北 康是美",
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
  "士林夜市很大，挑摊，不要当任务走完",
];

export const visitReserve = [
  { name: "故宫北院", need: "不用约", note: "散客现场买票。外籍约 NT$350。周五开，周一休。团体导览才要预约。" },
  { name: "龙山寺、大稻埕、九份老街", need: "不用约", note: "走路进去。九份只要赶上 1062 回程。" },
  { name: "台北 101", need: "不用约", note: "外立面免费。观景台现场买，人多就看外面。12/22 或 12/23 顺路。" },
  { name: "中正纪念堂、国父纪念堂", need: "不用约", note: "走路或捷运。换岗看一场就走。12/23 空白日。" },
  { name: "花园夜市", need: "不用约", note: "周四六日晚上。12/20 周日有。打车去。" },
  { name: "北投", need: "不用约", note: "公共浴或汤屋现场排队即可。" },
  { name: "安平古堡、赤崁楼、孔庙、林百货", need: "不用约", note: "古蹟现场买几十块门票或免费。林百货当百货逛。" },
  { name: "高铁", need: "要订", note: "这是交通不是景点。护照号订对号座。11 月订 12/20、12/22。" },
];

export const weather = [
  { place: "台北、九份", feel: "湿冷，大约 12–20°C，可能连阴雨", pack: "防水外套、可叠穿毛衣" },
  { place: "台南", feel: "干暖，白天可短袖", pack: "薄外套晚上用" },
];

export const lifeStay = [
  {
    title: "下单规则",
    detail:
      "入台证没下来前只订可免费取消。姓名拼音必须和护照、机票、入台证同一套，不要中英文混用。平台用 Agoda 或 Booking 都行，台湾 Agoda 往往更便宜；人在荷兰，Booking 出问题找客服方便。Trip.com、酒店官网也可以。别订不写护照、只能现场付现、或写着不接待大陆客人的民宿。正规旅馆给护照和入台证就能住。入台证和机票锁死后再改不可退，通常会再便宜一点。",
  },
  {
    title: "位置比星级重要",
    detail:
      "看捷运出口步行 5 分钟内，以及 24 小时柜台。第一天约 06:15 到桃园，多数房间 15:00 才给，没有夜班柜台会在门口干等。商务旅馆通常比设计酒店合适：能寄行李、隔音过得去就行。很多有投币洗衣，待一周够用。早餐可订可不订，出门吃更方便。酒店不收行李就用台北车站寄物柜。",
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
      "冬天常常没有暖气，只有空调，被子够就行。无窗反而好睡。电压 110V、美规两脚，带一个欧转美接头。不要为了浴缸、景观点升级。台湾偶尔地震，进房看一眼逃生图就行。",
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
      "正装、厚羽绒服、不能干的帆布鞋都不必。雨伞便利店买。过夜航班带眼罩耳塞。常用药原包装随身。移动电源不托运。",
  },
];

export const lifeTransit = [
  {
    title: "悠游卡",
    detail:
      "桃园机场捷运站或 7-11、全家买。捷运、公交、部分 YouBike 都能刷。到了再买，荷兰不用提前。多次证出岛可以不退，下次从荷兰再去还能用。",
  },
  {
    title: "钱",
    detail:
      "落地换或从荷兰带 2000–4000 新台币，够第一天。荷兰换台币汇率差，其余落地取。优先 7-11 ATM。Visa / Mastercard 比 Maestro 稳。取款选台币，拒绝动态货币转换。1000 元大钞小摊常不收，便利店先拆开。出发前跟银行报台湾和大陆。店里刷卡。微信、支付宝不要当主力，夜市现金。不用给小费。",
  },
  {
    title: "电话",
    detail:
      "荷兰漫游很贵。手机解锁后出发前办台湾 eSIM；落地桃园也能买实体卡当备胎。双卡就留国内号，到深圳再开。台湾用 Google 地图，菜单用 Google 翻译拍照。离线下载繁中。到深圳 Google 不好用，改高德，开微信乘车码。",
  },
  {
    title: "机场捷运",
    detail:
      "CI74 清晨到桃园，坐机场捷运进台北车站 A1。直达车比较快，普通车也到。大约 35–50 分钟。12/24 赶 CZ3088：南航常停第一航厦（A12），华航常停第二航厦（A13），以登机牌为准。9:30 前离开市区。",
  },
  {
    title: "高铁",
    detail:
      "只订两张对号座：12/20 台北→台南，12/22 早班台南→台北。官网或 T Express，用护照号。大约出发前 28 天、台湾时间 0 点放票（荷兰大约前一天下午）。早鸟会便宜一点，能抢就抢。车站售票机、窗口或 7-11 ibon 用护照/订票代号取。台北车站高铁和机场捷运不在同一大厅。开车前预留 40 分钟。周日早班人多，不要赌自由座。台南高铁站到国华街坐计程车。",
  },
  {
    title: "九份",
    detail:
      "12/19 晴天：尽量上午从忠孝复兴坐 1062，大约 1 小时，悠游卡能刷。16:00 前坐回程。不要加金瓜石、十分。雨改北投或淡水老街。公共浴是裸汤，有纹身先问；要泳衣选汤屋。",
  },
  {
    title: "市内",
    detail:
      "不租车。台北靠捷运，末班大约午夜。台南靠走和计程车（Uber / Line Taxi）。街上几乎没垃圾桶，包装捏在包里，便利店再丢。报警 110，救护 119。",
  },
  {
    title: "LINE",
    detail:
      "出发前用现有手机号装 LINE。台南叫车用 Line Taxi 或 Uber。部分店可以用 LINE Pay，没有就刷卡或现金。酒店客服常只回 LINE，不要只用微信。",
  },
  {
    title: "YouBike",
    detail:
      "悠游卡能借。河滨、市区短骑。头盔不强制。不要骑去九份或安平当交通。",
  },
  {
    title: "便利店",
    detail:
      "7-11、全家冬天有关东煮。厕所、ATM、充电都在这儿。ibon 能取高铁票。雨伞落地买。",
  },
];

export const flightNotes = [
  {
    title: "史基浦",
    detail:
      "CI74 大约 11:00 飞，国际航班提前 3 小时到，8 点前出现在航站。柜台看当天屏幕，不要凭记忆跑错楼。过夜航班：登机吃饭，然后睡。带眼罩耳塞。第一天台北只补觉。出发前一天华航 App 值机。延误就等航司安排，不要自己改去第三地。",
  },
  {
    title: "行李",
    detail:
      "华航经济舱通常托运 1 件 23kg，随身大约 7kg，以出票邮件为准。移动电源只能随身。买南航 CZ3088 时勾托运行李，促销票常常不含。",
  },
  {
    title: "航站楼",
    detail:
      "华航多半桃园第二航厦，南航多半第一航厦，以登机牌为准。两航厦机场捷运都停，别下错站。",
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
    detail: "12/24 中午走，下午到宝安，晚上在南山过平安夜。平安夜两岸票会紧，证有进度就订可退的。从台北出，9:30 前离开市区。",
  },
];

export const checklist: ChecklistGroup[] = [
  {
    id: "aug-sep",
    title: "8–9 月",
    items: [
      { id: "docs", label: "护照效期 > 6 个月。居留够长，多次已定" },
      { id: "leave", label: "向公司确认 12/16 起去台湾，以及 12 月底起能否南山远程" },
      { id: "job-letter", label: "在职证明：全职、职位、入职日期；不要写调去深圳" },
      { id: "photo", label: "2 寸白底证件照（电子 + 一张纸质）" },
      { id: "insurance", label: "旅行险覆盖台湾和大陆；很多荷兰保单默认不含中国" },
    ],
  },
  {
    id: "permit",
    title: "9/16 起 · 入台证",
    items: [
      { id: "book-slot", label: "9/16 荷兰 18:00 对准台湾 9/17 0 点刷新，约海牙。荷兰公假馆不开" },
      { id: "ns", label: "约上后订 NS：AMS 中央站城际到 Den Haag Centraal，再电车 World Forum / Madurodam。8 点前离开阿姆斯特丹" },
      { id: "upload", label: "线上上传材料；姓名拼音跟护照同一套" },
      { id: "interview", label: "面談：护照、居留、预约单、照片、在职证明、刚好 €30 现金" },
    ],
  },
  {
    id: "oct",
    title: "10 月",
    items: [
      { id: "ams-tpe", label: "买 12/16 AMS–TPE，选可改期" },
      { id: "tpe-szx", label: "证有进度就订可退的 CZ3088，勾托运行李；平安夜会紧" },
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
      { id: "thsr", label: "高铁对号座：护照号订 12/20、12/22 早班，车站用护照取" },
    ],
  },
  {
    id: "week",
    title: "出发前一周",
    items: [
      { id: "twd", label: "换 2000–4000 新台币，够第一天" },
      { id: "esim", label: "办台湾 eSIM；双卡留国内号，到深圳再开" },
      { id: "line", label: "出发前装 LINE，台南叫车、酒店客服用" },
      { id: "pack", label: "防水外套、可叠穿、防水鞋、欧转美接头、眼罩耳塞；不寄大衣" },
      { id: "print", label: "打印入台证 + 护照复印，手机再存一份 PDF" },
      { id: "residence", label: "荷兰居留卡放随身，不要托运" },
      { id: "onward", label: "准备酒店地址、12/24 离台机票截图，入境台湾备用" },
      { id: "npm", label: "出发前一天华航 App 值机" },
      { id: "ams-day", label: "12/16 八点前到史基浦" },
    ],
  },
  {
    id: "on-trip",
    title: "在路上",
    items: [
      { id: "souvenir", label: "12/22 买伴手礼；有脚去 101 外立面或饶河" },
      { id: "airport", label: "12/24 核对航站楼，9:30 前离开市区" },
    ],
  },
];

export const permitSteps = [
  "线上填表，上传护照、居留、证件照、在职证明（全职、职位、入职日期；不要写调去深圳）",
  "约海牙面談日期",
  "打印预约确认单，上午 09:30–12:00 当面缴费核验，带刚好 €30",
  "审核约 4 周，补件会更久",
      "核准后自行下载打印，黑白也可以，入境台湾出示",
];

export const permitHague = [
  {
    title: "怎么去",
    detail:
      "阿姆斯特丹中央站城际到 Den Haag Centraal，约 50 分钟。再坐电车到 World Forum 或 Madurodam，步行几分钟到 Van Stolkweg 23。电车可刷银行卡，车次用 9292。别开车、别踩点。09:30 开门，建议 8 点前离开阿姆斯特丹。荷兰公假馆不开。约上立刻用 NS App 订来回。",
  },
  {
    title: "带什么",
    detail:
      "护照、居留正本、预约单打印件、证件照、在职证明正本、刚好 €30 现金。现场不收补交。",
  },
  {
    title: "面談说什么",
    detail:
      "荷兰工作，台湾玩一周，12/24 去深圳过年，之后回荷兰上班。多次证是以后从荷兰再去台湾。不要说去了就不回荷兰。",
  },
];

export const permitFacts = [
  { label: "窗口", value: "只开放未来三个月。荷兰 9/16 18:00 对准台湾 9/17 0 点刷新" },
  { label: "地点", value: "Van Stolkweg 23, Den Haag" },
  { label: "费用", value: "多次 €30，现金，尽量刚好，必须本人" },
  { label: "居留", value: "够长，多次硬门槛过了" },
  { label: "这趟", value: "差 €12，办一年多次。12 月用一次，以后从荷兰还能再去" },
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
      "大陆护照没有免签，走一般外国人/入台证，不要跟免签队伍。柜台给护照、入台证打印件、荷兰居留；手机备 PDF。准备酒店地址和 12/24 离台机票。多次证一年有效，这趟 12/17 进、12/24 出。",
  },
  {
    title: "桃园出境去深圳",
    detail:
      "两岸航班按国际手续，核对航站楼，提前 3 小时。多次证出关还在，不能从深圳直接再飞桃园。中国护照回国，不是台胞证。12/24 平安夜人会多。",
  },
  {
    title: "深圳入境",
    detail:
      "走中国公民通道，护照即可，不是台胞证。从台湾回来，人工台可能问几句：去台湾干什么、在哪工作、这次回南山待多久。如实说就行：荷兰工作，台湾玩一周，回家过年。有自助通道也可以走。海关主要看行李，凤梨酥茶叶没问题，鲜果肉类不要带。",
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
    id: "ns-train",
    name: "NS",
    href: "https://www.ns.nl",
    note: "海牙面談来回",
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
  {
    id: "tpe101",
    name: "台北 101",
    href: "https://www.taipei-101.com.tw",
    note: "观景台，人多看外立面",
  },
];

export const budget = [
  { item: "去程 AMS–TPE", range: "€550–1,000" },
  { item: "两岸 TPE–SZX", range: "€80–200" },
  { item: "台湾酒店 7 晚", range: "€450–800" },
  { item: "高铁两张", range: "€70–90" },
  { item: "捷运公交夜市现金", range: "€80–150" },
  { item: "正餐和咖啡", range: "€150–250" },
  { item: "入台证", range: "€30" },
];
