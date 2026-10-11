/* Roamly course library: 13 travel scenes × 20 lessons × 26 sentences = 6,760 sentences. */
(function () {
  const lessonSets = {
    airport: [
      ['值机办理', 'checking in for my flight'], ['选择座位', 'choosing a seat'], ['托运行李', 'checking a bag'], ['随身行李', 'bringing a carry-on'], ['航班时间', 'checking the flight time'], ['登机口', 'finding the gate'], ['航班延误', 'a delayed flight'], ['改签航班', 'changing a flight'], ['特殊餐食', 'requesting a special meal'], ['轮椅服务', 'requesting wheelchair assistance'], ['靠窗座位', 'requesting a window seat'], ['靠过道座位', 'requesting an aisle seat'], ['护照检查', 'showing my passport'], ['登机牌', 'getting a boarding pass'], ['安检流程', 'going through security'], ['转机安排', 'making a connection'], ['航班取消', 'a canceled flight'], ['登机时间', 'the boarding time'], ['机场休息室', 'the airport lounge'], ['最后登机', 'the final boarding call']
    ],
    immigration: [
      ['入境目的', 'the purpose of my visit'], ['停留时间', 'the length of my stay'], ['住宿地址', 'my accommodation address'], ['返程机票', 'my return ticket'], ['旅行计划', 'my travel plans'], ['海关申报', 'a customs declaration'], ['免税额度', 'the duty-free allowance'], ['携带物品', 'the items I am carrying'], ['食品申报', 'declaring food'], ['药品说明', 'my medication'], ['签证问题', 'a visa question'], ['入境盖章', 'an entry stamp'], ['电子通道', 'the e-gate'], ['人工通道', 'the staffed counter'], ['行李检查', 'a baggage inspection'], ['翻译帮助', 'translation help'], ['指纹采集', 'fingerprint collection'], ['过境规定', 'transit rules'], ['禁止物品', 'prohibited items'], ['离境要求', 'departure requirements']
    ],
    transport: [
      ['叫出租车', 'calling a taxi'], ['网约车上车点', 'the ride pickup point'], ['购买地铁票', 'buying a metro ticket'], ['公交线路', 'a bus route'], ['换乘方式', 'transferring lines'], ['火车站方向', 'the way to the station'], ['打车费用', 'the taxi fare'], ['交通卡充值', 'topping up a transit card'], ['末班车时间', 'the last train'], ['站台位置', 'the platform'], ['车票座位', 'the seat on my ticket'], ['行李空间', 'space for my luggage'], ['堵车情况', 'the traffic situation'], ['下车提醒', 'a reminder for my stop'], ['步行路线', 'a walking route'], ['租车手续', 'renting a car'], ['加油站位置', 'the nearest gas station'], ['停车规则', 'the parking rules'], ['高速公路收费', 'the highway toll'], ['还车地点', 'the car return location']
    ],
    hotel: [
      ['办理入住', 'checking in'], ['确认预订', 'confirming a reservation'], ['提前入住', 'an early check-in'], ['延迟退房', 'a late check-out'], ['房间楼层', 'the room floor'], ['房间钥匙', 'the room key'], ['无线网络', 'the Wi-Fi password'], ['早餐时间', 'the breakfast hours'], ['行李寄存', 'storing my luggage'], ['叫醒服务', 'a wake-up call'], ['房间清洁', 'room cleaning'], ['更换毛巾', 'replacing towels'], ['空调问题', 'an air-conditioning problem'], ['热水问题', 'a hot-water problem'], ['房间噪音', 'noise from the room'], ['换房请求', 'changing rooms'], ['酒店设施', 'the hotel facilities'], ['洗衣服务', 'the laundry service'], ['退房结账', 'checking out and paying'], ['开具发票', 'getting a receipt']
    ],
    cafe: [
      ['点一杯咖啡', 'ordering a coffee'], ['选择豆子', 'choosing the beans'], ['燕麦奶', 'oat milk'], ['无糖饮品', 'a sugar-free drink'], ['冰咖啡', 'an iced coffee'], ['热咖啡', 'a hot coffee'], ['推荐饮品', 'a drink recommendation'], ['点心选择', 'a pastry choice'], ['堂食座位', 'a seat inside'], ['户外座位', 'an outdoor seat'], ['外带包装', 'a takeaway cup'], ['饮品尺寸', 'the drink size'], ['加一份浓缩', 'an extra espresso shot'], ['过敏原信息', 'allergen information'], ['无线网络', 'the Wi-Fi'], ['充电插座', 'a power outlet'], ['分开付款', 'separate payments'], ['刷卡付款', 'paying by card'], ['小费方式', 'the tipping custom'], ['咖啡店营业时间', 'the cafe opening hours']
    ],
    restaurant: [
      ['预订座位', 'reserving a table'], ['等位时间', 'the waiting time'], ['查看菜单', 'looking at the menu'], ['今日特餐', 'the daily special'], ['推荐菜品', 'a dish recommendation'], ['点前菜', 'ordering a starter'], ['点主菜', 'ordering a main course'], ['素食选择', 'a vegetarian option'], ['无麸质选择', 'a gluten-free option'], ['食物过敏', 'a food allergy'], ['调整口味', 'adjusting the seasoning'], ['饮品搭配', 'a drink pairing'], ['上菜顺序', 'the serving order'], ['打包剩菜', 'packing the leftovers'], ['结账方式', 'the way to pay'], ['分开账单', 'separate checks'], ['服务费', 'the service charge'], ['发票收据', 'a receipt'], ['餐厅环境', 'the restaurant atmosphere'], ['离店时间', 'the time to leave']
    ],
    shopping: [
      ['寻找尺码', 'finding a size'], ['试穿衣服', 'trying on clothes'], ['比较颜色', 'comparing colors'], ['查看价格', 'checking the price'], ['打折活动', 'a sale'], ['退换货政策', 'the return policy'], ['免税购物', 'tax-free shopping'], ['购买纪念品', 'buying a souvenir'], ['包装礼物', 'wrapping a gift'], ['寄送包裹', 'shipping a package'], ['刷卡付款', 'paying by card'], ['现金付款', 'paying in cash'], ['购物袋', 'a shopping bag'], ['保修服务', 'the warranty service'], ['电子产品', 'an electronic item'], ['药店商品', 'an item from the pharmacy'], ['超市位置', 'the supermarket location'], ['市场砍价', 'bargaining at a market'], ['品牌信息', 'brand information'], ['营业时间', 'the store hours']
    ],
    sightseeing: [
      ['购买门票', 'buying an entrance ticket'], ['预约参观', 'booking a visit'], ['开放时间', 'the opening hours'], ['导览服务', 'a guided tour'], ['拍照规定', 'the photo rules'], ['寄存物品', 'storing my belongings'], ['洗手间位置', 'the restroom location'], ['最佳观景点', 'the best viewpoint'], ['公共交通', 'public transportation'], ['景点路线', 'the route to the attraction'], ['历史介绍', 'the history of the site'], ['语音导览', 'an audio guide'], ['儿童票', 'a child ticket'], ['无障碍通道', 'an accessible entrance'], ['排队时间', 'the queue time'], ['雨天计划', 'a rainy-day plan'], ['附近景点', 'nearby attractions'], ['纪念品商店', 'the gift shop'], ['闭馆提醒', 'the closing reminder'], ['合影请求', 'asking someone for a photo']
    ],
    social: [
      ['介绍自己', 'introducing myself'], ['来自哪里', 'where I am from'], ['旅行计划', 'my travel plans'], ['推荐城市', 'a city recommendation'], ['谈论天气', 'talking about the weather'], ['练习发音', 'practicing pronunciation'], ['询问兴趣', 'asking about interests'], ['分享美食', 'sharing food recommendations'], ['交换联系方式', 'exchanging contact details'], ['约时间见面', 'arranging a time to meet'], ['礼貌拒绝', 'politely declining'], ['表达感谢', 'expressing thanks'], ['表达喜欢', 'saying what I like'], ['表达不确定', 'saying I am not sure'], ['请求说明', 'asking for an explanation'], ['确认理解', 'checking my understanding'], ['讲述经历', 'sharing an experience'], ['谈论文化', 'talking about culture'], ['告别方式', 'saying goodbye'], ['保持联系', 'staying in touch']
    ],
    emergency: [
      ['寻找警察', 'finding the police'], ['联系急救', 'calling an ambulance'], ['描述症状', 'describing symptoms'], ['寻找医生', 'finding a doctor'], ['购买药品', 'buying medicine'], ['丢失护照', 'a lost passport'], ['丢失手机', 'a lost phone'], ['银行卡被盗', 'a stolen bank card'], ['联系领事馆', 'contacting the consulate'], ['报告事故', 'reporting an accident'], ['寻找安全地点', 'finding a safe place'], ['请求翻译', 'requesting an interpreter'], ['说明过敏', 'explaining an allergy'], ['说明疼痛', 'describing pain'], ['寻找医院', 'finding a hospital'], ['联系保险', 'contacting insurance'], ['等待帮助', 'waiting for help'], ['提供位置', 'giving my location'], ['紧急联系人', 'an emergency contact'], ['确认安全', 'confirming that I am safe']
    ],
    communication: [
      ['听不清楚', 'not hearing clearly'], ['请求慢一点', 'asking someone to slow down'], ['请求重复', 'asking for repetition'], ['询问拼写', 'asking for spelling'], ['确认数字', 'confirming a number'], ['确认地址', 'confirming an address'], ['写下来', 'writing something down'], ['使用翻译软件', 'using a translation app'], ['练习句子', 'practicing a sentence'], ['纠正发音', 'correcting pronunciation'], ['正式表达', 'using a formal expression'], ['口语表达', 'using a casual expression'], ['澄清误会', 'clearing up a misunderstanding'], ['表达同意', 'expressing agreement'], ['表达不同意', 'expressing disagreement'], ['提出请求', 'making a request'], ['回应请求', 'responding to a request'], ['确认下一步', 'confirming the next step'], ['结束对话', 'ending a conversation'], ['保持礼貌', 'staying polite']
    ],
    services: [
      ['邮寄明信片', 'mailing a postcard'], ['兑换货币', 'exchanging money'], ['取现金', 'withdrawing cash'], ['购买电话卡', 'buying a SIM card'], ['连接网络', 'connecting to Wi-Fi'], ['打印文件', 'printing a document'], ['复印证件', 'copying an ID'], ['预约服务', 'booking a service'], ['修改预约', 'changing an appointment'], ['取消预约', 'canceling an appointment'], ['咨询费用', 'asking about a fee'], ['确认付款', 'confirming a payment'], ['获取编号', 'getting a reference number'], ['填写表格', 'filling out a form'], ['提交材料', 'submitting documents'], ['等待办理', 'waiting for service'], ['领取物品', 'collecting an item'], ['申请退款', 'requesting a refund'], ['投诉问题', 'reporting a problem'], ['确认营业时间', 'confirming business hours']
    ],
    departure: [
      ['确认返程', 'confirming my return trip'], ['办理退房', 'checking out'], ['前往机场', 'getting to the airport'], ['购买最后礼物', 'buying a last-minute gift'], ['整理行李', 'packing my luggage'], ['托运行李', 'checking my bag'], ['退税手续', 'claiming a tax refund'], ['确认登机口', 'confirming the gate'], ['购买餐食', 'buying food for the trip'], ['给朋友报平安', 'letting friends know I am safe'], ['预约接送', 'booking a transfer'], ['查看交通', 'checking transportation'], ['预留时间', 'leaving enough time'], ['处理超重', 'handling excess baggage'], ['丢失物品', 'a lost item'], ['航班变更', 'a flight change'], ['退还租车', 'returning a rental car'], ['最后一晚', 'the last night'], ['回忆旅程', 'remembering the trip'], ['计划下次旅行', 'planning the next trip']
    ]
  };

  const sceneInfo = [
    ['airport', '✈︎', '机场值机', '从值机柜台到登机口，顺利开始旅程。', '#ff7660', '机场与登机'],
    ['immigration', '🛂', '入境与海关', '回答入境问题，清楚说明你的旅行计划。', '#ffd56b', '入境与海关'],
    ['transport', '🚇', '城市移动', '地铁、公交、出租车和租车都能开口问。', '#5de1c0', '城市交通'],
    ['hotel', '🛏', '酒店入住', '从确认预订到解决房间问题。', '#b89cff', '酒店住宿'],
    ['cafe', '☕', '咖啡店开口', '点单、问推荐、说出自己的偏好。', '#ffad99', '咖啡与轻食'],
    ['restaurant', '🍽', '餐厅用餐', '预订、点餐、调整口味并完成结账。', '#ff9d6c', '餐厅用餐'],
    ['shopping', '🛍', '购物与退换', '询价、试穿、付款和处理售后。', '#7dd3fc', '购物与退换'],
    ['sightseeing', '🏛', '景点参观', '买票、问路、听导览，玩得更从容。', '#f9a8d4', '景点参观'],
    ['social', '☀︎', '认识新朋友', '自然自我介绍，聊旅行和文化。', '#fde68a', '社交闲聊'],
    ['emergency', '✚', '紧急情况', '遇到突发情况时，清晰求助和说明。', '#fb7185', '安全与健康'],
    ['communication', '◌', '听懂与表达', '听不清、说不出时，依然能保持交流。', '#93c5fd', '沟通技巧'],
    ['services', '⌁', '生活服务', '邮局、银行、电话卡和各种日常办理。', '#86efac', '生活服务'],
    ['departure', '↗', '返程出发', '收好行李、办理退税，轻松踏上返程。', '#c4b5fd', '返程出发']
  ];

  const sentencePatterns = [
    [(c) => `I'd like to ask about ${c.topic}.`, (c) => `我想了解${c.topicZh}。`, '开场提问'],
    [(c) => `Could you help me with ${c.topic}?`, (c) => `可以帮我处理${c.topicZh}吗？`, '礼貌求助'],
    [(c) => `Where can I find ${c.place}?`, (c) => `我在哪里可以找到${c.placeZh}？`, '询问位置'],
    [(c) => `How much does ${c.item} cost?`, (c) => `${c.itemZh}多少钱？`, '询问价格'],
    [(c) => `Is ${c.item} included?`, (c) => `${c.itemZh}包含在内吗？`, '确认包含'],
    [(c) => `Could I have ${c.preference}, please?`, (c) => `可以给我${c.preferenceZh}吗？`, '提出偏好'],
    [(c) => `Do you have ${c.item}?`, (c) => `你们有${c.itemZh}吗？`, '询问是否有货'],
    [(c) => `I'm looking for ${c.item}.`, (c) => `我在找${c.itemZh}。`, '说明需求'],
    [(c) => `I have a question about ${c.topic}.`, (c) => `我有一个关于${c.topicZh}的问题。`, '提出问题'],
    [(c) => `What do you recommend for ${c.topic}?`, (c) => `关于${c.topicZh}，你有什么推荐？`, '请求推荐'],
    [() => `Could you repeat that more slowly?`, () => `可以慢一点再说一遍吗？`, '请求放慢'],
    [() => `Could you write that down for me?`, () => `可以帮我写下来吗？`, '请求写下'],
    [(c) => `What time does ${c.service} start?`, (c) => `${c.serviceZh}几点开始？`, '询问时间'],
    [(c) => `How long will ${c.service} take?`, (c) => `${c.serviceZh}需要多长时间？`, '询问时长'],
    [(c) => `Is ${c.place} nearby?`, (c) => `附近有${c.placeZh}吗？`, '寻找附近地点'],
    [(c) => `I'd prefer ${c.preference}.`, (c) => `我更想要${c.preferenceZh}。`, '表达偏好'],
    [() => `That works for me.`, () => `这样对我来说可以。`, '确认安排'],
    [() => `That sounds perfect, thank you.`, () => `听起来非常好，谢谢你。`, '积极回应'],
    [() => `Sorry, I didn't catch that.`, () => `抱歉，我刚才没听清。`, '承认没听懂'],
    [() => `Could you say that again?`, () => `可以再说一遍吗？`, '请求重复'],
    [(c) => `I'm sorry, there's a problem with ${c.problem}.`, (c) => `不好意思，${c.problemZh}出了问题。`, '说明问题'],
    [(c) => `Could we change to ${c.item}?`, (c) => `我们可以换成${c.itemZh}吗？`, '提出更改'],
    [() => `Please let me know if anything changes.`, () => `如果有任何变化，请告诉我。`, '请求更新'],
    [(c) => `I'll be ready at ${c.time}.`, (c) => `我会在${c.timeZh}准备好。`, '确认时间'],
    [() => `Thanks for your help.`, () => `谢谢你的帮助。`, '表达感谢'],
    [() => `Have a great day.`, () => `祝你今天愉快。`, '礼貌道别']
  ];

  const itemPairs = [
    ['a quiet option', '安静的选择'], ['a convenient option', '方便的选择'], ['a cheaper option', '更便宜的选择'], ['the most popular option', '最受欢迎的选择'], ['the option near the entrance', '入口附近的选择'], ['the option for tonight', '今晚的选择'], ['a small size', '小号'], ['a large size', '大号'], ['an English version', '英文版本'], ['a printed copy', '纸质版']
  ];
  const places = [['information desk', '咨询台'], ['main entrance', '主入口'], ['nearest counter', '最近的柜台'], ['waiting area', '等候区'], ['ticket machine', '售票机'], ['customer service desk', '客服柜台'], ['restroom', '洗手间'], ['exit', '出口'], ['meeting point', '集合点'], ['security office', '安保办公室']];
  const services = [['the service', '这项服务'], ['the next session', '下一场服务'], ['the morning service', '上午的服务'], ['the evening service', '晚间的服务'], ['the express service', '快速服务'], ['the regular service', '普通服务'], ['the reservation desk', '预约柜台'], ['the shuttle', '接驳车'], ['the tour', '导览'], ['the counter', '柜台服务']];
  const preferences = [['a quiet seat', '安静的座位'], ['a seat by the window', '靠窗的座位'], ['a seat near the entrance', '入口附近的座位'], ['something without sugar', '不加糖的东西'], ['something less spicy', '不太辣的东西'], ['an English menu', '英文菜单'], ['a paper ticket', '纸质票'], ['a digital ticket', '电子票'], ['a later time', '晚一点的时间'], ['an earlier time', '早一点的时间']];
  const problems = [['my reservation', '我的预订'], ['my ticket', '我的票'], ['my room', '我的房间'], ['my payment', '我的付款'], ['the information on the screen', '屏幕上的信息'], ['the machine', '机器'], ['the connection', '连接'], ['the address', '地址'], ['the timing', '时间安排'], ['the receipt', '收据']];
  const times = [['nine o’clock', '九点'], ['ten thirty', '十点半'], ['noon', '中午'], ['two this afternoon', '今天下午两点'], ['four thirty', '四点半'], ['six this evening', '今晚六点'], ['tomorrow morning', '明天早上'], ['tomorrow afternoon', '明天下午'], ['the next hour', '接下来一小时'], ['the scheduled time', '预定时间']];

  function buildContext(scene, lesson, index) {
    const item = itemPairs[index % itemPairs.length];
    const place = places[index % places.length];
    const service = services[index % services.length];
    const preference = preferences[index % preferences.length];
    const problem = problems[index % problems.length];
    const time = times[index % times.length];
    return {
      topic: lesson[1], topicZh: lesson[0],
      item: item[0], itemZh: item[1], place: `the ${place[0]}`, placeZh: place[1],
      service: service[0], serviceZh: service[1], preference: preference[0], preferenceZh: preference[1],
      problem: problem[0], problemZh: problem[1], time: time[0], timeZh: time[1]
    };
  }

  const scenes = sceneInfo.map(([id, icon, title, description, color, shortTitle]) => {
    const lessons = lessonSets[id].map((lesson, index) => {
      const context = buildContext(id, lesson, index);
      const sentences = sentencePatterns.map((pattern, sentenceIndex) => ({
        id: `${id}-${String(index + 1).padStart(2, '0')}-${String(sentenceIndex + 1).padStart(2, '0')}`,
        en: pattern[0](context), zh: pattern[1](context), tip: pattern[2],
        sceneId: id, lessonIndex: index, sentenceIndex
      }));
      return { id: `${id}-${index + 1}`, index, title: lesson[0], topic: lesson[1], sentences, context };
    });
    return { id, icon, title, shortTitle, description, color, lessons };
  });

  window.RoamlyContent = {
    scenes,
    sentenceCount: scenes.reduce((sum, scene) => sum + scene.lessons.reduce((n, lesson) => n + lesson.sentences.length, 0), 0),
    lessonCount: scenes.reduce((sum, scene) => sum + scene.lessons.length, 0),
    sceneCount: scenes.length
  };
})();
