<template>
  <div id="reserveDetail">
    <div
      class="top"
      :style="reserveBgImg"
    >
      <span class="black-btn" @click="blackBtn">
        <img src="../../../static/header-back-icon-1.png" alt>
      </span>
      <i class="iconfont"></i>
    </div>
    <div class="guang-name">
      <p>
        {{resultList.shopName}}
        <span class="pull-right" style="color: #fa3338;">4.0分</span>
      </p>
      <p class="vipprice">
        300
        <span class="danwei">马力/人</span>
        &nbsp;&nbsp;
        <mt-badge type="warning" size="large">会员价 50</mt-badge>
        <i class="iconfont iconxingxing pull-right"></i>
          <i class="iconfont iconxingxing1 pull-right"></i>
          <i class="iconfont iconxingxing1 pull-right"></i>
          <i class="iconfont iconxingxing1 pull-right"></i>
          <i class="iconfont iconxingxing1 pull-right"></i>
      </p>
    </div>
    <div class="my-cell">
      <div>
        <i class="iconfont iconweizhi" style="color: #fa3338"></i>
        &nbsp;
        长沙市岳麓区岳麓大道110申奥美域15栋
      </div>
      <img class src="../../../static/rg-arrow.png" alt>
    </div>
    <div class="test-picker">
      <p style="color: #333333">体验事项选择</p>
      <ul class="date-picker">
        <li>
          <span>预约日期</span>
          <button @click="openPicker">{{btnDefauleStart}}</button>
        </li>
        <!-- <li>
          <span>结束日期</span>
          <button>2019-01-01</button>
        </li> -->
        <li>
          <span>预约教练</span>
          <button
            @click="selectCoach"
            style="border-color: transparent; color: rgb(250, 51, 56);"
          >欧阳洋洋 ></button>
        </li>
      </ul>
    </div>
    <p class="baogao">
      <span>
        体检保险
        <i class="iconfont iconwenhao"></i>
      </span>
      <span>
        <label for="a">50马力</label>
        <input id="a" type="radio" name="mali" v-model="maliNumber" value="0">
      </span>
      <span>
        <label for="b">20马力</label>
        <input id="b" type="radio" name="mali" v-model="maliNumber" value="1">
      </span>
    </p>
    <mt-navbar v-model="selected" class="tishi">
      <mt-tab-item id="1">温馨提示</mt-tab-item>
      <mt-tab-item id="2">场地介绍</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="wenxts">
          <li>
            <em>●&nbsp;&nbsp;</em>您的会员类型为：体验馆
          </li>
          <li>
            <em>●&nbsp;&nbsp;</em>体验剩余次数为：
            <em>5次</em>
          </li>
          <li>
            <em>●&nbsp;&nbsp;</em>体验馆开放时间为：全天
          </li>
          <li>
            <em>●&nbsp;&nbsp;</em>体验馆每张会员卡同时间段限制预约1次
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">暂无</mt-tab-container-item>
    </mt-tab-container>
    <div class="dingdan">
      <span>总价：</span>
      350马力
      <button class="pull-right" @click="submit">提交订单</button>
    </div>
    <mt-datetime-picker
      v-model="startDateVal"
      ref="datePicker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      @confirm="handleStart"
    ></mt-datetime-picker>
    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resultList: {},
      reserveBgImg: "background: url('http://app.bh8341.com/upload/base/1904/J3a4vK9fzH.jpg') no-repeat center center",
      startDateVal: "",
      startDate: new Date(),
      btnDefauleStart:
        new Date().getFullYear() +
        (new Date().getMonth() < 9
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1) +
        (new Date().getDate() < 9
          ? "0" + new Date().getDate()
          : new Date().getDate()),
      popupVisible: false,
      maliNumber: "1",
      selected: "1",
      slots: [
        {
          flex: 1,
          values: ["欧阳洋洋"],
          className: "picker-content",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    blackBtn() {
      this.$router.go(-1);
    },
    otherPage() {
      this.$router.push("/");
    },
    openPicker() {
      this.$refs["datePicker"].open();
    },
    handleStart(value) {
      value = new Date(value);
      this.btnDefauleStart =
        value.getFullYear() +
        (value.getMonth() < 9
          ? "0" + (value.getMonth() + 1)
          : value.getMonth() + 1) +
        (value.getDate() < 9 ? "0" + value.getDate() : value.getDate());
    },
    selectCoach() {
      this.popupVisible = true;
    },
    onValuesChange(picker, values) {
      console.log(values);
      // this.popupVisible = false;
      // this.$messagebox.alert(values);
    },
    submit() {
      this.myAjax.postData(
        "index/subscribe",
        result => {
          this.reserve = result;
        },
        () => {},
        {
          baseId: this.$route.query.baseId,
          subscribeDate: this.btnDefauleStart
        },
        this
      );
    }
  },
  created() {
    this.myAjax.postData(
      "index/getBaseData",
      result => {
        this.resultList = result;
        // console.log(this.resultList, 56);
        this.reserveBgImg =
          "background: url('" +
          this.myAjax.apiRoot +
          this.resultList.pic +
          "') no-repeat center center";
        console.log(result.list, 80);
      },
      () => {},
      { baseId: this.$route.query.baseId }
    );
  }
};
</script>
<style lang="scss" scope>
#reserveDetail {
  background-color: #f0f1f2;
  .picker-content {
    width: 100vw;
  }
  .guang-name {
    position: relative;
    background-color: #fff;
    border-radius: 50px;
    overflow: hidden;
    padding: 30px 20px;
    margin-top: -30px;
  }
  .top {
    position: relative;
    height: 380px;
    background-size: 100% 100% !important;
  }
  span.black-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    img {
      width: 25px;
    }
  }
  .vipprice {
    font-size: 36px;
    color: #fa3338;
    .danwei {
      font-size: 23px;
    }
  }
  .test-picker {
    padding: 28px 22px;
    background-color: #fff;
    > p:nth-of-type(1) {
      font-size: 33px;
    }
    > ul {
      padding: 30px 0;
      display: flex;
      justify-content: space-around;
      > li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
          font-size: 24px;
          color: #999999;
        }
        button {
          border-width: 1.389px;
          border-color: rgb(250, 51, 56);
          border-style: solid;
          border-radius: 7px;
          padding: 0 9px;
          height: 53.222px;
          font-size: 28px;
          color: #333333;
          background-color: #fff;
        }
      }
    }
  }
  .baogao {
    display: flex;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
    > span {
      height: 30px;
      line-height: 30px;
      color: #333;
      margin-left: 40px;
      input {
        vertical-align: middle;
        height: 30px;
        width: 30px;
        vertical-align: text-bottom;
      }
    }
    > span:nth-of-type(2),
    > span:nth-of-type(3) {
      color: rgb(250, 51, 56);
    }
  }
  .tishi {
    margin-top: 30px;
    .mint-tab-item-label {
      color: #333;
      font-size: 33px;
    }
    .is-selected {
      border-bottom-color: #fa3338;
      text-decoration-line: none;
      color: #fa3338;
      .mint-tab-item-label {
        color: rgb(250, 51, 56);
      }
    }
  }
  .wenxts {
    background-color: #fff;
    margin: 5px 0;
    padding: 0 35px;
    > li {
      height: 45px;
      line-height: 45px;
      font-size: 26px;
      color: #333333;
      em {
        color: rgb(250, 51, 56);
      }
    }
  }
  .dingdan {
    background-color: #fff;
    height: 100px;
    line-height: 100px;
    color: #fa3338;
    font-size: 33px;
    text-indent: 22px;
    span {
      font-size: 26px;
      color: #fa3338;
    }
    button {
      height: 100px;
      line-height: 100px;
      text-align: cneter;
      color: #fff;
      background-color: #fa3338;
      padding: 0 90px;
    }
  }
}
</style>
