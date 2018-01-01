<template>
  <div class="fullpage-container" @keyup="keyup($event)">
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page" v-for="i in infos">
        <div class="part  mask">
          <img :src="i.image"/>
        </div>
        <div class="title songti" v-animate="{value:'slideInDown'}">{{i.title}}</div>
        <div class="hoverButton" v-animate="{value:'pulse'}" style="z-index:1;" @click="jump(i.url)">
          <span>{{i.enter}}</span>
        </div>
      </div>
    </div>
    <div class="bar">
      <div class="item" :class="{selected:idx==activeIndex}" v-for="(i,idx) in infos" @click="change(idx)"></div>
    </div>
  </div>
</template>
<script>
  import ajax from '../assets/js/ajaxService';

  export default{
    data() {
      let self=this;
      return {
        infos: [{}
        ],
        activeIndex:0,
        opts: {
          start: 0,
          dir: 'v',
          duration: 500,
          beforeChange: function (prev, next) {

          },
          afterChange: function (prev, next) {
            self.activeIndex=next;
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
  .fullpage-container {

    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
  }

  .part {
    position: absolute;

    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;

      @media screen and (max-width: 780px) {
        width: auto;
      }
    }
  }

  .page {
    .title {
      position: relative;
      text-align: center;
      margin: 0 auto;
      top: 35vh;
      width: 80%;
      color: #fff;
      font-size: 1rem;
      z-index: 1;
      margin-left:10%;
      text-shadow: 2px 3px 10px #555;
      @media screen and (max-width: 780px) {
        /*font-size: .6rem;*/
        top: 38vh;
      }
    }
    .mask:after{
      opacity: .3;
    }
    .hoverButton {
      position: relative;
      top: 43vh;
      margin: 0 auto;
      font-size: .3rem;
    }

  }

  .bar {
    position: fixed;
    width: 1rem;
    right: 0.2rem;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    .item {
      margin: 0 auto;
      border-radius: .8rem;
      width: .15rem;
      height: .15rem;
      border: .03rem #fff solid;
      background-color: #fff;
      position: relative;
      margin-top: .2rem;
      opacity: .5;
      transition: opacity .5s;
      cursor: pointer;
    }
    .selected {
      opacity: 1;
      background-color: transparent;
    }
    .item:hover {
      opacity: .9;
    }
  }
</style>
