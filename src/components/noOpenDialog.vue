<template>
  <div class="model-dialog">
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" :modal="false">
      <div class="no-open-dialog">
        <img src="../../static/no-open-top.png" alt>
        <p>该功能暂未开放</p>
        <p>具体时间会即时进行通知</p>
        <div>
          <button @click="$parent.noOpendialog=false;">我知道了</button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  name: "noOpenDialog",
  data() {
    return {
      closeModal: false
    };
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: false
    }
  }
};
</script>
 <style lang="scss" scoped>
.model-dialog {
  .mint-popup {
    border-radius: 40px;
  }
}
.no-open-dialog {
  position: relative;

  width: 416px;
  height: 395px;
  // overflow: hidden;

  padding-top: 130px;
  img {
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: -60px;
    margin-left: -90px;
    width: 184px;
    height: 179px;
    z-index: 2;
  }
  > p:nth-of-type(1) {
    font-family: "Microsoft Yahei";
    font-size: 32px;
    color: rgb(51, 51, 51);
    text-align: center;
  }

  > p:nth-of-type(2) {
    font-family: "Microsoft Yahei";
    font-size: 25px;
    color: #999999;
    text-align: center;
  }
  div {
    text-align: center;
    margin-top: 40px;
    button {
      background-color: #ff605b;
      border-radius: 31px;
      background-image: -moz-linear-gradient(
        -90deg,
        rgb(255, 100, 99) 0%,
        rgb(254, 87, 72) 100%
      );
      background-image: -webkit-linear-gradient(
        -90deg,
        rgb(255, 100, 99) 0%,
        rgb(254, 87, 72) 100%
      );
      background-image: -ms-linear-gradient(
        -90deg,
        rgb(255, 100, 99) 0%,
        rgb(254, 87, 72) 100%
      );
      box-shadow: 0px 14px 21px 0px rgba(255, 80, 40, 0.2);
      width: 230px;
      height: 85px;
      line-height: 80px;
      text-align: center;
      font-size: 32.269px;
      font-family: "Adobe Heiti Std";
      color: rgb(255, 255, 255);
      -moz-transform: matrix(0.94791666666667, 0, 0, 0.94713157894737, 0, 0);
      -webkit-transform: matrix(0.94791666666667, 0, 0, 0.94713157894737, 0, 0);
      -ms-transform: matrix(0.94791666666667, 0, 0, 0.94713157894737, 0, 0);
    }
  }
}
</style>
 

