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
  '/news':{
    cover: {
      type: 'text',//text/img
      head:'回顾盛事',
      title:'PADI潜水嘉年华',
      title_en:'Diving Festval For PADI',
      time:'2017/11/15',
      about:'一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
      image:'http://openwater.com.cn/uploads/picture/20171116/e4524d5412368b4eced883a016221613.jpg',
      link:'http://openwater.com.cn/index/content/detail/model_id/6/id/19.html',
    },
    toplines:[],
    previous:[
      {
        title:"爱上潜水 盘点广州殿堂级潜水胜地",
        about:'一说起潜水胜地，大多数潜水爱好者一定会联想到东南亚、澳洲欧洲那些极富盛名的殿堂级潜水胜地。然而，大多数人都不知道的是，广州也有极富盛名的殿堂级潜水胜地，和潜伴在此间潜水，可以体会到广州浓厚的历史积淀和水上文化底蕴，享受独特、富有浪漫情怀的潜水体验。广州开水信息科技有限公司为您盘点一二：',
        image:'http://openwater.com.cn/uploads/picture/20171116/e4524d5412368b4eced883a016221613.jpg',
        link:'http://openwater.com.cn/index/content/detail/model_id/6/id/19.html',

      },{
        title:'考潜水证应该知道的潜水教学真相',
        about:'想要考潜水证的朋友可以看这篇文章，了解一些PADI的教学要求，用来做选择潜水课程的参考，以免踩雷。考过证书的朋友可以看下，看有没有遇到这种比较不合理的潜水教学',
        image:'http://openwater.com.cn/uploads/picture/20171121/71c999a8c06a9510234f28719882ea64.jpg',
        link:'http://openwater.com.cn/index/content/detail/model_id/6/id/16.html',
      },{
        title:'女性“潜规则”——广州帕迪7·15女士潜水日泳池体验',
        about:'2017年7月15号下午四点，广州开水信息科技有限公司联合广州潜水专业玩家——帕迪潜水为大家带来的Summer Pool Party–PADI女士潜水日盛夏泳池趴在广州海角红楼游泳场盛大开场！',
        image:'http://openwater.com.cn/uploads/picture/20171121/776534d4f5e3981244cf16b93d021461.jpg',
        link:'./test.html',
      }
    ]
  },
  '/company':{
    name:'开水科技',
    intro:'拥有市中心潜水泳池，五米深潜，城市中心也能畅享潜水体验',
    story:'广州开水作为休闲运动产业发展的服务者、拓展者、引领者，致力于建立和发展休闲水上运动行业服务体系，提供双向、多元、跨界、互动、商业推广等国内外资源整合服务，培养专业氛围，是孵化休闲水上运动文化基地。',
    image:'http://openwater.com.cn/template/kaishui2017/static/images/index/index_08.jpg'
  }
};


export default {
  get(key){

    return new Promise((rev,rej)=>{
      //TODO 这里改为接口访问

      data.hasOwnProperty(key)?rev(data[key]):rej({code:404,msg:'can not attach API: '+key});

    });
  },
};
