<template>
  <div id="change">
    <headerpage :title_page="title_page='转换'" :backBtn="backBtn=2" :rgUrl="rgUrl"></headerpage>
    <ul>
      <li>
        <div>
          <img src="../../../static/piao-icon.png" alt> &nbsp;油票&nbsp;&nbsp;
          <img src="../../../static/sanjiao-xiala.png" alt>
        </div>
        <div>
          <i class="iconfont iconzhuanhuan3-copy"></i>
        </div>
        <div>
          <img src="../../../static/mali-icon.png" alt> &nbsp;马力&nbsp;&nbsp;
          <img src="../../../static/sanjiao-xiala.png" alt>
        </div>
      </li>
      <li>余额：{{result.stampMoney}}</li>
      <li>
        <input type="text" placeholder="请输入转换数量(比例为1:1)" v-model="zhuanghuan">
        &nbsp;&nbsp;
        <span>= {{zhuanghuan||0}}</span>
      </li>
      <li>
        <button @click="zhuanghuanFun">转换</button>
      </li>
    </ul>
  </div>
</template>
<script>
import headerpage from "../../components/header";
export default {
  name: "change",
  components: {
    headerpage
  },
  data() {
    return {
      rgUrl: require("../../../static/jilu-back.png"),
      result: { stampMoney: 0 },
      zhuanghuan: ""
    };
  },
  methods: {
    zhuanghuanFun() {
      if (this.zhuanghuan) {
        var that = this;
        this.myAjax.postData(
          "center/conversion",
          result => {
            // this.$toast("操作成功");
          },
          () => {},
          { stampMoney: this.zhuanghuan, mlMoney: this.zhuanghuan },
          this
        );
      } else {
        this.$toast("请输入转换数量");
      }
    }
  },
  created() {
    this.myAjax.postData(
      "center/getUserMsg",
      result => {
        this.result = result;
      },
      () => {},
      {}
    );
  }
};
</script>
<style lang="scss" scoped>
#change {
  //   padding: 20px;
  > ul {
    margin: 20px;
    padding: 40px 40px 56px 40px;
    box-shadow: 0px 2px 17px 0px rgba(51, 51, 51, 0.5);
    border-radius: 14px;
    opacity: 0.98;
    li:nth-of-type(1) {
      padding: 38px 80px 0;
      display: flex;
      font-size: 36px;
      color: #333333;
      justify-content: space-between;
      div {
        // display: flex;
        // justify-content: space-between;
        // align-items: center;
        > img:nth-of-type(1) {
          vertical-align: sub;
          width: 43px;
          height: 43px;
        }
        > img:nth-of-type(2) {
          width: 15px;
          height: 15px;
          //   line-height: 60px;
        }
      }
      > div:nth-of-type(2) {
        flex: 1;
        text-align: center;
        height: 43px;
        line-height: 43px;
      }
    }
    li:nth-of-type(2) {
      font-size: 26px;
      color: #666666;
      margin-top: 80px;
    }
    li:nth-of-type(3) {
      input {
        &::-webkit-input-placeholder {
          font-size: 24px;
        }
        border: 1px solid #dedede;
        display: inline-block;
        height: 70px;
        line-height: 70px;
        padding: 0 20px;
        font-size: 56px;
        font-weight: 600;
        font-size: 40px;
        color: #333333;
        // flex: 1;
        width: 300px;
      }
      margin-top: 48px;
      display: flex;
      // justify-content: space-between;
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
