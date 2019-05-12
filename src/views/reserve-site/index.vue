<template>
  <div id="site-reserve">
    <header class="clearfix">场地预约</header>
    <ul class="tab-switch">
      <li class="active" @click="address();tabSwitch=1">
        <span>
          长沙&nbsp;
          <span class="iconfont iconxiala"></span>
        </span>
      </li>
      <li :class="{active:tabSwitch==2}" @click="renqi();tabSwitch=2">
        <span>人气最高</span>
      </li>
      <li :class="{active:tabSwitch==3}" @click="zuijin();tabSwitch=3">
        <span>离我最近</span>
      </li>
      <li :class="{active:tabSwitch==4}" @click="haoping();tabSwitch=4">
        <span>好评优先</span>
      </li>
    </ul>
    <ul class="reserve-list">
      <li v-for="(item,index) of resultList.list" :key="index">
        <div>
          <!-- <img src="../../../static/reserve-list-img.png" alt> -->
          <img :src="resultList.baseUrl+item.pic" alt>
        </div>
        <div>
          {{item.shopName}}
          <button class="pull-right" @click="reserveDetail(item.shopId)">立即预约</button>
        </div>
        <div>
          <i class="iconfont iconweizhi"></i>
          {{item.addr}}
          <i
            class="iconfont iconxingxing pull-right"
            v-for="(item,index) of 5-item.grade"
            :key="index"
          ></i>
          <i
            class="iconfont iconxingxing1 pull-right"
            v-for="(item,index) of item.grade"
            :key="index"
          ></i>
          <!-- <i class="iconfont iconxingxing1 pull-right"></i> -->
        </div>
      </li>
    </ul>
    <footernav :imgActive="imgActive=2"></footernav>
    <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
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
      resultList: {},
      tabSwitch: 1,
      popupVisible: false,
      slots: [
        {
          flex: 1,
          values: ["长沙"],
          className: "picker-address",
          textAlign: "center"
        }
      ]
    };
  },
  created() {
    this.myAjax.postData(
      "index/loadBaseList",
      result => {
        this.resultList = result;
      },
      () => {},
      { AreaID: "" }
    );
  },
  mounted() {},
  methods: {
    address() {
      this.popupVisible = true;
    },
    renqi() {},
    zuijin() {},
    haoping() {},
    onValuesChange(picker, values) {
      console.log(values);
      // this.popupVisible = false;
      // this.$messagebox.alert(values);
    },
    reserveDetail(arg) {
      this.$router.push(`/ReserveDetail?baseId=${arg}`);
    },
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
    }
  }
};
</script>

<style lang="scss" scoped>
#site-reserve {
  .mint-popup {
    width: 100vw;
  }
  .reserve-list {
    padding: 20px 20px;
    background-color: #f0f1f2;
    > li {
      margin-bottom: 20px;
      background-color: #fff;
      div:nth-of-type(1) {
        width: 100%;
        height: 348px;
        border-radius: 14px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-of-type(2) {
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        font-size: 32px;
        color: #333333;
        button {
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 26px;
          color: #fff;
          background-color: #fa3338;
          padding: 0 25px;
          border-radius: 25px;
        }
      }
      div:nth-of-type(3) {
        margin-top: 5px;
        font-size: 26px;
        color: #999999;
        padding: 0 30px;
        i.iconweizhi {
          color: #fa3338;
        }
        i.iconxingxing,
        i.iconxingxing1 {
          color: #fa3338;
        }
      }
    }
  }
  header {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 36px;
    background-color: #e60012;
    color: #fefefe;
  }
  .tab-switch {
    li {
      span {
        color: rgba(255, 254, 254, 0.502);
      }
    }
    li.active {
      span {
        color: #fff;
      }
    }
  }
  .picker-address {
    width: 100vw;
  }
}
</style>
