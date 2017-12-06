/**
 * AJAX服务
 * @type {{}}
 *
 * Created by anr on 2017/12/4.
 */
let data = {
  '/navi': [
    {
      name: '媒体资讯',
      path: '/',
    },
    {
      name: '品牌大事件',
      path: '/Product',
    },
    {
      name: '公司介绍',
      path: '/Company',
    },
  ],
  '/news': {
    cover: {
      type: 'text',//text/img
      head: '回顾盛事',
      title: 'PADI潜水嘉年华',
      title_en: 'Diving Festval For PADI',
      time: '2017/11/15',
      about: '一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
      image: 'http://openwater.com.cn/uploads/picture/20171116/e4524d5412368b4eced883a016221613.jpg',
      link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/19.html',
    },
    toplines: [],
    previous: [
      {
        title: "爱上潜水 盘点广州殿堂级潜水胜地",
        about: '一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
        image: 'http://openwater.com.cn/uploads/picture/20171116/e4524d5412368b4eced883a016221613.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/19.html',

      }, {
        title: '考潜水证应该知道的潜水教学真相',
        about: '想要考潜水证的朋友可以看这篇文章，了解一些PADI的教学要求，用来做选择潜水课程的参考，以免踩雷。考过证书的朋友可以看下，看有没有遇到这种比较不合理的潜水教学',
        image: 'http://openwater.com.cn/uploads/picture/20171121/71c999a8c06a9510234f28719882ea64.jpg',
        link: 'http://openwater.com.cn/index/content/detail/model_id/6/id/16.html',
      }, {
        title: '女性“潜规则”——广州帕迪7·15女士潜水日泳池体验',
        about: '2017年7月15号下午四点，广州开水信息科技有限公司联合广州潜水专业玩家——帕迪潜水为大家带来的Summer Pool Party–PADI女士潜水日盛夏泳池趴在广州海角红楼游泳场盛大开场！',
        image: 'http://openwater.com.cn/uploads/picture/20171121/776534d4f5e3981244cf16b93d021461.jpg',
        link: './test.html',
      }
    ]
  },
  '/company': {
    name: '开水科技',
    intro: '拥有市中心潜水泳池，五米深潜，城市中心也能畅享潜水体验',
    story: '广州开水作为休闲运动产业发展的服务者、拓展者、引领者，致力于建立和发展休闲水上运动行业服务体系，提供双向、多元、跨界、互动、商业推广等国内外资源整合服务，培养专业氛围，是孵化休闲水上运动文化基地。',
    image: 'http://openwater.com.cn/template/kaishui2017/static/images/index/index_08.jpg'
  },
  '/contact': {
    title1: '来联系我们吧!',
    title2: '我们致力于整合潜水资源，搭建互联网+休闲产业集群服务平台',
    city: '广州市',
    street: '天河区黄埔大道西33号',
    building: '三新大厦五楼5C',
    phone: '020-37209341',
    fax: '020-37209341-802',
    wechat: '开水有文（iopenwater）',
    topImg: 'http://openwater.com.cn/template/kaishui2017/static/images/list_01.jpg',
    bottomImg: 'http://openwater.com.cn/uploads/picture/20171124/2d4a58db080179333c194306e79c799e.png',
  },
  '/cooperation': {
    image: 'http://openwater.com.cn/template/kaishui2017/static/images/index/index_14.jpg',
    title: '我们为休闲产业集群制造平台，准备抓住时机',
    contents: [
      {
        title: '企业团建、媒体推广、商务拓展、异业合作',
        contacts: '缪总监',
        email: 'noah.miao@openwter.com.cn',
        phone: '18102803622'
      }, {
        title: '经销商代理：潜水装备（OCEANIC、HOLLIS）;菲律宾太平洋宿务国际度假村',
        contacts: '梁总监',
        email: 'toby.leung@openwater.com.cn',
        phone: '18420153381'
      }
    ],
  },
  '/recruitment': {
    image: 'http://blog.flatironschool.com/wp-content/uploads/2016/12/Kailee-Gray-background2.png',
    title: '只要，你是独一无二的你',
    introduce: '开水科技的迅速增长使得我们需要继续储备我们的人才库。我们目前有一个小团队，但\n我们的业务正在迅速扩大，我们正在招聘以满足对我们产品的需求。\n如果你看到一个让你感兴趣的职位，请发给我们一份简历或者你的作品，在主题栏中写\n上该职位和姓名',
    jobs: [
      '高级前端工程师', '高级UI设计师', '产品经理'
    ],
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
