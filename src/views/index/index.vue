<template>
  <div class="index">
    <header class="clearfix">
      骉族
      <i class="iconfont iconxiaoxi pull-right">&nbsp;&nbsp;</i>
    </header>
    <div class="my-swiper">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <img class="lunpo-img" src="../../../static/index-lunpo01_02.png" alt>
        </mt-swipe-item>
        <!-- <mt-swipe-item><img src="../../../static/lunpo02.jpg" alt=""></mt-swipe-item> -->
      </mt-swipe>
    </div>
    <!-- <nav>
      <ul>
        <router-link to="/news-list" tag="li"><img :src="indexNavImg.indexNav_0" alt=""><span>公司介绍</span></router-link>
        <router-link to="/new-book" tag="li"><img :src="indexNavImg.indexNav_1" alt=""><span>场地预约</span></router-link>
        <router-link to="/good-book" tag="li"><img :src="indexNavImg.indexNav_2" alt=""><span>基地周边</span></router-link>
        <li @click="notOpen"><img :src="indexNavImg.indexNav_3" alt=""><span>基地活动</span></li>
        <li @click="notOpen"><img :src="indexNavImg.indexNav_4" alt=""><span>紧急救援</span></li>
      </ul>
    </nav>-->
    <div class="msn">
      <div class="laba">
        <i class="iconfont iconxiaoxilaba"></i> 骉轟科技将在2019-03-29召开2019新品发布会！
      </div>
      <p class="title-text">
        <i class="iconfont iconshuxian"></i>明星恭贺
      </p>
      <video-player
        class="video-player vjs-custom-skin self-video"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
      ></video-player>
      <div class="fenxiang">
        【骉轟科技】湖南卫视各大明星齐上阵
        <i class="iconfont iconfenxiang pull-right"></i>
      </div>
    </div>
    <ul class="friend-loop">
      <li>
        <p class="title-text">
          <i class="iconfont iconshuxian"></i>骉族推荐
        </p>
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

    <footernav :imgActive="imgActive=1"></footernav>
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
      isNowPage: true,
      resultList: [],
      tabSwitch: 1,
      indexNavImg: {
        indexNav_0: require("../../../static/index-nav-0.png"),
        indexNav_1: require("../../../static/index-nav-1.png"),
        indexNav_2: require("../../../static/index-nav-2.png"),
        indexNav_3: require("../../../static/index-nav-3.png"),
        indexNav_4: require("../../../static/index-nav-4.png")
      },
      playerOptions: {
        //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //你的视频地址（必填）
          }
        ],
        poster: "poster.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        //        controlBar: {
        //          timeDivider: true,
        //          durationDisplay: true,
        //          remainingTimeDisplay: false,
        //          fullscreenToggle: true  //全屏按钮
        //        }
      }
    };
  },
  created() {
    if(!localStorage.token){
      this.$router.push("/login");
    }else {
      this.myAjax.postData('newslist/queryNewslist',
        (result)=>{
            this.result = result;
        },()=>{
        },{TypeID:"1"});
    }
  },
  mounted() {},
  methods: {
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
    },
    onPlayerPlay() {},
    onPlayerPause() {}
  }
};
</script>

<style lang="scss">
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
  border-top: 20px solid #f0f1f2;
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

div.index {
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

  .my-swiper {
    width: 100%;
    height: 380px;
  }

  .self-book-static {
    display: flex;
    height: 160px;

    // align-items: center;
    // justify-content: center;
    > li {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &:active {
        background-color: #ddd;
      }

      span {
        position: relative;

        i {
          position: absolute;
          top: -13px;
          right: -4px;
          background-color: rgb(255, 0, 0);
          width: 26px;
          height: 26px;
          line-height: 26px;
          border-radius: 50%;
          text-align: center;
          font-size: 20px;
          color: #fff;
          font-style: normal;
        }
      }

      img {
        width: 64px;
      }
    }
  }

  nav {
    height: 180px;
    border-top: 4px solid #f0f1f2;
    border-bottom: 4px solid #f0f1f2;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ul {
      margin: 10px 0;
      display: flex;
      width: 100%;
      justify-content: flex-end;

      > li {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 96px;
          margin-bottom: 12px;
        }

        span {
          font-size: 26px;
          color: #333333;
        }

        &:active {
          background-color: #ddd;
        }
      }
    }
  }

  .bookli-top {
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #dddddd;
    padding-left: 25px;
    background-color: #fff;

    ul {
      display: flex;

      > li {
        margin: 0 25px;
        position: relative;
        font-size: 30px;
      }

      > li.active {
        color: #0b7fe5;

        i {
          width: 40px;
          position: absolute;
          left: 50%;
          margin-left: -20px;
          bottom: 0;
          border: 2px solid #0b7fe5;
        }
      }
    }
  }

  .bookli {
    background-color: #fff;

    ul {
      width: 95%;
      margin: 0 auto;

      > li {
        position: relative;
        height: 104px;
        border-bottom: 1px solid #dddddd;
        padding: 0 34px 0 24px;
        display: flex;
        align-items: center;

        img {
          height: 80px;
          width: 80px;
          margin-right: 15px;
        }

        div {
          display: flex;
          flex-direction: column;

          span:nth-of-type(1) {
            font-size: 26px;
            color: #333333;
          }

          span:nth-of-type(2) {
            font-size: 20px;
            color: #999999;
          }
        }

        button {
          position: absolute;
          top: 35px;
          right: 0;
        }
      }
    }
  }
}

.btn-primary {
  padding: 0;
  border-width: 1px;
  border-color: rgb(11, 127, 229);
  border-style: solid;
  border-radius: 6px;
  width: 72px;
  height: 32px;
  line-height: 32px;
  color: #0b7fe5;
  font-size: 24px;
  text-align: center;
  background-color: transparent;

  &:active {
    background-color: #ddd;
  }
}
</style>
