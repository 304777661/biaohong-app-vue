<template>
  <div class="index">
    <header class="clearfix">基地会员卡</header>
    <ul class="card-list">
      <li v-for="(item, index) of listData" :key="index">
        <div class="card-type">
          <font color="#db683f">{{item.cardName}}</font>
          <font color="#995036">￥{{item.price*0.01}}</font>
        </div>
        <p>发行单位：{{item.issuer}}</p>
        <p>有效期：2018-12-12至2019-12-12</p>
        <div class="buy-btn">
          <span>卡号：{{item.cardNo}}</span>
          <button @click="buyVipCard(item)">立即购买</button>
        </div>
      </li>
    </ul>
    <footernav :imgActive="imgActive=3"></footernav>
  </div>
</template>
<script>
import footernav from "../../components/footer";

export default {
  components: {
    footernav
  },
  data() {
    return {
      listData: []
    };
  },
  created() {
    this.myAjax.postData(
      "card/queryCardList",
      result => {
        this.listData = result.resultData;
        console.log(this.listData, 234);
      },
      () => {}
    );
  },
  mounted() {},
  methods: {
    buyVipCard(arg) {
      this.myAjax.postData(
        "settle/weixinPay",
        result => {
          this.result = result;

          this.myAjax.postData(
            "settle/weixinPay",
            result => {
              this.result = result;
              console.log("发送支付的值：" + JSON.stringify(result.resultData));
              console.log("发送支付类型：", wxChannel);
              plus.payment.request(
                wxChannel,
                {
                  appid: result.resultData.appId,
                  noncestr: result.resultData.nonceStr,
                  package: result.resultData.package,
                  partnerid: result.resultData.partnerid,
                  prepayid: result.resultData.prepayId,
                  timestamp: +result.resultData.timeStamp,
                  sign: result.resultData.paySign
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
              fee: 0.01 * arg.price,
              token: localStorage.token,
              cardId: arg.id,
              body: "标题1",
              subject: "标题2"
            }
          );
        },
        () => {},
        {
          fee: 0.01 * arg.price,
          token: localStorage.token,
          cardId: arg.id,
          body: "标题1",
          subject: "标题2"
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
div.index {
  padding-bottom: 100px;
  background-color: #fff;

  header {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 36px;
    background-color: #e60012;
    color: #fefefe;
  }
  ul.card-list {
    padding: 28px 22px;
    > li {
      background: url("../../../static/address-vip-bg.png") no-repeat center;
      background-size: 100% 100%;
      padding: 40px 35px 28px;
      font-size: 25px;
      color: #f46969;
      margin-bottom: 20px;
      .card-type {
        font-size: 33.3px;
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
      }
      p {
        font-size: 25px;
        height: 40px;
        line-height: 40px;
      }
      .buy-btn {
        height: 70px;
        line-height: 70px;
        display: flex;
        justify-content: space-between;
        button {
          background: #db683f;
          color: #fff;
          height: 70px;
          line-height: 70px;
          padding: 0 30px;
          font-size: 30px;
          border-radius: 14px;
        }
      }
    }
  }
}
</style>

