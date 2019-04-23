<template>
    <div class="noRightContainer">
        <div>
            <div>
                <img src="../assets/image/4041.png" alt="">
            </div>
            <div>
                <img src="../assets/image/404.png" alt="">
            </div>
            <span class="alertText">很抱歉，没有找到您要的内容！</span>
            <br>
            <span class="minText">可能原因：网站可能在维护或程序异常。</span>
            <br>
            <el-button type="primary" @click=" $router.history.go(-1)" style="margin-top: 20px;margin-bottom: 50px">
                返回上一级
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.noRightContainer {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);

}

.alertText {
  font-size: 18px;
}

.minText {
  margin-top: 10px;
  font-size: 12px;
  color: #999999;
}
</style>
