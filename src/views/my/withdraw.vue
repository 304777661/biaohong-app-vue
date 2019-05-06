<template>
  <div id="withdraw">
    <headerpage :title_page="title_page='提现'" :backBtn="backBtn=2" :rgUrl="rgUrl"></headerpage>
    <ul>
      <li>
        <span>到账账户</span>
        <b>
          <i class="iconfont iconweixinzhanghao"></i> 微信账户
        </b>
      </li>
      <li>提现额度</li>
      <li>
        <input type="text" placeholder="请输入提现金额/元(比例为1:0.9)" v-model="meneyTotal">
        &nbsp;&nbsp;
        <span>= {{this.tixianRMB||0}}元</span>
      </li>
      <li>
        <span>账户额度：{{result.stampMoney}}</span>
        <span @click="allTixian">全部提现</span>
      </li>
      <li>
        <button @click="submit">提现</button>
      </li>
    </ul>
  </div>
</template>
<script>
import headerpage from "../../components/header";
export default {
  name: "withdraw",
  components: {
    headerpage
  },
  data() {
    return {
      rgUrl: require("../../../static/jilu-back.png"),
      result: null,
      meneyTotal: ""
    };
  },
  computed: {
    tixianRMB() {
      return this.meneyTotal * 0.9;
    }
  },
  methods: {
    allTixian() {
      this.meneyTotal = this.result.stampMoney;
    },
    submit() {
      this.myAjax.postData(
        "center/withdraw",
        result => {
          this.result = result;
        },
        () => {},
        { stampMoney: this.meneyTotal, withdrawMoney: this.tixianRMB },
        this
      );
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
#withdraw {
  //   padding: 20px;
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
        width: 400px;
      }
      margin-top: 48px;
      display: flex;
      align-items: center;

      b {
        font-size: 56px;
      }
      span {
        font-size: 26px;
      }
      //   border-bottom: 1px solid #e5e5e5;
    }
    li:nth-of-type(4) {
      display: flex;
      margin-top: 50px;
      justify-content: space-between;
      span:nth-of-type(1) {
        font-size: 26px;
        color: #666666;
      }
      span:nth-of-type(2) {
        font-size: 29px;
        color: #fa3338;
      }
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
