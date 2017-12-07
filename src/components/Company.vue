<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="container">
    <div id="company" class="company">
      <div ref="companyImage" class="company_image mask">
        <img :src="company.image" style="width:100%;height:100%;"></div>
      <div ref="companyInfo" class="fadeIn company_info">
        <div class="text title1">{{company.name}}</div>
        <div style="width:25em;" class="text content2">{{company.intro}}</div>
      </div>
    </div>
    <div class="plank"></div>
    <div class="letter">
      <div class="text title2 fadeIn">我们的故事</div>
      <div class="text content1">{{company.story}}</div>
    </div>
    <div id="cooperation" class="cooperation">
      <div ref="cooperation_img" class="mask cooperation_top">
        <img :src="cooperation.image"/>
        <div ref="cooperation_title" class="text cooperation_title">{{cooperation.title}}</div>
        <div ref="cooperation_btn" class="hoverButton" style="z-index:1;" @click="scrollInto('cooperation_content')">
          <span>我们聊聊吧</span>
        </div>
      </div>
      <div ref="cooperation_content" class="cooperation_content">
        <div class="text" style="position:relative;top:8vh;left:83px;text-align:left;">商务合作</div>
        <div class="coopers text">
          <div v-for="c in cooperation.contents">
            <div class="dark_red line"></div>
            <br/><br/>
            <div style="font-size:18px;width:28em;"><strong>{{c.title}}</strong></div>
            <br/>
            <div>联系人:{{c.contacts}}</div>
            <br/>
            <div>电子邮箱:{{c.email}}</div>
            <br/>
            <div>联系电话:{{c.phone}}</div>
            <br/><br/><br/><br/>
          </div>
        </div>
      </div>
    </div>
    <div class="recruitment">
      <div>
        <img :src="recruitment.image">
        <div class="recruitment_info_panel">
          <div class="recruitment_title text" style="font-size:2em;font-weight: bold;">加入我们</div>
          <div ref="recruitment_title" class="recruitment_title">{{recruitment.title}}</div>
          <div ref="recruitment_btn" class="recruitment_btn hoverButtonB" style="margin:0 auto;z-index:1;" @click="scrollInto('recruitment_content')">
            <span>打开职位</span>
          </div>
        </div>
      </div>
      <div ref="recruitment_content" class="recruitment_content">
        <div class="text defFont" style="position:relative;top:10vh;left:83px;text-align:left;">职位招聘</div>
        <div class="jobs text">
          <div class="dark_red line"></div>
          <br/>
          <div style="font-size:12px;"><pre>{{recruitment.introduce}}</pre></div>
          <br/>
          <strong v-for="job in recruitment.jobs">
            {{job}}
            <br/><br/>
          </strong>
        </div>
      </div>
    </div>
    <div id="contact" class="contact">
      <div class="contact_top mask">
        <img :src="contact.topImg">
      </div>
      <div class="contact_content">
        <div class="title1">{{contact.title1}}</div>
        <div class="content2">{{contact.title2}}</div>
        <div>
          <div class="contact_address">
            <div class="title3">我在这里</div>
            <div class="dark_red line"></div>
            <div>{{contact.city}}</div>
            <div>{{contact.street}}</div>
            <div>{{contact.building}}</div>
          </div>
          <div class="contact_way">
            <div class="title3">等你联系</div>
            <div class="dark_red line"></div>
            <div>电话：{{contact.phone}}</div>
            <div>传真：{{contact.fax}}</div>
            <div>公众号：{{contact.wechat}}</div>
          </div>
        </div>
      </div>
      <div class="contact_bottom mask">
        <img :src="contact.bottomImg"/>
      </div>
    </div>
  </div>
</template>

<script>
  import scrollMgr from '../assets/js/scrollMgr'
  import ajax from '../assets/js/ajaxService'
  /*eslint-disable*/
  export default{
    name: 'MainPage',
    data(){
      return {
        company: {},
        contact: {},
        recruitment: {},
        cooperation: {},
      }
    },
    beforeDestroy(){
      //监听在界面销毁的时候关闭
      scrollMgr.off('CompanyInfo');
    },
    methods: {
      scrollInto(id){
        this.$refs[id].scrollIntoView();
      },
    },
    mounted(){
      ajax.get('/company').then(company => {
        this.company = company;
      });
      ajax.get('/contact').then(contact => {
        this.contact = contact;
      });
      ajax.get('/recruitment').then(recruitment => {
        this.recruitment = recruitment;
      });
      ajax.get('/cooperation').then(cooperation => {
        this.cooperation = cooperation;
      });

      //滚屏动画效果
      $(() => {
        const info = $(this.$refs.companyInfo);
        const title = $(this.$refs.cooperation_title);
        const btn = $(this.$refs.cooperation_btn);
        const img = $(this.$refs.cooperation_img);
        const coop = $('#cooperation').offset().top;
        scrollMgr.on('CompanyInfo', top => {
          if (top < 400) {
            info.css("transform", "translate(0px," + top / 2 + "px)");
            info.css('opacity', (400 - top) / 400);

          }

          let off1 = top - coop;
          if (off1 > 0) {
            img.css("transform", "translate(0px,-" + off1 / 1.5 + "px)");
            title.css('opacity', (400 - off1) / 400);

//            btn.css("transform","translate(0px,-"+off1/1.5+"px)");
            btn.css('opacity', (400 - off1) / 400);
          }
        });
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
  @import "../assets/css/company.scss";
</style>
