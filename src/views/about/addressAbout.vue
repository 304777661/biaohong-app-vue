<template>
  <div class="about">
    <ul class="tab-switch">
      <li @click="otherPagr(1);">
        <span>骉圈</span>
        <i></i>
      </li>
      <li @click="otherPagr(2);">
        <span>资讯</span>
        <i></i>
      </li>
      <li :class="{active:tabSwitch==3}" @click="baseAbout();tabSwitch=3">
        <span>基地周边</span>
        <i></i>
      </li>
    </ul>
    <ul class="tab-switch-white">
      <li :class="{active:tabSwitch==1}" @click="active='one'">
        <span>推荐</span>
      </li>
      <li :class="{active:tabSwitch==2}" @click="active='two'">
        <span>4S店</span>
      </li>
      <li :class="{active:tabSwitch==3}" @click="active='three'">
        <span>超市</span>
      </li>
      <li :class="{active:tabSwitch==4}" @click="active='four'">
        <span>餐厅</span>
      </li>
    </ul>
    <!-- <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      <mt-tab-container-item id="one">1111111</mt-tab-container-item>
      <mt-tab-container-item id="two">2222222</mt-tab-container-item>
      <mt-tab-container-item id="three">33333</mt-tab-container-item>
      <mt-tab-container-item id="four">4444</mt-tab-container-item>
    </mt-tab-container>-->
    <div>
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="one">
          <ul class="tab-container-line">
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div>
            <ul class="tuijian">
              <li>
                <div>
                  <img src="../../../static/4sdian-img.png" alt>
                </div>
                <div>
                  <p>湖南申湘天程-一汽丰田4S店</p>
                  <p>
                    <i class="iconfont iconhuore"></i> 2365人去过
                  </p>
                  <p class="yunyedate">
                    <i class="iconfont iconzhong"></i>
                    09:00-18:00
                    <span class="pull-right">喜盈门/喜乐地 1.9km</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="two">
          <ul class="tab-container-line">
            <li>
              <i></i>
            </li>
            <li class="active">
              <i></i>
            </li>
            <li>
              <i></i>
            </li>
            <li>
              <i></i>
            </li>
          </ul>
          <div>
            <ul class="tuijian">
              <li>
                <div>
                  <img src="../../../static/4sdian-img.png" alt>
                </div>
                <div>
                  <p>湖南申湘天程-一汽丰田4S店</p>
                  <p>
                    <i class="iconfont iconhuore"></i> 2365人去过
                  </p>
                  <p class="yunyedate">
                    <i class="iconfont iconzhong"></i>
                    09:00-18:00
                    <span class="pull-right">喜盈门/喜乐地 1.9km</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="three">
          <ul class="tab-container-line">
            <li>
              <i></i>
            </li>
            <li>
              <i></i>
            </li>
            <li class="active">
              <i></i>
            </li>
            <li>
              <i></i>
            </li>
          </ul>
          <div>
            <ul class="tuijian">
              <li>
                <div>
                  <img src="../../../static/4sdian-img.png" alt>
                </div>
                <div>
                  <p>湖南申湘天程-一汽丰田4S店</p>
                  <p>
                    <i class="iconfont iconhuore"></i> 2365人去过
                  </p>
                  <p class="yunyedate">
                    <i class="iconfont iconzhong"></i>
                    09:00-18:00
                    <span class="pull-right">喜盈门/喜乐地 1.9km</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="four">
          <ul class="tab-container-line">
            <li>
              <i></i>
            </li>
            <li>
              <i></i>
            </li>
            <li>
              <i></i>
            </li>
            <li class="active">
              <i></i>
            </li>
          </ul>
          <div>
            <ul class="tuijian">
              <li>
                <div>
                  <img src="../../../static/4sdian-img.png" alt>
                </div>
                <div>
                  <p>湖南申湘天程-一汽丰田4S店</p>
                  <p>
                    <i class="iconfont iconhuore"></i> 2365人去过
                  </p>
                  <p class="yunyedate">
                    <i class="iconfont iconzhong"></i>
                    09:00-18:00
                    <span class="pull-right">喜盈门/喜乐地 1.9km</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

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
      resultList: [],
      tabSwitch: 3,
      active: "one"
    };
  },
  created() {},
  mounted() {},
  methods: {
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
    },
    otherPagr(arg) {
      this.$router.push(`/about?tabSwitch=${arg}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.tuijian {
  padding: 28px 17px;
  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    > div:nth-of-type(1) {
      width: 150px;
      height: 125px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    > div:nth-of-type(2) {
      flex-grow: 1;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p:nth-of-type(1) {
        font-size: 32px;
        color: #191919;
      }
      p:nth-of-type(2) {
        font-size: 26px;
        color: #333333;
      }
      p:nth-of-type(3) {
        font-size: 26px;
        color: #666666;
      }
    }
  }
}

div.about {
  padding-bottom: 130px;
  background-color: #fff;
  color: #333;

  header {
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 36px;
    background-color: #e60012;
    color: #fefefe;
  }
}
.iconhuore {
  color: #e60012;
}
</style>
