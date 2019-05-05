<template>
  <div class="my-center">
    <headerpage
      :title_page="title_page='个人中心'"
      :backBtn="backBtn=0"
      :rgUrl="rgUrl='./static/setting-icon.png'"
      @headerRg="headerRg"
    ></headerpage>
    <div class="avater" style="background: url('./static/geren-header-bg.png') center no-repeat;">
      <div class="avater-min">
        <div>
          <img src="../../../static/oneself-header.png" alt>
        </div>
        <div>
          <p>{{result.userName||"暂无"}}</p>
          <p>ID：{{result.userId}}</p>
        </div>
      </div>
      <div class="level-star">
        <p>{{result.uplevel}}星</p>
        <p v-show="result.uplevel==0">普通会员</p>
        <p v-show="result.uplevel==1">VIP会员</p>
        <p v-show="result.uplevel==2">一星会员</p>
        <p v-show="result.uplevel==3">二星会员</p>
        <p v-show="result.uplevel==4">三星会员</p>
        <p v-show="result.uplevel==5">四星会员</p>
        <p v-show="result.uplevel==6">五星会员</p>
        <p v-show="result.uplevel==100">创始会员</p>
      </div>
    </div>
    <div class="geren-type">
      <div
        v-for="(item, index) of vipCardList"
        :key="index"
        :data-id="item.cardNo"
        @click="pickerBuyType(item)"
      >
        <p v-show="item.cardType==2||item.cardType==3">成为</p>
        <span v-show="item.cardType==1">体验官</span>

        <span v-show="item.cardType==2">
          <font color="#333">
            <b>修路人</b>
          </font>
        </span>
        <span v-show="item.cardType==3">
          <font color="#333">
            <b>段长</b>
          </font>
        </span>
      </div>
    </div>
    <!-- <div class="book-nav">
      <router-link tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon1.png" alt>
        <span>我的会员卡</span>
      </router-link>
      <router-link tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon2.png" alt>
        <span>我的预约</span>
      </router-link>
      <router-link tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon3.png" alt>
        <span>我的推荐</span>
      </router-link>
      <router-link tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon4.png" alt>
        <span>我的返佣</span>
      </router-link>
    </div>-->
    <ul style="margin: 16px 0 24px 0;">
      <router-link class="many-nav" tag="a" to="/wallet">
        <img src="../../../static/book-nav-icon4.png" alt>
        <span>我的钱包</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <router-link class="many-nav" tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon1.png" alt>
        <span>我的会员卡</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <router-link class="many-nav" tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon2.png" alt>
        <span>我的预约</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <router-link class="many-nav" tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon3.png" alt>
        <span>我的推荐</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <!-- <router-link class="many-nav" tag="a" to="/my" @click.native="noServe">
        <img src="../../../static/book-nav-icon4.png" alt>
        <span>我的返佣</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>-->
      <!-- <router-link tag="a" to="/my" class="many-nav">
        <img src="../../../static/mycenter-icon-1.png" alt>
        <span>派送</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <router-link tag="a" to="/my" class="many-nav">
        <img src="../../../static/mycenter-icon-2.png" alt>
        <span>加权分红</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>-->
      <router-link tag="a" to="/my" class="many-nav">
        <img src="../../../static/mycenter-icon-3.png" alt>
        <span>系统消息</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <a class="many-nav" :href="'tel:'+lianxiphone">
        <img src="../../../static/mycenter-icon-4.png" alt>
        <span>联系官方</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </a>
    </ul>
    <!-- <div class="exit" @click="exitLogin" style="margin: 24px 0;">退出登录</div> -->
    <footernav :imgActive="imgActive=5"></footernav>

    <mt-popup
      value-key="index"
      v-model="popupVisible"
      position="bottom"
      popup-transition="popup-fade"
    >
      <mt-picker valueKey="name" :data-levelren="levelren" :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import headerpage from "../../components/header";
import footernav from "../../components/footer";
export default {
  components: {
    headerpage,
    footernav
  },
  data() {
    return {
      avaterbgUrl: require("../../../static/geren-header-bg.png"),
      result: "",
      vipCardList: "",
      lianxiphone: "",
      popupVisible: false,
      levelren: 0,
      slots: [
        {
          flex: 1,
          defaultIndex: 2,
          // values: ["余额支付", "微信支付", "取消"],
          values: [
            { id: "1", name: "余额支付" },
            { id: "2", name: "微信支付" },
            { id: "0", name: "取消" }
          ],

          className: "picker-content",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    headerRg(arg = 1) {
      this.$router.push(`/selfInfor/${arg}`);
    },
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
      return false;
    },

    pickerBuyType(arg) {
      // console.log(arg, 654);
      if (this.result.usertype >= arg.cardType) {
        this.$messagebox.alert("您已是该级别");
      } else {
        // this.levelren = arg.cardType - 1;
        // this.popupVisible = true;
        if (arg.cardType == 1) {
          this.myAjax.postData(
            "settle/payCard",
            result => {
              this.$router.push("/recharge");
            },
            () => {},
            { cardId: arg.id, affiliation: 0 },
            this
          );
        }
        if (arg.cardType == 2) {
          this.$router.push("/becomeXLR/" + arg.id);
        }
        if (arg.cardType == 3) {
          this.$router.push("/becomeDZ/" + arg.id);
        }
      }
    },
    onValuesChange(picker, values) {
      this.popupVisible = false;
      if (values[0].id == 1) {
        let index = picker.$el.dataset.levelren;
        this.overBuy(this.vipCardList[index]);
      }
      if (values[0].id == 2) {
        let index = picker.$el.dataset.levelren;
        this.wechatBuy(this.vipCardList[index]);
      }
      // this.$messagebox.alert(values);
    },
    noServe() {
      this.$messagebox.alert("敬请期待", "暂未开放");
    },
    overBuy() {},
    wechatBuy(arg) {
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
          fee: 0.01 * arg.price,
          token: localStorage.token,
          cardId: arg.id,
          body: "标题1",
          subject: "标题2"
        },
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
    this.myAjax.postData(
      "card/queryCardList",
      result => {
        this.vipCardList = result;
      },
      () => {},
      {}
    );
    this.myAjax.postData(
      "center/querySystemTelList",
      result => {
        this.lianxiphone = result[0].dataCode;
      },
      () => {},
      {}
    );
  }
};
</script>

<style lang='scss' scoped>
div.my-center {
  padding-bottom: 100px;
  background-color: #fff;
  .avater {
    display: flex;

    background-size: 100% 100%;
    align-items: center;
    justify-content: space-between;
    height: 260px;
    padding: 40px 80px 70px 20px;
  }
  .avater-min {
    display: flex;
    align-items: center;

    > div:nth-of-type(1) {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      img {
        height: 150px;
        width: 150px;
      }
    }
    > div:nth-of-type(2) {
      margin-left: 15px;
      p:nth-of-type(1) {
        font-size: 34px;
        color: #fff;
      }
      p:nth-of-type(2) {
        font-size: 34px;
        color: #fff;
      }
    }
  }
  .level-star {
    font-size: 34px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    p {
      text-align: center;
    }
  }
  .geren-type {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 1px 47.7px 5.3px rgba(51, 51, 51, 0.2);
    height: 125px;
    width: 90%;
    margin: 0 auto;
    margin-top: -55px;
    border-bottom: 1px solid #efefef;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      text-align: center;
      p {
        text-align: center;
        font-size: 26px;
        color: #666666;
      }
      span {
        font-size: 35px;
        color: #fa3338;
      }
    }
  }
  .book-nav {
    height: 140px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    a {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      color: #666666;
      > img {
        width: 70px;
      }
      > span {
        margin-top: 15px;
      }
    }
  }
  .exit {
    height: 88px;
    line-height: 88px;
    font-size: 33px;
    color: #ff0000;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
  }
}
</style>

