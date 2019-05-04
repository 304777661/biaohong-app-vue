<template>
  <div id="becomeDZ">
    <header class="clearfix">
      <img @click="blackPage" src="../../../static/header-back-icon-1.png" alt>
      成为段长
      <span @click="asc">
        选择基地
        <i class="iconfont iconxiala"></i>
      </span>
    </header>
    <ul>
      <li>
        <span>支付账户</span>
        <b>
          <i class="iconfont iconweixinzhanghao"></i> 微信支付
        </b>
      </li>
      <li>支付额度</li>
      <li>
        <b>￥5000.00</b>
      </li>
      <li>
        <button>立即支付</button>
      </li>
    </ul>
    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
      <mt-picker :slots="slots"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  name: "becomeDZ",
  components: {},
  data() {
    return {
      rgUrl: require("../../../static/jilu-back.png"),
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: ["长沙", "株洲", "湘潭"],
          className: "picker-content",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    blackPage() {
      this.$router.go(-1);
    },
    rgClick() {},
    asc() {
      alert(0);
      this.popupVisible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
#becomeDZ {
  //   padding: 20px;
  header {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 36px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-bottom: 1px solid #e5e5e5;
    img:nth-of-type(1) {
      position: absolute;
      left: 0;
      width: 25px;
      padding-left: 34px;
      //   padding-top: 18px;
      height: 44px;
    }
    span:nth-of-type(1) {
      position: absolute;
      right: 0;
      font-size: 29px;
      color: #999999;
      padding-right: 34px;
      //   padding-top: 18px;
    }
  }
  > ul {
    margin: 20px;
    padding: 40px 40px 56px 40px;
    box-shadow: 0px 2px 17px 0px rgba(51, 51, 51, 0.5);
    border-radius: 14px;
    opacity: 0.98;
    li:nth-of-type(1) {
      font-size: 29px;
      display: flex;
      justify-content: space-between;
      span {
        color: #666666;
      }
      b {
        color: #333333;
        i {
          color: #41b035;
        }
      }
    }
    li:nth-of-type(2) {
      font-size: 26px;
      color: #666666;
      margin-top: 80px;
    }
    li:nth-of-type(3) {
      font-size: 40px;
      color: #333333;
      margin-top: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      b {
        font-size: 56px;
      }
      span {
        font-size: 26px;
      }
      //   border-bottom: 1px solid #e5e5e5;
    }
    li:last-child {
      text-align: center;
      margin-top: 70px;
      button {
        width: 556px;
        height: 84px;
        line-height: 82px;
        background-color: #fa3338;
        border-radius: 31px;
        font-size: 33px;
        color: #fefefe;
        text-align: center;
      }
    }
  }
}
</style>
