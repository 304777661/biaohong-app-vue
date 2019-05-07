<template>
  <div id="becomeXLR">
    <header class="clearfix">
      <img @click="blackPage" src="../../../static/header-back-icon-1.png" alt>
      成为段长
      <span @click="pickerAddre">
        {{selectedName}}
        <i class="iconfont iconxiala"></i>
      </span>
    </header>
    <ul>
      <li>
        <span>支付账户</span>
        <b>
          <img src="../../../static/mali-icon.png" alt> 马力支付
        </b>
      </li>
      <li>支付额度</li>
      <li>
        <b>￥1000.00</b>
      </li>
      <li>
        <button @click="submit">立即支付</button>
      </li>
    </ul>
    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
      <mt-picker ref="pickerAddress" :slots="slots" value-key="G_CName" :show-toolbar="true">
        <span class="mint-datetime-action mint-datetime-cancel" @click="handleCancel">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="handleConfirm">确认</span>
      </mt-picker>
    </mt-popup>
  </div>
</template>
<script>
export default {
  name: "becomeDZ",
  components: {},
  data() {
    return {
      result: null,
      currentTags: null,
      selectedName: "选择省份",
      rgUrl: require("../../../static/jilu-back.png"),
      popupVisible: false
    };
  },
  methods: {
    blackPage() {
      this.$router.go(-1);
    },
    rgClick() {},
    pickerAddre() {
      //   alert(0);
      this.popupVisible = true;
    },
    handleConfirm() {
      this.currentTags = this.$refs.pickerAddress.getValues()[0];
      this.selectedName = this.currentTags.G_CName;
      this.popupVisible = false;
    },
    handleCancel() {
      this.popupVisible = false;
    },
    submit() {
      this.myAjax.postData(
        "settle/payCard",
        result => {
          this.$router.push("/recharge");
        },
        () => {},
        {
          cardId: this.$route.params.id,
          affiliation: this.currentTags.GroupID
        },
        this
      );
    }
  },
  created() {
    let that = this;
    this.myAjax.postData(
      "area/loadAreaList",
      result => {
        this.result = result;
        this.$messagebox.alert("请先选择省份").then(() => {
          that.popupVisible = true;
        });
      },
      () => {},
      {
        gpId: 0
      }
    );
  },
  computed: {
    slots() {
      return [
        {
          flex: 1,
          values: this.result,
          className: "picker-content",
          textAlign: "center"
        }
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
#becomeXLR {
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
      top: 0;
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

        img {
          width: 35px;
          height: 35px;
          vertical-align: middle;
        }
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
