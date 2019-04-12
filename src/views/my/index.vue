<template>
  <div class="my-center">
    <headerpage
      :title_page="title_page='个人中心'"
      :backBtn="backBtn=0"
      :rgUrl="rgUrl='../../../static/geren-edit.png'"
    ></headerpage>
    <div
      class="avater"
      style="background: url('../../../static/geren-header-bg.png') center no-repeat;background-size: 100% 100%;"
    >
      <div class="avater-min">
        <div>
          <img src="../../../static/oneself-header.png" alt>
        </div>
        <div>
          <p>柠檬木有枝</p>
          <p>ID：12352168</p>
        </div>
      </div>
      <div class="level-star">
        <p>1星</p>
        <p>体验官</p>
      </div>
    </div>
    <div class="geren-type">
      <div>
        <span>300元</span>
        <p>成为体验官</p>
      </div>
      <div>
        <span>1000元</span>
        <p>成为体验官</p>
      </div>
      <div>
        <span>300元</span>
        <p>成为体验官</p>
      </div>
    </div>
    <div class="book-nav">
      <router-link tag="a" to="/my-borrowing">
        <img src="../../../static/book-nav-icon1.png" alt>
        <span>我的会员卡</span>
      </router-link>
      <router-link tag="a" to="/overdue-book">
        <img src="../../../static/book-nav-icon2.png" alt>
        <span>我的预约</span>
      </router-link>
      <router-link tag="a" to="/borrow-book-list">
        <img src="../../../static/book-nav-icon3.png" alt>
        <span>我的推荐</span>
      </router-link>
      <router-link tag="a" to="/borrow-book-list">
        <img src="../../../static/book-nav-icon4.png" alt>
        <span>我的返佣</span>
      </router-link>
    </div>
    <ul style="margin: 16px 0 24px 0;">
      <router-link tag="a" to="/my-serve" class="many-nav">
        <img src="../../../static/mycenter-icon-1.png" alt>
        <span>派送</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <router-link tag="a" to="/my-pre-borrow" class="many-nav">
        <img src="../../../static/mycenter-icon-2.png" alt>
        <span>加权分红</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <router-link tag="a" to="/my-collect" class="many-nav">
        <img src="../../../static/mycenter-icon-3.png" alt>
        <span>系统消息</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </router-link>
      <a @click="notOpen" class="many-nav">
        <img src="../../../static/mycenter-icon-4.png" alt>
        <span>联系官方</span>
        <img src="../../../static/rg-arrow.png" alt>
        <div class="line"></div>
      </a>
    </ul>
    <div class="exit" @click="exitLogin" style="margin: 24px 0;">退出登录</div>
    <footernav :imgActive="imgActive=5"></footernav>
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
      result: ""
    };
  },
  methods: {
    notOpen() {
      this.$messagebox.alert("敬请期待", "暂未开放");
      return false;
    },
    exitLogin() {
      localStorage.token = "";
      this.$router.push("/login");
    }
  },
  created() {
    this.myAjax.postData(
      "wode/personal_data",
      result => {
        this.result = result;
      },
      () => {},
      { mm: this.passWord }
    );
  }
};
</script>

<style lang='scss'>
div.my-center {
  padding-bottom: 100px;
  background-color: #fff;
  .avater {
    display: flex;
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

