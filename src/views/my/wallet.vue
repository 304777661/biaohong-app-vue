<template>
  <div id="wallet">
    <headerpage :title_page="title_page='我的钱包'" :backBtn="backBtn=1" :rgUrl="rgUrl"></headerpage>
    <ul>
      <li>
        <div class="piaoma">
          <ul>
            <li>STAMP 油票</li>
            <li>
              <b>{{result.stampMoney/100}}</b>
            </li>
            <li>1油票 = 0.9元</li>
          </ul>
          <img src="../../../static/piao-icon.png" alt>
        </div>
        <div class="tizhuang">
          <span @click="withdraw">提现</span>
          <span>｜</span>
          <span @click="change">转换</span>
        </div>
      </li>
      <li>
        <div class="piaoma">
          <ul>
            <li>SOUP 马力</li>
            <li>
              <b>{{result.mlMoney/100}}</b>
            </li>
            <!-- <li>≈316.390CNY</li>
            <li>期权股：0.52%</li>-->
          </ul>
          <img src="../../../static/mali-icon.png" alt>
        </div>
        <div class="tizhuang">
          <span @click="recharge">充值</span>
          <!-- <span>｜</span>
          <span @click="change">转换</span>-->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import headerpage from "../../components/header";
export default {
  name: "Wallet",
  components: {
    headerpage
  },
  data() {
    return {
      rgUrl: require("../../../static/jilu.png"),
      result: null
    };
  },
  methods: {
    recharge(arg = "") {
      this.$router.push(`/recharge?id=${arg}`);
    },
    withdraw(arg = "") {
      this.$router.push(`/withdraw?id=${arg}`);
    },
    change(arg = "") {
      this.$router.push(`/change?id=${arg}`);
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
#wallet {
  > ul {
    padding: 40px 22px;
    > li {
      margin-bottom: 40px;
      //   height: 300px;
      background-color: #ffffff;
      box-shadow: 0px 2px 17px 0px rgba(51, 51, 51, 0.5);
      border-radius: 14px;
      div.piaoma {
        // height: 220px;
        padding: 45px 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul {
          > li {
            color: #666666;
            font-size: 30px;
            b {
              font-size: 34px;
              color: #333333;
            }
          }
          > li:nth-of-type(1) {
            margin-bottom: 30px;
          }
        }
        img {
          width: 112px;
          height: 112px;
        }
      }
      div.tizhuang {
        height: 80px;
        background-color: #f0f0f0;
        border-radius: 0px 0px 14px 14px;
        font-size: 30px;
        color: #333333;
        display: flex;
        justify-content: space-around;
        align-items: center;
        > span:nth-of-type(1),
        > span:nth-of-type(3) {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
</style>
