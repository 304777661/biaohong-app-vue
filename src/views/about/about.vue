<template>
  <div class="about">
    <ul class="tab-switch">
      <li :class="{active:tabSwitch==1}" @click="biaoloop();tabSwitch=1">
        <span>骉圈</span>
        <i></i>
      </li>
      <li :class="{active:tabSwitch==2}" @click="news();tabSwitch=2">
        <span>资讯</span>
        <i></i>
      </li>
      <li :class="{active:tabSwitch==3}" @click="baseAbout();tabSwitch=3">
        <span>基地周边</span>
        <i></i>
      </li>
    </ul>
    <ul class="friend-loop" v-show="tabSwitch==1">
      <li>
        <div class="people-msg">
          <div>
            <img src="../../../static/geren-header.png" alt>
          </div>
          <div>
            <p class="geren-name">她的水彩笔</p>
            <p class="geren-date">2小时前</p>
          </div>
          <div>来源：骉圈</div>
        </div>
        <div class="loop-text">
          <p>青山灵园，可能是东京市区最冷门、最安静，也是最适合散步的赏樱地点了，如果你不介意这是一片墓地的话。樱花遮住了天空，过几天，花瓣应该又会遮住整条道路。</p>
          <div class="loop-imgshiow">
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
          </div>
        </div>
        <div class="loop-fun">
          <span>
            <i class="iconfont iconbuoumaotubiao15"></i>&nbsp;&nbsp;45
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i class="iconfont iconliuyan"></i>&nbsp;&nbsp;145
          </span>
          <span class="pull-right">
            <i class="iconfont iconfenxiang"></i>&nbsp;&nbsp;
          </span>
        </div>
      </li>
      <li>
        <div class="people-msg">
          <div>
            <img src="../../../static/geren-header.png" alt>
          </div>
          <div>
            <p class="geren-name">她的水彩笔</p>
            <p class="geren-date">2小时前</p>
          </div>
          <div>来源：骉圈</div>
        </div>
        <div class="loop-text">
          <p>青山灵园，可能是东京市区最冷门、最安静，也是最适合散步的赏樱地点了，如果你不介意这是一片墓地的话。樱花遮住了天空，过几天，花瓣应该又会遮住整条道路。</p>
          <div class="loop-imgshiow">
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
          </div>
        </div>
        <div class="loop-fun">
          <span>
            <i class="iconfont iconbuoumaotubiao15"></i>&nbsp;&nbsp;45
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i class="iconfont iconliuyan"></i>&nbsp;&nbsp;145
          </span>
          <span class="pull-right">
            <i class="iconfont iconfenxiang"></i>&nbsp;&nbsp;
          </span>
        </div>
      </li>
      <li>
        <div class="people-msg">
          <div>
            <img src="../../../static/geren-header.png" alt>
          </div>
          <div>
            <p class="geren-name">她的水彩笔</p>
            <p class="geren-date">2小时前</p>
          </div>
          <div>来源：骉圈</div>
        </div>
        <div class="loop-text">
          <p>青山灵园，可能是东京市区最冷门、最安静，也是最适合散步的赏樱地点了，如果你不介意这是一片墓地的话。樱花遮住了天空，过几天，花瓣应该又会遮住整条道路。</p>
          <div class="loop-imgshiow">
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
            <img src="../../../static/firend-loop-img.png" alt>
          </div>
        </div>
        <div class="loop-fun">
          <span>
            <i class="iconfont iconbuoumaotubiao15"></i>&nbsp;&nbsp;45
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i class="iconfont iconliuyan"></i>&nbsp;&nbsp;145
          </span>
          <span class="pull-right">
            <i class="iconfont iconfenxiang"></i>&nbsp;&nbsp;
          </span>
        </div>
      </li>
    </ul>
    <ul class="zixun" v-show="tabSwitch==2">
      <li>
        <div>骉轟科技：望城基地初建完成，将于8月进行骉轟科技：望城基地初建完成，将于8月进行骉轟科技：望城基地初建完成，将于8月进行</div>
      </li>
      <li class="zixun-news">
        <div>
          <p>拿了国家两成新能源补贴的比亚迪，碰撞成绩如此不堪</p>
          <p>
            中国新闻周刊
            <span class="news-date">·04-02</span>
            <span class="pull-right">841分享</span>
          </p>
        </div>
        <div>
          <img src="../../../static/zixun-news-list.png" alt>
        </div>
      </li>
      <li class="zixun-news">
        <div>
          <p>拿了国家两成新能源补贴的比亚迪，碰撞成绩如此不堪</p>
          <p>
            中国新闻周刊
            <span class="news-date">·04-02</span>
            <span class="pull-right">841分享</span>
          </p>
        </div>
        <div>
          <img src="../../../static/zixun-news-list.png" alt>
        </div>
      </li>
      <li class="zixun-news">
        <div>
          <p>拿了国家两成新能源补贴的比亚迪，碰撞成绩如此不堪</p>
          <p>
            中国新闻周刊
            <span class="news-date">·04-02</span>
            <span class="pull-right">841分享</span>
          </p>
        </div>
        <div>
          <img src="../../../static/zixun-news-list.png" alt>
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
      resultList: [],
      tabSwitch: 1
    };
  },
  created() {
    if (this.$route.query.tabSwitch)
      this.tabSwitch = this.$route.query.tabSwitch;
  },
  mounted() {},
  methods: {
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
    },
    biaoloop() {},
    news() {},
    baseAbout() {
      this.$router.push("/addressAbout");
    }
  }
};
</script>

<style lang="scss" scope>
.zixun-news {
  padding-bottom: 30px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > p:nth-of-type(1) {
      font-size: 32px;
      color: #333333;
    }
    > p:nth-of-type(2) {
      font-size: 25px;
      color: #333333;
      .news-date {
        color: #999999;
      }
    }
  }
  > div:nth-of-type(2) {
    padding-left: 40px;
    height: 195px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.zixun {
  padding: 30px;
  > li {
    margin-bottom: 30px;
  }
  > li:nth-of-type(1) {
    height: 417px;
    width: 100%;
    background: url("../../../static/zixun-bg-01.png") no-repeat center center;
    border-radius: 20px;
    overflow: hidden;
    background-size: 100% 100%;
    display: flex;
    align-items: flex-end;
    div {
      background-color: rgba(0, 0, 0, 0.3);
      height: 90px;
      line-height: 90px;
      font-size: 32px;
      color: #fffefe;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 28px;
    }
  }
}
.loop-fun {
  height: 90px;
  line-height: 90px;
  padding-left: 110px;
  color: #999999;
  border-bottom: 1px solid rgb(235, 235, 235);
}
.loop-text {
  padding-left: 110px;
  p {
    padding: 8px;
    font-size: 28px;
    color: #333333;
  }
  .loop-imgshiow {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 190px;
      height: 190px;
      border-radius: 7px;
      overflow: hidden;
      margin-bottom: 6px;
    }
  }
}
.people-msg {
  .geren-name {
    color: #fa3338;
    font-size: 32px;
  }
  .geren-date {
    color: #999999;
    font-size: 24px;
  }
  height: 90px;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  > div:nth-of-type(1) {
    width: 90px;
    height: 90px;
    border-radius: 45px;
    overflow: hidden;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
  > div:nth-of-type(2) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div:nth-of-type(3) {
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 26px;
  }
}
.friend-loop {
  padding: 28px 22px;
}
.fenxiang {
  height: 80px;
  line-height: 80px;
  font-size: 29px;
}
p.title-text {
  height: 90px;
  line-height: 90px;
  font-size: 36px;
  padding-left: 14px;
  font-weight: 500;
  letter-spacing: 4px;
}
.msn {
  padding: 0 22px;
  background-color: #fff;
  font-size: 32px;
  p {
    .iconshuxian {
      color: #fa3338;
    }
  }

  > .laba {
    padding: 0 25px;
    border-radius: 38px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 8px 35px 0px rgba(0, 0, 0, 0.2);
    height: 78px;
    line-height: 78px;
    color: #333333;
    font-size: 26px;
    position: relative;
    top: -39px;
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
</style>
