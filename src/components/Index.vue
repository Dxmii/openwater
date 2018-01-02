<template>
  <div style="width:100%;height:100vh">
    <div class="fullpage-container" @keyup="keyup($event)">
      <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
        <div class="page" v-for="i in infos">
          <div class="part  mask">
            <img :src="i.image"/>
          </div>
          <div class="title songti" v-animate="{value:i.animation||'slideInDown'}">{{i.title}}</div>
          <div class="hoverButton" v-animate="{value:'pulse'}" style="z-index:1;" @click="jump(i.url)">
            <span>{{i.enter}}</span>
          </div>
        </div>
      </div>
      <div class="bar">
        <div class="item" :class="{selected:idx==activeIndex}" v-for="(i,idx) in infos" @click="change(idx)"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import ajax from '../assets/js/ajaxService';

  export default{
    data() {
      let self = this;
      return {
        infos: [{}
        ],
        activeIndex: 0,
        opts: {
          start: 0,
          dir: 'v',
          duration: 500,
          beforeChange: function (prev, next) {

          },
          afterChange: function (prev, next) {
            self.activeIndex = next;
          }
        }
      }
    },
    computed: {
//      activeIndex(){
//        return this.$refs.fullpage == null ? 0 : this.$refs.fullpage.$fullpage.curIndex;
//      }
    },
    methods: {
      moveNext(){
        this.$refs.fullpage.$fullpage.moveNext(); //Move to the next page
      },
      jump(url){
        this.$router.push(url);
      },
      change(index){
        let self = this;
        let v = function () {
          let i = self.$refs.fullpage.$fullpage.curIndex;
          if (index == i)
            return;
          if (index > i) {
            self.$refs.fullpage.$fullpage.moveNext(); //Move to the next page
          } else {
            self.$refs.fullpage.$fullpage.movePrev(); //Move to the next page
          }

          setTimeout(v, 300);
        };
        v();
      }
    },
    mounted(){
      ajax.get('/index').then(infos => {
        this.infos = infos;
        setTimeout(() => {
          this.$refs.fullpage.$fullpage.$update();
        }, 1000);
      });

    }
  }
</script>
<style lang="scss">
  @import "../assets/css/index.scss";
</style>
