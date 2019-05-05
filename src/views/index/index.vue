<template>
  <div class="index" id="index">
    <header class="clearfix">
      骉族
      <i @click="headerClick" class="iconfont iconxiaoxi">&nbsp;&nbsp;</i>
    </header>
    <div class="my-swiper">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <img class="lunpo-img" src="../../../static/index-lunpo01_02.png" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img class="lunpo-img" src="../../../static/index-lunpo02.png" alt>
        </mt-swipe-item>
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
        <i class="iconfont iconshuxian"></i>
        {{resultList.news_title}}
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
        【{{resultList.author}}{{resultList.describe}}
        <i class="iconfont iconfenxiang pull-right"></i>
      </div>
    </div>
    <ul class="friend-loop">
      <li>
        <p class="title-text">
          <i class="iconfont iconshuxian"></i>骉族科技
          <span class="pull-right openkaix">越玩悦开心</span>
        </p>
      </li>
      <!-- <li v-for="(item, index) of biaoJoop.list" :key="index" :id="item.id">
        <div class="people-msg">
          <div>
            <img src="../../../static/geren-header.png" alt>
          </div>
          <div>
            <p class="geren-name">{{item.userName}}</p>
            <p class="geren-date">2小时前</p>
          </div>
          <div>来源：骉圈</div>
        </div>
        <div class="loop-text">
          <p>{{item.preface}}</p>
          <div class="loop-imgshiow">
            <img
              v-for="(itemImg, indexImg) of JSON.parse(item.content)"
              :src="biaoJoop.baseUrl+itemImg.url"
              :key="indexImg"
              alt
            >
          </div>
        </div>
        <div class="loop-fun">
          <span :id="item.id" @click="dianzan(item.id,item.isLike,index)">
            <i
              v-show="item.isLike==0"
              class="iconfont iconbuoumaotubiao15"
            >&nbsp;&nbsp;{{item.likeNum}}</i>
            <i
              v-show="item.isLike==1"
              class="iconfont iconaixin_shixin"
            >&nbsp;&nbsp;{{item.likeNum}}</i>
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>
            <i class="iconfont iconliuyan"></i>&nbsp;&nbsp;0
          </span>
          <span class="pull-right">
            <i class="iconfont iconfenxiang"></i>&nbsp;&nbsp;
          </span>
        </div>
      </li>-->
      <mt-navbar v-model="selected" class="tishi">
        <mt-tab-item id="1">平台介绍</mt-tab-item>
        <mt-tab-item id="2">企业文化</mt-tab-item>
        <mt-tab-item id="3">新闻公告</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="pingtaiJS">
            <p class="title">湖南骉轟科技——首家汽车驾驶体验综合体</p>
            <p class="text-con">湖南骉轰科技有限公司由北斗荟集团与湖南靠谱科技有限公司强强联手打造。</p>
            <img src="../../../static/pingtaiJS.png" alt>
            <p>湖南骉轰科技有限公司是一家专业提供高端汽车驾驶体验的互联网垂直社区兴趣平台。公司成立于2019年，由北斗荟集团与湖南靠谱科技股份有限公司联合孵化,注册资本1000万,投资总额逾2亿,团队达百人。</p>
            <p>公司始终以坚持发扬“诚信、创新、沟通”为企业宗旨以"技术、人、车、服务"为立业之本,并形成了一套集研发、搭建、交互、营销等为一体的新型大众娱乐消费体系，致力于打造国内首家以汽车驾驶体验为核心的运营综合体。</p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="qiyewenh">
            <h5>湖南骉轟科技——首家汽车驾驶体验综合体</h5>
            <p class="red-color">
              <i class="iconfont iconluntai"></i> 创新精神
            </p>
            <p>创新是这个时代的要求，创新是打破固有的思维模式，更是获取发展空间的重要途径。</p>
            <p class="red-color">
              <i class="iconfont iconluntai"></i> 合作发展
            </p>
            <p>与各界同行合作，在合作中快速发展；与广大用户合作在服务中不断提高自身技术水平；注重公司内部合作，强调团队精神，相互信任和有效沟通。</p>
            <p class="red-color">
              <i class="iconfont iconluntai"></i> 团队合作
            </p>
            <p>我们坚信集体配合和沟通的重要，我们珍视公司所有人员的团结和合作。</p>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <ul>
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
                <p>趣读|《飞驰人生》的另一面：成为一个赛车手要烧多少钱？</p>
                <p>
                  每日经济新闻
                  <span class="news-date">·04-02</span>
                  <span class="pull-right">841分享</span>
                </p>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </ul>

    <footernav :imgActive="imgActive=1"></footernav>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade"
      class="mint-popup-1"
      :style="{ top: 40 + 10 + 'px' ,left: 83+'%'}"
    >
      <div class="header-popup-out">
        <div @click="popupVisible=false;noOpendialog=true">
          <i class="iconfont iconsaoyisao"></i> &nbsp;同城好友
        </div>
        <div @click="popupVisible=false;noOpendialog=true">
          <i class="iconfont iconyijianhujiao"></i> &nbsp;呼叫挪车
        </div>
      </div>
    </mt-popup>
    <no-open-dialog :popupVisible="noOpendialog"></no-open-dialog>
  </div>
</template>
<script>
import footernav from "../../components/footer";
import noOpenDialog from "../../components/noOpenDialog";
export default {
  components: {
    footernav,
    noOpenDialog
  },
  data() {
    return {
      nostatus: 0,
      isstatus: 1,
      isNowPage: true,
      videoSrc: "",
      biaoJoop: {},
      resultList: {},
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
            // src: this.videoSrc,
            src: "http://app.bh8341.com/upload/news/1904/YugrtqGXz7.mp4",
            type: "video/mp4"
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
      },
      popupVisible: false,
      noOpendialog: false,
      selected: "1"
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  created() {
    if (!localStorage.token) {
      this.$router.push("/login");
    }
    this.myAjax.postData(
      "newslist/queryNewslist",
      result => {
        this.resultList = result[0];
        this.player.tag.src = result[0].mediaUrl;
      },
      () => {},
      { TypeID: "1" }
    );
    this.myAjax.postData(
      "moment/queryMomentlist",
      result => {
        this.biaoJoop = result;
      },
      () => {},
      {
        curPage: 1
      },
      this
    );
  },
  mounted() {},
  methods: {
    headerClick() {
      this.popupVisible = true;
    },
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
    },
    onPlayerPlay() {},
    onPlayerPause() {},
    dianzan(id, arg, index) {
      console.log(index, 65);
      console.log(this.biaoJoop, 65);
      this.myAjax.postData(
        "moment/likeMoment",
        result => {
          if (this.biaoJoop.list[index].isLike == 0) {
            this.biaoJoop.list[index].likeNum += 1;
            this.biaoJoop.list[index].isLike = 1;
          } else {
            this.biaoJoop.list[index].isLike = 0;
            this.biaoJoop.list[index].likeNum -= 1;
          }
        },
        () => {},
        { momentId: id },
        this
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#index {
  .mint-tab-container-item {
    padding: 70px 30px 100px 30px;
  }
  .zixun-news {
    margin-bottom: 30px;
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
        width: 200px;
        height: 100%;
      }
    }
  }
  .qiyewenh {
    h5 {
      height: 50px;
      line-height: 50px;
      font-size: 34px;
      color: #333333;
      font-weight: 500;
    }
    .red-color {
      margin: 20px;
      height: 50px;
      line-height: 50px;
      font-size: 32px;
      color: #fa3338;
      font-weight: 500;
      i {
        font-size: 36px;
      }
    }
    p {
      font-size: 20px;
    }
  }
  .pingtaiJS {
    p.title {
      font-size: 34px;
      color: #333333;
    }
    img {
      width: 100%;
      height: 500px;
    }
    p {
      font-size: 32px;
      color: #333333;
      margin-bottom: 30px;
    }
  }

  .tishi {
    margin-top: 30px;
    .mint-tab-item-label {
      color: #333;
      font-size: 70px;
    }
    .is-selected {
      border-bottom-color: #fa3338;
      text-decoration-line: none;
      padding-left: 10px;
      padding-right: 10px;
      background-clip: content-box;
      color: #fa3338;
      .mint-tab-item-label {
        color: rgb(250, 51, 56);
      }
    }
  }
}

.openkaix {
  font-size: 26px;
  color: #666666;
}
.header-popup-out {
  padding: 5px;
  > div {
    padding: 10px;
    i {
      vertical-align: baseline;
    }
  }
  > div:nth-of-type(1) {
    border-bottom: 1px solid rgb(235, 235, 235);
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
    i {
      height: 100%;
      padding: 0 10px;
      right: 0;
      position: absolute;
    }
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
div.mint-popup-1 {
  width: 240px;
  border-radius: 8px;
  padding: 10px;
  transform: translate(-50%, 0);
  // right: -200px;
  h1 {
    font-size: 20px;
    color: #26a2ff;
  }
  p {
    margin-bottom: 10px;
  }
}
</style>
