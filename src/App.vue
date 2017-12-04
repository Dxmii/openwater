<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="navi">
      <!--<i style="margin-left:40px;margin-top:30px"-->
      <!--v-bind:class="{'menu-icon':!showNavi,'el-icon-arrow-right':showNavi}"-->
      <!--@click="showNavi = !showNavi"></i>-->
      <div class="Menu_link" @click="showNavi = !showNavi">
        <span v-bind:class="{'Menu_hamburger':true,'Menu_init_animateIn':!showNavi,'Menu_animateIn':showNavi}">
        </span></div>
    </div>
    <div v-bind:class="{naviMenu:true,naviShow:showNavi}" v-show="showNavi">
      <div class="logo">OpenWater</div>
      <div v-bind:class="{menuPanel:true,menuShow:showNavi}">

        <div @mouseenter="movePointer(item.path)" @mouseleave="movePointer(selection)"
             v-bind:class="{menuItem:true,selected:item.path==selection}" v-for="item in navi" :ref="item.path"
             @click="selection = item.path">
          <router-link :to="item.path" tag="div" @click.native="showNavi=false">{{item.name}}</router-link>
        </div>
      </div>
      <div class="pointer" ref="pointer"
           style="position:absolute;left:0;top:0;height:2.4em;width:2px;background:#597;"></div>
    </div>
    <div class="mainPanel">
      <router-view></router-view>
    </div>
    <div style="position: fixed;  width: 100%;  height: 100%;  top: 0;  left: 0;  margin: 0 0;
  background: #111;  Opacity: 0.5;  z-index: 30;" v-show="showNavi" @click="showNavi=false"></div>
  </div>
</template>

<script>
  import ajax from './assets/js/ajaxService'

  let intv = 0;
  export default {
    name: 'app',
    data () {
      return {
        showNavi: false,
        selection: '/',
        navi: [],
      }
    },
    mounted(){
      ajax.get('/navi').then(r => {
        this.navi = r;
      });

    },
    methods: {
      movePointer(item){
        let p = this.$refs[item][0];
        const pp = this.$refs['pointer'];
        let r = p.parentElement.offsetTop + p.offsetTop;
        let o = pp.offsetTop;
        let d = r > o;
        let f = () => {
          pp.style.top = (d ? o += 8 : o -= 8) + 'px';
          if ((d && o > r) || (!d && o < r)) {
            window.clearInterval(intv);
          }
        };

        window.clearInterval(intv);
        intv = setInterval(f, 20);
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
  @import "./assets/css/comm.scss";
</style>
