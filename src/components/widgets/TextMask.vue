<template>
  <div
    style="padding:20px 30px;font-size:16px;color:#fff;position:absolute;width:100%;height:50%;top:50%;opacity:0.8;background:#000000;float:left">
    <div class="line" style="position: relative;color:#fff;left:10px;top:10px;width:100px;"></div>
    <div style="margin-top:20px;">{{note.title}}</div>
    <div style="margin-top:20px;">{{note.about}}</div>
  </div>

</template>
<script>
  export default{
    name: 'TexkMask',
    data(){
      return {};
    },
  }
</script>
