<template>
  <div>
    <header class="clearfix" :class="{whiteTitle:backBtn===2}">
      <img v-show="backBtn" @click="backImg" :src="backBtn===2?imgIconSrc_1:imgIconSrc">
      <span>{{title_page}}</span>
      <img v-show="rgUrl" :src="rgUrl" @click="headerRgClick">
    </header>
  </div>
</template>

<script>
export default {
  props: ["backBtn", "bgc", "title_page", "rgUrl"],
  data() {
    return {
      imgIconSrc: require("../../static/header-back-icon.png"),
      imgIconSrc_1: require("../../static/header-back-icon-1.png")
    };
  },
  created() {},
  mounted() {},
  methods: {
    backImg() {
      this.$router.go(-1);
    },
    headerRgClick() {
      this.$emit("headerRg");
    }
  }
};
</script>
 <style lang='scss' scoped>
header {
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-size: 36px;
  background-color: #e60012;
  color: #fefefe;
  img:nth-of-type(1) {
    // float: left;
    position: absolute;
    left: 0;
    padding-left: 34px;
    width: 24px;
    padding-top: 18px;
  }
  span {
    width: 500px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
  }
  img:nth-of-type(2) {
    // float: right;
    position: absolute;
    right: 0;
    padding-right: 34px;
    width: 40px;
    padding-top: 18px;
  }
}
header.whiteTitle {
  background-color: #fff;
  color: #333333;
  border-bottom: 1px solid #e5e5e5;
}
</style>
