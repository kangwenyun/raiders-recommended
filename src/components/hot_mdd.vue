<template>
  <div class="hot_mdd">
    <div class="r-title"><h2>热门目的地</h2></div>
    <div class="r-navbar">
        <span class="divide">|</span>
        <span v-for="item in places" :key="item.id">
            <a href="javascript:void(0)" @mouseover="set_hot_place(item.id)" :class="hot_place == item.id ? 'on':''">{{ item.place }}</a>
            <span class="divide">|</span>
        </span>
    </div>
    <div class="col">
        <dl v-for="items in hot_places" :key="items.id" :class="items.id % 2 == 1 ? 'right' : 'left' " v-show="hot_place == items.father_id">
            <dt :class="items.dt_url1 == no_link ? 'no_underline' : ''">
                <a :href="items.dt_url1" target="_blank" >{{ items.dt_name1 }}</a>
                <a :href="items.dt_url2" target="_blank">{{ items.dt_name2 }}</a>
            </dt>
            <dd v-for="item in items.dd_name_url" :key="item.id">
                <a :href="item.url" :key="item.id" target="_blank">{{ item.name }}</a>
            </dd>
        </dl>
    </div>
   </div>
</template>

<script>
export default {
  name: 'hot_mdd',
  data() {
    return {
        hot_place: 1,
        no_link: "javascript:void(0)",
        places:[
            {id: 1, place: "国内"},
            {id: 2, place: "港澳台"},
            {id: 3, place: "日本"},
            {id: 4, place: "东南亚"},
            {id: 5, place: "南亚 西亚"},
            {id: 6, place: "欧洲 美洲"},
            {id: 7, place: "澳洲 非洲"},
        ],
        hot_places:[
        {
            father_id: 1,
            id: 11,
            dt_name1: "西藏",
            dt_url1: "/xizang",
            dt_name2: "贵州",
            dt_url2: "/guizhou",
            dd_name_url: [
                {id:111, name: "拉萨", url: "/lasa"},
                {id:112, name: "林芝", url: "/linzhi"},
                {id:113, name: "阿里", url: "/ali"},
                {id:114, name: "黔东南", url: "/qiandongnan"},
                {id:115, name: "荔波", url: "/libo"},
                {id:116, name: "镇远", url: "/zhenyuan"},
                {id:117, name: "西江", url: "/xijiang"},
                {id:118, name: "黄果树", url: "/huangguoshu"}
            ]
        },
        {
            father_id: 1,
            id: 12,
            dt_name1: "直辖市",
            dt_url1: "javascript:void(0)",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:121, name: "北京", url: "/beijing"},
                {id:122, name: "上海", url: "/shanghai"},
                {id:123, name: "重庆", url: "/chongqing"},
                {id:124, name: "天津", url: "/tianjin"}
            ]
        },
        {
            father_id: 1,
            id: 13,
            dt_name1: "西北",
            dt_url1: "/xibei",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:131, name: "西安", url: "/xian"},
                {id:132, name: "青岛湖", url: "/qingdaohu"},
                {id:133, name: "西宁", url: "/xining"},
                {id:134, name: "祁连", url: "/qilian"},
                {id:135, name: "敦煌", url: "/dunhuang"},
                {id:136, name: "兰州", url: "/lanzhou"},
                {id:137, name: "甘南", url: "/gannan"},
                {id:138, name: "张掖", url: "/zhangye"},
                {id:139, name: "嘉峪关", url: "/jianyuguan"},
                {id:1310, name: "新疆", url: "/xinjiang"},
            ]
        },
        {
            father_id: 1,
            id: 14,
            dt_name1: "云南",
            dt_url1: "/yunnan",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:141, name: "丽江", url: "/lijiang"},
                {id:142, name: "大理", url: "/dali"},
                {id:143, name: "昆明", url: "/kunming"},
                {id:144, name: "香格里拉", url: "/xianggelila"},
                {id:145, name: "泸沽湖", url: "/luguhu"},
                {id:146, name: "双廊", url: "/shuanglang"},
                {id:147, name: "西双版纳", url: "/xishuangbanna"},
                {id:148, name: "束河", url: "/shuhe"},
                {id:149, name: "腾冲", url: "/tengchong"},
                {id:1410, name: "雨崩", url: "/yubeng"},
            ]
        },
        {
            father_id: 1,
            id: 15,
            dt_name1: "山东",
            dt_url1: "/shandong",
            dt_name2: "山西",
            dt_url2: "/shanxi",
            dd_name_url: [
                {id:151, name: "青岛", url: "/qingdao"},
                {id:152, name: "泰山", url: "/taishan"},
                {id:153, name: "日照", url: "/rizhao"},
                {id:154, name: "威海", url: "/weihai"},
                {id:155, name: "烟台", url: "/yantai"},
                {id:156, name: "长岛", url: "/changdao"},
                {id:157, name: "蓬莱", url: "/penglai"},
                {id:158, name: "平遥", url: "/pingyao"},
                {id:159, name: "大同", url: "/datong"},
                {id:1510, name: "五台山", url: "/wutaishan"},
                {id:1511, name: "壶口瀑布", url: "/hukoupubu"},
            ]
        },
        {
            father_id: 1,
            id: 16,
            dt_name1: "四川",
            dt_url1: "/sichuan",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:161, name: "成都", url: "/chengdu"},
                {id:162, name: "九寨沟", url: "/jiuzhaigou"},
                {id:163, name: "稻城", url: "/daocheng"},
                {id:164, name: "色达", url: "/seda"},
                {id:165, name: "若尔盖", url: "/ruoergai"},
                {id:166, name: "都江堰", url: "/dujiangyan"},
                {id:167, name: "亚丁", url: "/yading"},
                {id:168, name: "阿坝", url: "/aba"},
                {id:169, name: "峨眉山", url: "/emeishan"},
                {id:1610, name: "牛背山", url: "/niubeishan"},
            ]
        },
        {
            father_id: 1,
            id: 17,
            dt_name1: "湖南",
            dt_url1: "/hunan",
            dt_name2: "湖北",
            dt_url2: "/hubei",
            dd_name_url: [
                {id:171, name: "张家界", url: "/zhangjiajie"},
                {id:172, name: "凤凰", url: "/fenghuang"},
                {id:173, name: "郴州", url: "/chenzhou"},
                {id:174, name: "武汉", url: "/wuhan"},
                {id:175, name: "恩施", url: "/enshi"},
                {id:176, name: "神农架", url: "/shennongjia"}
            ]
        },
        {
            father_id: 1,
            id: 18,
            dt_name1: "浙江",
            dt_url1: "/zhejiang",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:181, name: "杭州", url: "/hangzhou"},
                {id:182, name: "乌镇", url: "/wuzhen"},
                {id:183, name: "西塘", url: "/xitang"},
                {id:184, name: "千岛湖", url: "/qiandaohu"},
                {id:185, name: "普陀山", url: "/putuoshan"},
                {id:186, name: "东极岛", url: "/dongjidao"},
                {id:187, name: "南浔", url: "/nanxun"}
            ]
        },
        {
            father_id: 1,
            id: 19,
            dt_name1: "安徽",
            dt_url1: "/anhui",
            dt_name2: "江西",
            dt_url2: "/jiangxi",
            dd_name_url: [
                {id:191, name: "黄山", url: "/huangshan"},
                {id:192, name: "宏村", url: "/hongcun"},
                {id:193, name: "婺源", url: "/wuyuan"},
                {id:194, name: "景德镇", url: "/jingdezhen"},
                {id:195, name: "庐山", url: "/lushan"},
                {id:196, name: "三清山", url: "/sanqingshan"},
                {id:197, name: "南昌", url: "/nanchang"}
            ]
        },
        {
            father_id: 1,
            id: 110,
            dt_name1: "海南",
            dt_url1: "/hainan",
            dt_name2: "福建",
            dt_url2: "/fujian",
            dd_name_url: [
                {id:1101, name: "三亚", url: "/sanya"},
                {id:1102, name: "蜈支洲岛", url: "/wuzhizhoudao"},
                {id:1103, name: "海口", url: "/haikou"},
                {id:1104, name: "厦门", url: "/xiamen"},
                {id:1105, name: "鼓浪屿", url: "/gulangyu"},
                {id:1106, name: "武夷山", url: "/wuyishan"},
                {id:1107, name: "泉州", url: "/quanzhou"}
            ]
        },
        {
            father_id: 1,
            id: 111,
            dt_name1: "河北",
            dt_url1: "/hebei",
            dt_name2: "河南",
            dt_url2: "/henan",
            dd_name_url: [
                {id:1111, name: "北戴河", url: "/beidaihe"},
                {id:1112, name: "秦皇岛", url: "/qinhuangdao"},
                {id:1113, name: "承德", url: "/chengde"},
                {id:1114, name: "张北", url: "/zhangbei"},
                {id:1115, name: "少林寺", url: "/shaolinsi"},
                {id:1116, name: "洛阳", url: "/luoyang"},
                {id:1117, name: "龙门石窟", url: "/longmenshiku"}
            ]
        },
        {
            father_id: 1,
            id: 112,
            dt_name1: "江苏",
            dt_url1: "/jiangsu",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:1121, name: "南京", url: "/nanjing"},
                {id:1122, name: "苏州", url: "/suzhou"},
                {id:1123, name: "无锡", url: "/wuxi"},
                {id:1124, name: "扬州", url: "/yangzhou"},
                {id:1125, name: "周庄", url: "/zhouzhuang"},
                {id:1126, name: "常州", url: "/changzhou"},
                {id:1127, name: "连云港", url: "/lianyungang"},
                {id:1128, name: "同里", url: "/tongli"}
            ]
        },
        {
            father_id: 1,
            id: 113,
            dt_name1: "内蒙古",
            dt_url1: "/neimenggu",
            dt_name2: "东北",
            dt_url2: "/dongbei",
            dd_name_url: [
                {id:1131, name: "呼伦贝尔", url: "/hulunbeier"},
                {id:1132, name: "阿尔山", url: "/aershan"},
                {id:1133, name: "海拉尔", url: "/hailaer"},
                {id:1134, name: "哈尔滨", url: "/haerbin"},
                {id:1135, name: "漠河", url: "/mohe"},
                {id:1136, name: "雪乡", url: "/xuexiang"},
                {id:1137, name: "大连", url: "/dalian"},
                {id:1138, name: "丹东", url: "/dandong"},
                {id:1139, name: "盘锦", url: "/panjin"}
            ]
        },
        {
            father_id: 1,
            id: 114,
            dt_name1: "广东",
            dt_url1: "/guangdong",
            dt_name2: "广西",
            dt_url2: "/guangxi",
            dd_name_url: [
                {id:1141, name: "广州", url: "/guangzhou"},
                {id:1142, name: "深圳", url: "/shenzhen"},
                {id:1143, name: "珠海", url: "/zhuhai"},
                {id:1144, name: "汕头", url: "/shantou"},
                {id:1145, name: "桂林", url: "/guilin"},
                {id:1146, name: "阳朔", url: "/yangshuo"},
                {id:1147, name: "北海", url: "/beihai"},
                {id:1148, name: "黄姚古镇", url: "/huangyaoguzhen"},
                {id:1149, name: "涠洲岛", url: "/weizhoudao"},
                {id:11410, name: "龙脊梯田", url: "/longjititian"}
            ]
        },
        {
            father_id: 2,
            id: 21,
            dt_name1: "香港",
            dt_url1: "/xianggang",
            dt_name2: "澳门",
            dt_url2: "/aomen",
            dd_name_url: [
            ]
        },
        {
            father_id: 2,
            id: 22,
            dt_name1: "台湾",
            dt_url1: "/taiwan",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:221, name: "台北", url: "/taibei"},
                {id:222, name: "垦丁", url: "/kending"},
                {id:223, name: "花莲", url: "/hualian"},
                {id:224, name: "高雄", url: "/gaoxiong"},
                {id:225, name: "台中", url: "/taizhong"},
                {id:226, name: "九份", url: "/jiufen"},
                {id:227, name: "南投", url: "/nantou"},
                {id:228, name: "阿里山", url: "/alishan"}
            ]
        },
        {
            father_id: 3,
            id: 32,
            dt_name1: "日本",
            dt_url1: "/riben",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:321, name: "东京", url: "/dongjing"},
                {id:322, name: "大阪", url: "/daban"},
                {id:323, name: "京都", url: "/jingdu"},
                {id:324, name: "冲绳", url: "/chongsheng"},
                {id:325, name: "北海道", url: "/beihaidao"},
                {id:326, name: "箱根", url: "/xianggen"},
                {id:327, name: "札幌", url: "/zhahuang"},
                {id:328, name: "奈良", url: "/nailiang"},
                {id:329, name: "名古屋", url: "/mingguwu"},
                {id:3210, name: "福冈", url: "/fugang"},
                {id:3211, name: "神户", url: "/shenhu"},
                {id:3212, name: "那霸", url: "/naba"},
                {id:3213, name: "函馆", url: "/hanguan"},
                {id:3214, name: "小樽", url: "/xiaozun"},
                {id:3215, name: "镰仓", url: "/liancang"},
            ]
        },
        {
            father_id: 4,
            id: 41,
            dt_name1: "越南",
            dt_url1: "/yuenan",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:411, name: "芽庄", url: "/yazhuang"},
                {id:412, name: "岘港", url: "/xiangang"},
                {id:413, name: "美奈", url: "/meinai"},
                {id:414, name: "大叻", url: "/dale"},
                {id:415, name: "河内", url: "/henei"},
                {id:416, name: "胡志明市", url: "/huzhimingshi"},
            ]
        },
        {
            father_id: 4,
            id: 42,
            dt_name1: "泰国",
            dt_url1: "/riben",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:421, name: "普吉岛", url: "/dongjing"},
                {id:422, name: "清迈", url: "/daban"},
                {id:423, name: "曼谷", url: "/jingdu"},
                {id:424, name: "苏梅岛", url: "/chongsheng"},
                {id:425, name: "甲米", url: "/beihaidao"},
                {id:426, name: "芭提雅", url: "/xianggen"},
                {id:427, name: "象岛", url: "/zhahuang"},
            ]
        },
        {
            father_id: 4,
            id: 43,
            dt_name1: "柬埔寨",
            dt_url1: "/jianpuzhai",
            dt_name2: "缅甸",
            dt_url2: "/miandian",
            dd_name_url: [
                {id:431, name: "吴哥窟", url: "/wugeku"},
                {id:432, name: "暹粒", url: "/xianli"},
                {id:433, name: "金边", url: "/jinbian"},
                {id:434, name: "仰光", url: "/yangguang"},
                {id:435, name: "蒲甘", url: "/pugan"},
                {id:436, name: "曼德勒", url: "/mandele"},
            ]
        },
        {
            father_id: 4,
            id: 44,
            dt_name1: "新加坡",
            dt_url1: "/xinjiapo",
            dt_name2: "印尼",
            dt_url2: "/yinni",
            dd_name_url: [
                {id:441, name: "新加坡", url: "/xinjiapo"},
                {id:442, name: "巴厘岛", url: "/balidao"},
                {id:443, name: "民丹岛", url: "/mindandao"},
            ]
        },
        {
            father_id: 4,
            id: 45,
            dt_name1: "菲律宾",
            dt_url1: "/feilvbin",
            dt_name2: "文莱",
            dt_url2: "/wenlai",
            dd_name_url: [
                {id:451, name: "长滩岛", url: "/changtandao"},
                {id:452, name: "杜马盖地", url: "/dumagaidi"},
                {id:453, name: "薄荷岛", url: "/bohedao"},
                {id:454, name: "宿雾", url: "/suwu"},
                {id:455, name: "文莱", url: "/wenlai"},
            ]
        },
        {
            father_id: 4,
            id: 46,
            dt_name1: "马来西亚",
            dt_url1: "/malaixiya",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:461, name: "沙巴", url: "/shaba"},
                {id:462, name: "仙本那", url: "/xianbenna"},
                {id:463, name: "吉隆坡", url: "/jilongpo"},
                {id:464, name: "兰卡威", url: "/lankawei"},
            ]
        },
        {
            father_id: 5,
            id: 51,
            dt_name1: "斯里兰卡",
            dt_url1: "/sililanka",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:511, name: "科伦坡", url: "/kelunpo"},
                {id:512, name: "康提", url: "/kangti"},
                {id:513, name: "努沃勒埃利耶", url: "/nuwoleailiye"},
                {id:514, name: "尼甘布", url: "/niganbu"},
            ]
        },
        {
            father_id: 5,
            id: 52,
            dt_name1: "马尔代夫",
            dt_url1: "/maerdaifu",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:521, name: "马累", url: "/malei"},
                {id:522, name: "阿雅达岛", url: "/ayadadao"},
                {id:523, name: "薇拉瓦鲁岛", url: "/weilawaludao"},
                {id:524, name: "宁静岛", url: "/ningjingdao"},
            ]
        },
        {
            father_id: 5,
            id: 53,
            dt_name1: "尼泊尔",
            dt_url1: "/niboer",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:531, name: "加德满都", url: "/jiademandu"},
                {id:532, name: "博卡拉", url: "/bokala"},
                {id:533, name: "巴德岗", url: "/badegang"},
            ]
        },
        {
            father_id: 5,
            id: 54,
            dt_name1: "阿联酋",
            dt_url1: "/alianqiu",
            dt_name2: "伊朗",
            dt_url2: "/yilang",
            dd_name_url: [
                {id:541, name: "迪拜", url: "/dibai"},
                {id:542, name: "阿布扎比", url: "/abuzhabi"},
                {id:543, name: "德黑兰", url: "/deheilan"},
                {id:544, name: "伊斯法罕", url: "/yisifahan"},
                {id:545, name: "设拉子", url: "/shelazi"},
            ]
        },
        {
            father_id: 5,
            id: 55,
            dt_name1: "印度",
            dt_url1: "/yindu",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:551, name: "新德里", url: "/xindeli"},
                {id:552, name: "孟买", url: "/mengmai"},
                {id:553, name: "阿格拉", url: "/agela"},
                {id:554, name: "斋普尔", url: "/zhaipuer"},
                {id:555, name: "瓦拉纳西", url: "/walanaxi"},
            ]
        },
        {
            father_id: 6,
            id: 61,
            dt_name1: "德国",
            dt_url1: "/deguo",
            dt_name2: "奥地利",
            dt_url2: "/aodili",
            dd_name_url: [
                {id:611, name: "慕尼黑", url: "/munihei"},
                {id:612, name: "法兰克福", url: "/falankefu"},
                {id:613, name: "柏林", url: "/bolin"},
                {id:614, name: "科隆", url: "/kelong"},
                {id:615, name: "福森", url: "/fusen"},
                {id:616, name: "维也纳", url: "/weiyena"},
                {id:617, name: "哈尔施塔特", url: "/haershitate"},
                {id:618, name: "萨尔茨堡", url: "/saercibao"}
            ]
        },
        {
            father_id: 6,
            id: 62,
            dt_name1: "美国",
            dt_url1: "/meiguo",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:621, name: "洛杉矶", url: "/luoshanji"},
                {id:622, name: "旧金山", url: "/jiujinshan"},
                {id:623, name: "纽约", url: "/niuyue"},
                {id:624, name: "塞班岛", url: "/saibandao"},
                {id:625, name: "夏威夷", url: "/xiaweiyi"},
                {id:626, name: "关岛", url: "/guandao"},
                {id:627, name: "西雅图", url: "/xiyatu"},
                {id:628, name: "华盛顿", url: "/huashengdun"},
                {id:629, name: "波士顿", url: "/boshidun"},
                {id:6210, name: "奥兰多", url: "/aolanduo"},
                {id:6211, name: "迈阿密", url: "/maiami"},
                {id:6212, name: "芝加哥", url: "/zhijiage"},
                {id:6213, name: "阿拉斯加", url: "/alasijia"}
            ]
        },
        {
            father_id: 6,
            id: 63,
            dt_name1: "希腊",
            dt_url1: "/xila",
            dt_name2: "土耳其",
            dt_url2: "/tuerqi",
            dd_name_url: [
                {id:631, name: "圣托里尼", url: "/shengtuolini"},
                {id:632, name: "雅典", url: "/yadian"},
                {id:633, name: "伊斯坦布尔", url: "/yisitanbuer"},
                {id:634, name: "棉花堡", url: "/mianhuabao"},
                {id:635, name: "卡帕多奇亚", url: "/kapaduoqiya"}
            ]
        },
        {
            father_id: 6,
            id: 64,
            dt_name1: "英国",
            dt_url1: "/yingguo",
            dt_name2: "爱尔兰",
            dt_url2: "/aierlan",
            dd_name_url: [
                {id:641, name: "伦敦", url: "/lundun"},
                {id:642, name: "爱丁堡", url: "/aidingbao"},
                {id:643, name: "剑桥", url: "/jianqiao"},
                {id:644, name: "牛津", url: "/niujin"},
                {id:645, name: "约克", url: "/yueke"},
                {id:646, name: "都柏林", url: "/dubolin"},
            ]
        },
        {
            father_id: 6,
            id: 65,
            dt_name1: "捷克",
            dt_url1: "/jieke",
            dt_name2: "匈牙利",
            dt_url2: "/xiongyali",
            dd_name_url: [
                {id:651, name: "布拉格", url: "/bulage"},
                {id:652, name: "克鲁姆洛夫", url: "/kelumuluofu"},
                {id:653, name: "卡罗维发利", url: "/kaluoweifali"},
                {id:654, name: "布达佩斯", url: "/budapeisi"}
            ]
        },
        {
            father_id: 6,
            id: 66,
            dt_name1: "意大利",
            dt_url1: "/yidali",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:661, name: "罗马", url: "/luoma"},
                {id:662, name: "威尼斯", url: "/weinisi"},
                {id:663, name: "佛罗伦萨", url: "/foluolunsa"},
                {id:664, name: "米兰", url: "/milan"},
                {id:665, name: "五渔村", url: "/wuyucun"},
            ]
        },
        {
            father_id: 6,
            id: 67,
            dt_name1: "冰岛",
            dt_url1: "/bingdao",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:671, name: "雷克雅未克", url: "/leikeyaweike"},
                {id:672, name: "维克", url: "/weike"},
                {id:673, name: "阿克雷里", url: "/akeleili"},
                {id:674, name: "霍芬", url: "/huofen"},
            ]
        },
        {
            father_id: 6,
            id: 68,
            dt_name1: "法国",
            dt_url1: "/faguo",
            dt_name2: "瑞士",
            dt_url2: "/ruishi",
            dd_name_url: [
                {id:681, name: "巴黎", url: "/bali"},
                {id:682, name: "普罗旺斯", url: "/puluowangsi"},
                {id:683, name: "卢塞恩", url: "/lusaien"},
                {id:684, name: "苏黎世", url: "/sulishi"},
                {id:685, name: "因特拉肯", url: "/yintelaken"},
                {id:686, name: "日内瓦", url: "/rineiwa"},
            ]
        },
        {
            father_id: 6,
            id: 69,
            dt_name1: "荷兰",
            dt_url1: "/helan",
            dt_name2: "比利时",
            dt_url2: "/bilishi",
            dd_name_url: [
                {id:691, name: "阿姆斯特丹", url: "/amusitedan"},
                {id:692, name: "鹿特丹", url: "/lutedan"},
                {id:693, name: "羊角村", url: "/yangjiaocun"},
                {id:694, name: "布鲁塞尔", url: "/bulusaier"},
                {id:695, name: "布鲁日", url: "/buluri"},
            ]
        },
        {
            father_id: 6,
            id: 610,
            dt_name1: "西班牙",
            dt_url1: "/xibanya",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:6101, name: "巴塞罗那", url: "/basailuona"},
                {id:6102, name: "马德里", url: "/madeli"},
                {id:6103, name: "塞维利亚", url: "/saiweiliya"},
                {id:6104, name: "格拉纳达", url: "/gelanada"},
                {id:6105, name: "托莱多", url: "/tuolaiduo"},
            ]
        },
        {
            father_id: 6,
            id: 611,
            dt_name1: "美洲其他",
            dt_url1: "javascript:void(0)",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:6111, name: "加拿大", url: "/jianada"},
                {id:6112, name: "巴西", url: "/baxi"},
                {id:6113, name: "古巴", url: "/guba"},
                {id:6114, name: "墨西哥", url: "/moxige"},
                {id:6115, name: "秘鲁", url: "/bilu"}
            ]
        },
        {
            father_id: 6,
            id: 612,
            dt_name1: "葡萄牙",
            dt_url1: "/putaoya",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:6121, name: "里斯本", url: "/lisiben"},
                {id:6122, name: "波尔图", url: "/boertu"},
                {id:6123, name: "辛特拉", url: "/xintela"}
            ]
        },
        {
            father_id: 6,
            id: 613,
            dt_name1: "欧洲其他",
            dt_url1: "javascript:void(0)",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:6131, name: "芬兰", url: "/fenlan"},
                {id:6132, name: "挪威", url: "/nuowei"},
                {id:6133, name: "丹麦", url: "/danmai"},
                {id:6134, name: "瑞典", url: "/ruidian"},
                {id:6135, name: "塞尔维亚", url: "/saierweiya"},
                {id:6136, name: "克罗地亚", url: "/keluodiya"},
            ]
        },
        {
            father_id: 6,
            id: 614,
            dt_name1: "俄罗斯",
            dt_url1: "/eluosi",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:6141, name: "莫斯科", url: "/mosike"},
                {id:6142, name: "贝加尔湖", url: "/beijiaerhu"},
                {id:6143, name: "圣彼得堡", url: "/shengbidebao"},
                {id:6144, name: "海参崴", url: "/haishenwai"}
            ]
        },
        {
            father_id: 7,
            id: 71,
            dt_name1: "埃及",
            dt_url1: "/aiji",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:711, name: "开罗", url: "/kailuo"},
                {id:712, name: "卢克索", url: "/lukesuo"},
                {id:713, name: "阿斯旺", url: "/asiwang"},
                {id:714, name: "红海", url: "/honghai"},
                {id:715, name: "亚历山大", url: "/yalishanda"},
            ]
        },
        {
            father_id: 7,
            id: 72,
            dt_name1: "澳大利亚",
            dt_url1: "/aodaliya",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:721, name: "悉尼", url: "/xini"},
                {id:722, name: "墨尔本", url: "/moerben"},
                {id:723, name: "凯恩斯", url: "/kaiensi"},
                {id:724, name: "大堡礁", url: "/dabaojiao"},
                {id:725, name: "黄金海岸", url: "/huangjinhaian"},
                {id:726, name: "布里斯班", url: "/bulisiban"},
            ]
        },
        {
            father_id: 7,
            id: 73,
            dt_name1: "摩洛哥",
            dt_url1: "/moluoge",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:731, name: "马拉喀什", url: "/malakashi"},
                {id:732, name: "卡萨布兰卡", url: "/kasabulanduo"},
                {id:733, name: "非斯", url: "/feisi"},
                {id:734, name: "舍夫沙万", url: "/shefushawan"}
            ]
        },
        {
            father_id: 7,
            id: 74,
            dt_name1: "新西兰",
            dt_url1: "/xinxilan",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:741, name: "奥克兰", url: "/aokelan"},
                {id:742, name: "皇后镇", url: "/huanghouzhen"},
                {id:743, name: "基督城", url: "/jiducheng"}
            ]
        },
        {
            father_id: 7,
            id: 75,
            dt_name1: "非洲其他",
            dt_url1: "javascript:void(0)",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:751, name: "毛里求斯", url: "/maoliqiusi"},
                {id:752, name: "塞舌尔", url: "/saisheer"},
                {id:753, name: "肯尼亚", url: "/kenniya"},
                {id:754, name: "马达加斯加", url: "/madajiasijia"}
            ]
        },
        {
            father_id: 7,
            id: 76,
            dt_name1: "澳洲其他",
            dt_url1: "javascript:void(0)",
            dt_name2: "",
            dt_url2: "/",
            dd_name_url: [
                {id:761, name: "斐济", url: "/feiji"},
                {id:762, name: "大溪地", url: "/daxidi"},
            ]
        },
      ]
    }
  },
  methods: {
    set_hot_place(key) {
        this.hot_place = key
    },
  }
}
</script>

<style scoped>
.hot_mdd {
    padding: 40px 0;
    width: 1000px;
    margin: 0 auto;
}

.r-title {
    margin-bottom: 35px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
}

.r-title h2 {
    margin-bottom: 8px;
    font-size: 26px;
    font-weight: normal;
    color: #333;
    line-height: 26px;
}

.r-navbar {
    margin: -10px 0 30px;
    text-align: center;
    font-size: 18px;
    color: #eee;
    line-height: 22px;
}

.divide {
    display: inline-block;
    margin-top: 3px;
    width: 1px;
    height: 15px;
    background-color: #eee;
    overflow: hidden;
    line-height: 100px;
    vertical-align: top;
}

/*选中的目的地active*/
.on {
    padding-bottom: 12px;
    color: #ff9d00 !important;
    border-bottom: 3px solid #ff9d00;
}

.r-navbar a {
    color: #333;
    display: inline-block;
    margin: 0 25px;
    vertical-align: top;
}

.hot-list {
    line-height: 24px;
    font-size: 14px;
}

.col {
    width: 100%;
}

dl {
    border-bottom: 1px dashed #eee;
    padding: 20px 0 20px 80px;
    height: 35px;
    margin-top: -1px;
}

dt {
    float: left;
    font-size: 16px;
    color: #333;
    margin-left: -80px;
    text-decoration: underline;
    margin-bottom: 0px;
}

dt a{
    margin-right: 5px;
    display: inline;
}

dd{
    display: inline-block;
    margin-left: 15px;
    height: auto;
}

.left{
    width: 40%
}

.right{
    width: 40%;
    float: right;
    margin-left: 6%;
}

.no_underline{
    text-decoration: none !important;
}

.no_underline a:hover{
    color: black;
}
</style>