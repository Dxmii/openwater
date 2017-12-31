<template>
  <div id="fullpage">
    <div class="section">第一屏</div>
    <div class="section">第二屏</div>
    <div class="section">
      <div class="slide">第三屏的第一屏</div>
      <div class="slide">第三屏的第二屏</div>
      <div class="slide">第三屏的第三屏</div>
      <div class="slide">第三屏的第四屏</div>
    </div>
    <div class="section">第四屏</div>
  </div>
</template>
<script>
  export default{
      mounted(){
        $(function(){
          $('#fullpage').fullpage();
        });
      }
  }
</script>
<style></style>
