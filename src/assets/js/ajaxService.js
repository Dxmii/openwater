/**
 * AJAX服务
 * @type {{}}
 *
 * Created by anr on 2017/12/4.
 */
let data = {
  '/index': [
    {
      url: '/news',
      title: '潜水盛事',
      enter:'进入资讯',
      image: '/static/index/first.jpg'
    },
    {
      url: '/product/hollis',
      title: 'Hollis',
      enter:'进入品牌',
      image: '/static/index/second.jpg'
    },

    {
      url: '/product/oceanic',
      title: 'Oceanic',
      enter:'进入品牌',
      image: '/static/index/third.jpg'
    },
    {
      // url: '/product/hollis',
      title: '度假村',
      enter:'敬请期待',
      image: '/static/index/four.jpg'
    },
    {
      url: '/company',
      title: '关于我们',
      enter:'点击进入',
      image: '/static/index/five.jpg'
    }
  ],
  '/navi': [
    {
      name: '首页',
      path: '/index',
    },
    {
      name: '媒体资讯',
      path: '/news',
    },
    {
      name: '业务范围',
      path: '/product',
      children: [
        {
          name: 'Hollis',
          path: '/hollis'
        },
        {
          name: 'Oceanic',
          path: '/oceanic'
        },
      ],
    },
    {
      name: '关于公司',
      path: '/company',
    },
    {
      name: '商务合作',
      path: '/company/cooperation',
    },
    {
      name: '招聘',
      path: '/company/job',
    },
  ],
  '/news': {
    cover: {
      type: 'text',//text/img
      head: '回顾盛事',
      title: '香港国际潜水暨度假观光展',
      title_en: 'DRT SHOW 2017',
      time: '2017/12/15',
      about: '一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
      image: '/static/news/hongkong2.jpg',
      link: 'http://www.openwater.com.cn/index/content/detail/model_id/6/id/21.html',
    },
    toplines: [{
      type: 'text',//text/img
      head: '回顾盛事',
      title: 'PADI潜水嘉年华',
      title_en: 'Diving Festval For PADI',
      time: '2017/11/15',
      about: '一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
      image: '/static/news/hongkong.jpg',
      link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/19.html',
    },
      {
        title: '潜水特色展1',
        time: '2017/03/25',
        about: '以“爱户外 享自然”为主题的第三届广州户外运动节在广州天河体育中心南广场开幕。本届户外运动节新引进了水上运动项目，有潜水、皮划艇、帆船等。',
        image: '/static/news/diver1.png',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/18.html',
      },
    ],
    puzzle: {
      left: {
        title: '潜水特色展',
        time: '2017/03/25',
        about: '以“爱户外 享自然”为主题的第三届广州户外运动节在广州天河体育中心南广场开幕。本届户外运动节新引进了水上运动项目，有潜水、皮划艇、帆船等。',
        image: '/static/news/puz_left.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/18.html',
      },
      rightTop: {
        title: '潜水特色展2',
        time: '2017/03/25',
        about: '以“爱户外 享自然”为主题的第三届广州户外运动节在广州天河体育中心南广场开幕。本届户外运动节新引进了水上运动项目，有潜水、皮划艇、帆船等。',
        image: '/static/news/puz_right_top.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/18.html',
      },
      rightButtom1: {
        title: '潜水特色展3',
        time: '2017/03/25',
        about: '以“爱户外 享自然”为主题的第三届广州户外运动节在广州天河体育中心南广场开幕。本届户外运动节新引进了水上运动项目，有潜水、皮划艇、帆船等。',
        image: '/static/news/puz_right_btm1.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/18.html',
      },
      rightButtom2: {
        title: '潜水特色展4',
        time: '2017/03/25',
        about: '以“爱户外 享自然”为主题的第三届广州户外运动节在广州天河体育中心南广场开幕。本届户外运动节新引进了水上运动项目，有潜水、皮划艇、帆船等。',
        image: '/static/news/puz_right_btm2.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/18.html',
      },
    },
    previous: [
      {
        title: "爱上潜水 盘点广州殿堂级潜水胜地",
        about: '一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
        image: 'http://openwater.com.cn/uploads/picture/20171116/e4524d5412368b4eced883a016221613.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/19.html',
        time: '2017/03/25',
      }, {
        title: '考潜水证应该知道的潜水教学真相',
        about: '想要考潜水证的朋友可以看这篇文章，了解一些PADI的教学要求，用来做选择潜水课程的参考，以免踩雷。考过证书的朋友可以看下，看有没有遇到这种比较不合理的潜水教学',
        image: 'http://openwater.com.cn/uploads/picture/20171121/71c999a8c06a9510234f28719882ea64.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/16.html',
        time: '2017/03/25',
      }, {
        title: '女性“潜规则”——广州帕迪7·15女士潜水日泳池体验',
        about: '2017年7月15号下午四点，广州开水信息科技有限公司联合广州潜水专业玩家——帕迪潜水为大家带来的Summer Pool Party–PADI女士潜水日盛夏泳池趴在广州海角红楼游泳场盛大开场！',
        image: 'http://openwater.com.cn/uploads/picture/20171121/776534d4f5e3981244cf16b93d021461.jpg',
        link: 'http://www.openwater.com.cn/index/content/detail/model_id/6/id/17.html',
        time: '2017/03/25',
      }
    ]
  },
  '/company': {
    name: '开水科技',
    intro: '互联网+休闲产业集群的服务平台，为热爱体育和户外休闲生活的人们提供创新、崇尚、领先的专业体验。',
    story: [
      {
        title: '我们的故事',
        content: '广州开水作为休闲运动产业发展的服务者、拓展者、引领者，致力于建立和发展休闲水上运动行业服务体系，提供双向、多元、跨界、互动、商业推广等国内外资源整合服务，培养专业氛围，是孵化休闲水上运动文化基地。',
      },
      {
        title: '我们的历程',
        content: '2015年09月  成立广州开水信息科技有限公司'
      },
      {
        title: '我们的历程',
        content: '2016年10月  广州开水正式收购广州市帕迪潜水服务有限公司'
      },
      {
        title: '我们的历程',
        content: '2017年01月  广州开水正式成为美国著名潜水品牌OCEANIC、HOLLIS国内总经销商'
      },
      {
        title: '我们的历程',
        content: '2017年07月  广州开水成为太平洋宿务国际度假村的中国区独家代理'
      }
    ],
    image: '/static/company/company.jpg',
  },
  '/contact': {
    title1: '来联系我们吧 !',
    title2: '我们致力于整合潜水资源，搭建互联网+休闲产业集群服务平台',
    city: '广州市',
    street: '天河区黄埔大道西33号',
    building: '三新大厦五楼5C',
    phone: '020-37209341',
    fax: '020-37209341-802',
    wechat: '开水有文（iopenwater）',
    topImg: '/static/company/contact.jpg',
    bottomImg: '/static/company/wechat.jpg',
  },
  '/cooperation': {
    image: '/static/company/cooperation.jpg',
    title: '我们为休闲产业集群制造平台，准备抓住时机',
    contents: [
      {
        title: ' 企业团建、媒体推广、商务拓展、异业合作',
        contacts: ' 缪总监',
        email: ' noah.miao@openwter.com.cn',
        phone: ' 18102803622'
      }, {
        title: ' 经销商代理： 潜水装备（OCEANIC、HOLLIS）; 菲律宾太平洋宿务国际度假村',
        contacts: ' 梁总监',
        email: ' toby.leung@openwater.com.cn',
        phone: ' 18420153381'
      }
    ],
  },
  '/recruitment': {
    image: '/static/company/job.jpg',
    title: '只要，你是独一无二的你',
    introduce: '开水科技的迅速增长使得我们需要继续储备我们的人才库。我们目前有一个小团队，但我们的业务正在迅速扩大，我们正在招聘以满足我们对产品的需求。如果你看到一个让你感兴趣的职位，请以“姓名+岗位”为主题投递简历至邮箱 hr@openwater.com.cn 。也欢迎电话咨询：020-37209341\n',
    jobs: [
      '高级前端工程师', '后端开发工程师', '人资经理', '新媒体运营专业', '活动策划执行', '文案', 'UI设计师'
    ],
  },
  '/hollis': {
    image: '/static/products/hollis.png',
    introduce: '当你使HOLLIS循环呼吸器进入水下领域时，你会体验到前所未有的风景和感受。HOLLIS GEAR承诺为你提供非一般的体验。',
    products: [
      {
        title: '100LX',
        image: '/static/products/p1.jpg',
        intro: '通过调节器测试黄金标准——ANSTI测试系统严格检测。',
        paramImage: 'http://www.openwater.com.cn/uploads/editor/image/20171116/895ca6d554156bafe191feb6c7d96894.jpg',
      },
      {
        title: 'DC3',
        image: '/static/products/p2.jpg',
        intro: '由于100LX/DC3呼吸调节器的优秀性能' +
        '对产品细节的把控以及合理的价格，' +
        '这款呼吸调节器被 ScubaLab 推荐成为' +
        'ScubaLab的2016年推荐购买的深潜呼吸调节器。',
        paramImage: 'http://www.openwater.com.cn/uploads/editor/image/20171116/5f9db0e2be162b3314273cbc9f03ab9f.jpg',
      }, {
        title: '100LX',
        image: '/static/products/p1.jpg',
        intro: '通过调节器测试黄金标准——ANSTI测试系统严格检测。',
        paramImage: 'http://www.openwater.com.cn/uploads/editor/image/20171116/895ca6d554156bafe191feb6c7d96894.jpg',
      },
      {
        title: 'DC3',
        image: '/static/products/p2.jpg',
        intro: '由于100LX/DC3呼吸调节器的优秀性能' +
        '对产品细节的把控以及合理的价格，' +
        '这款呼吸调节器被 ScubaLab 推荐成为' +
        'ScubaLab的2016年推荐购买的深潜呼吸调节器。',
        paramImage: 'http://www.openwater.com.cn/uploads/editor/image/20171116/5f9db0e2be162b3314273cbc9f03ab9f.jpg',
      }
    ]
  },
  '/oceanic': {
    image: '/static/products/oceanic.png',
    introduce: 'OCEANIC——为生命。' +
    '广州开水信息科技有限公司为美国著名潜水品牌OCEANIC国内总经销商；本文简单介绍OCEANIC部分潜水装备，感兴趣的潜水爱好者或企业可以联系我司进行进一步了解。',
    products: [
      {
        title: 'OCEANIC:EXCURSION  潜水大师',
        image: 'http://www.openwater.com.cn/uploads/editor/image/20171116/07b3c5b7641a648fe19578e43612611b.jpg',
        intro: 'EXCURSIONTM专为一众冒险家而设计。既舒适又稳定的后充气式浮力调整装置适合对冒险狂热的你。',
        paramImage: 'http://www.openwater.com.cn/uploads/editor/image/20171116/b944f4df23acd597688468fea29ffa91.png',
      },
      {
        title: 'OCEANIC MANTA RAY',
        image: 'http://www.openwater.com.cn/uploads/editor/image/20171116/d660eda6b912379b029794308722652e.jpg',
        intro: '这款OCEANIC新出的蛙鞋，灵感来自于大海中的Giant：Manta ray（蝠鲼）'
      }
    ]
  },
};


export default {
  get(key){

    return new Promise((rev, rej) => {
      //TODO 这里改为接口访问

      data.hasOwnProperty(key) ? rev(data[key]) : rej({code: 404, msg: 'can not attach API: ' + key});

    });
  },
};
