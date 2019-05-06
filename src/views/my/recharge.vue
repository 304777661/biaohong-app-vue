<template>
  <div id="recharge">
    <headerpage :title_page="title_page='充值'" :backBtn="backBtn=2" :rgUrl="rgUrl"></headerpage>
    <ul>
      <li>
        <span>支付账户</span>
        <b>
          <i class="iconfont iconweixinzhifu"></i> 微信支付
        </b>
      </li>
      <li>充值额度</li>
      <li>
        ￥
        <input type="text" placeholder="请输入充值金额(元)" v-model="rechargeRMB">
        <!-- <b>1120.00</b> -->
      </li>
      <li>
        <button @click="rechargeWechat">充值</button>
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
      rgUrl: require("../../../static/jilu-back.png"),
      rechargeRMB: ""
    };
  },
  methods: {
    rechargeWechat() {
      this.myAjax.postData(
        "settle/weixinPay",
        result => {
          this.result = result;
          console.log("发送支付的值：" + JSON.stringify(result));
          console.log("发送支付类型：", wxChannel);
          plus.payment.request(
            wxChannel,
            {
              appid: result.appId,
              noncestr: result.nonceStr,
              package: result.package,
              partnerid: result.partnerid,
              prepayid: result.prepayId,
              timestamp: +result.timeStamp,
              sign: result.paySign
            },
            () => {
              alert("支付成功");
            },
            error => {
              alert("支付失败:" + JSON.stringify(error));
            }
          );
        },
        () => {},
        {
          fee: this.rechargeRMB,
          // token: localStorage.token,
          // cardId: arg.id,
          body: "标题1",
          subject: "标题2"
        },
        this
      );
    }
  }
};
</script>
<style lang="scss" scoped>
#recharge {
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
        display: inline-block;
        height: 70px;
        line-height: 70px;
        padding: 0 20px;
        font-size: 56px;
        font-weight: 600;
        font-size: 40px;
        color: #333333;

        &::-webkit-input-placeholder {
          font-size: 24px;
        }
      }
      margin-top: 48px;
      b {
        font-size: 56px;
      }
      border-bottom: 1px solid #e5e5e5;
    }
    li:nth-of-type(4) {
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
