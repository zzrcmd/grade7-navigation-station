<template>
  <!-- 加载 -->
  <Loading />
  <!-- 壁纸 -->
  <Background @loadComplete="loadComplete" />
  <!-- 主界面 -->
  <Transition name="fade" mode="out-in">
    <main id="main" v-if="store.imgLoadStatus">
      <div class="container" v-show="!store.backgroundShow">
        <section class="all" v-show="!store.setOpenState">
          <MainLeft />
          <MainRight v-show="!store.boxOpenState" />
          <Box v-show="store.boxOpenState" />
        </section>
        <section class="more" v-show="store.setOpenState" @click="store.setOpenState = false">
          <MoreSet />
        </section>
      </div>
      <!-- 移动端菜单按钮 -->
      <Icon
        class="menu"
        size="24"
        v-show="!store.backgroundShow"
        @click="store.mobileOpenState = !store.mobileOpenState"
      >
        <component :is="store.mobileOpenState ? CloseSmall : HamburgerButton" />
      </Icon>
      <!-- 页脚 -->
      <Transition name="fade" mode="out-in">
        <Footer class="f-ter" v-show="!store.backgroundShow && !store.setOpenState" />
      </Transition>
    </main>
  </Transition>
</template>

<script setup>
import { helloInit, checkDays } from "@/utils/getTime.js";
import { HamburgerButton, CloseSmall } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import { Icon } from "@vicons/utils";
import Loading from "@/components/Loading.vue";
import MainLeft from "@/views/Main/Left.vue";
import MainRight from "@/views/Main/Right.vue";
import Background from "@/components/Background.vue";
import Footer from "@/components/Footer.vue";
import Box from "@/views/Box/index.vue";
import MoreSet from "@/views/MoreSet/index.vue";
import cursorInit from "@/utils/cursor.js";
import config from "@/../package.json";
import { nextTick, onMounted, onBeforeUnmount, watch } from "vue";
import { ElMessage } from "element-plus";

const store = mainStore();

// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
};

// 加载完成事件
const loadComplete = () => {
  nextTick(() => {
    // 欢迎提示
    helloInit();
    // 默哀模式
    checkDays();
  });
};

// 监听宽度变化
watch(
  () => store.innerWidth,
  (value) => {
    if (value < 721) {
      store.boxOpenState = false;
      store.setOpenState = false;
    }
  },
);

onMounted(() => {
  // 自定义鼠标
  cursorInit();

  // 屏蔽右键
  document.oncontextmenu = () => {
    ElMessage({
      message: "为了浏览体验，本站禁用右键",
      grouping: true,
      duration: 2000,
    });
    return false;
  };

  // 鼠标中键事件
  window.addEventListener("mousedown", (event) => {
    if (event.button == 1) {
      store.backgroundShow = !store.backgroundShow;
      ElMessage({
        message: `已${store.backgroundShow ? "开启" : "退出"}壁纸展示状态`,
        grouping: true
      });
    }
  });

  // 监听当前页面宽度
  getWidth();
  window.addEventListener("resize", getWidth);

  // 控制台输出
  const styleTitle1 = "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
  const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
  const styleContent = "color: rgb(30,152,255);";
  const title1 = "初一导航站";
  const title2 = `
                                                                                  
                                                                                  
 222222222222222         000000000      333333333333333        888888888          
2:::::::::::::::22     00:::::::::00   3:::::::::::::::33    88:::::::::88        
2::::::222222:::::2  00:::::::::::::00 3::::::33333::::::3 88:::::::::::::88      
2222222     2:::::2 0:::::::000:::::::03333333     3:::::38::::::88888::::::8     
            2:::::2 0::::::0   0::::::0            3:::::38:::::8     8:::::8     
            2:::::2 0:::::0     0:::::0            3:::::38:::::8     8:::::8     
         2222::::2  0:::::0     0:::::0    33333333:::::3  8:::::88888:::::8      
    22222::::::22   0:::::0 000 0:::::0    3:::::::::::3    8:::::::::::::8       
  22::::::::222     0:::::0 000 0:::::0    33333333:::::3  8:::::88888:::::8      
 2:::::22222        0:::::0     0:::::0            3:::::38:::::8     8:::::8     
2:::::2             0:::::0     0:::::0            3:::::38:::::8     8:::::8     
2:::::2             0::::::0   0::::::0            3:::::38:::::8     8:::::8     
2:::::2       2222220:::::::000:::::::03333333     3:::::38::::::88888::::::8     
2::::::2222222:::::2 00:::::::::::::00 3::::::33333::::::3 88:::::::::::::88      
2::::::::::::::::::2   00:::::::::00   3:::::::::::::::33    88:::::::::88        
22222222222222222222     000000000      333333333333333        888888888          
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                      dddddddd                    
                                                      d::::::d                    
                                                      d::::::d                    
                                                      d::::::d                    
                                                      d:::::d                     
   mmmmmmm    mmmmmmm     aaaaaaaaaaaaa       ddddddddd:::::d     eeeeeeeeeeee    
 mm:::::::m  m:::::::mm   a::::::::::::a    dd::::::::::::::d   ee::::::::::::ee  
m::::::::::mm::::::::::m  aaaaaaaaa:::::a  d::::::::::::::::d  e::::::eeeee:::::ee
m::::::::::::::::::::::m           a::::a d:::::::ddddd:::::d e::::::e     e:::::e
m:::::mmm::::::mmm:::::m    aaaaaaa:::::a d::::::d    d:::::d e:::::::eeeee::::::e
m::::m   m::::m   m::::m  aa::::::::::::a d:::::d     d:::::d e:::::::::::::::::e 
m::::m   m::::m   m::::m a::::aaaa::::::a d:::::d     d:::::d e::::::eeeeeeeeeee  
m::::m   m::::m   m::::ma::::a    a:::::a d:::::d     d:::::d e:::::::e           
m::::m   m::::m   m::::ma::::a    a:::::a d::::::ddddd::::::dde::::::::e          
m::::m   m::::m   m::::ma:::::aaaa::::::a  d:::::::::::::::::d e::::::::eeeeeeee  
m::::m   m::::m   m::::m a::::::::::aa:::a  d:::::::::ddd::::d  ee:::::::::::::e  
mmmmmm   mmmmmm   mmmmmm  aaaaaaaaaa  aaaa   ddddddddd   ddddd    eeeeeeeeeeeeee  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
                                                                                  
BBBBBBBBBBBBBBBBB                                                                 
B::::::::::::::::B                                                                
B::::::BBBBBB:::::B                                                               
BB:::::B     B:::::B                                                              
  B::::B     B:::::Byyyyyyy           yyyyyyy                                     
  B::::B     B:::::B y:::::y         y:::::y                                      
  B::::BBBBBB:::::B   y:::::y       y:::::y                                       
  B:::::::::::::BB     y:::::y     y:::::y                                        
  B::::BBBBBB:::::B     y:::::y   y:::::y                                         
  B::::B     B:::::B     y:::::y y:::::y                                          
  B::::B     B:::::B      y:::::y:::::y                                           
  B::::B     B:::::B       y:::::::::y                                            
BB:::::BBBBBB::::::B        y:::::::y                                             
B:::::::::::::::::B          y:::::y                                              
B::::::::::::::::B          y:::::y                                               
BBBBBBBBBBBBBBBBB          y:::::y                                                
                          y:::::y                                                 
                         y:::::y                                                  
                        y:::::y                                                   
                       y:::::y                                                    
                      yyyyyyy                                                     
                                                                                  
                                                                                                                      
                                                                                                              dddddddd
                                                                                                              d::::::d
                                                                                                              d::::::d
                                                                                                              d::::::d
                                                                                                              d:::::d 
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzrrrrr   rrrrrrrrr       cccccccccccccccc   mmmmmmm    mmmmmmm       ddddddddd:::::d 
z:::::::::::::::zz:::::::::::::::zr::::rrr:::::::::r    cc:::::::::::::::c mm:::::::m  m:::::::mm   dd::::::::::::::d 
z::::::::::::::z z::::::::::::::z r:::::::::::::::::r  c:::::::::::::::::cm::::::::::mm::::::::::m d::::::::::::::::d 
zzzzzzzz::::::z  zzzzzzzz::::::z  rr::::::rrrrr::::::rc:::::::cccccc:::::cm::::::::::::::::::::::md:::::::ddddd:::::d 
      z::::::z         z::::::z    r:::::r     r:::::rc::::::c     cccccccm:::::mmm::::::mmm:::::md::::::d    d:::::d 
     z::::::z         z::::::z     r:::::r     rrrrrrrc:::::c             m::::m   m::::m   m::::md:::::d     d:::::d 
    z::::::z         z::::::z      r:::::r            c:::::c             m::::m   m::::m   m::::md:::::d     d:::::d 
   z::::::z         z::::::z       r:::::r            c::::::c     cccccccm::::m   m::::m   m::::md:::::d     d:::::d 
  z::::::zzzzzzzz  z::::::zzzzzzzz r:::::r            c:::::::cccccc:::::cm::::m   m::::m   m::::md::::::ddddd::::::dd
 z::::::::::::::z z::::::::::::::z r:::::r             c:::::::::::::::::cm::::m   m::::m   m::::m d:::::::::::::::::d
z:::::::::::::::zz:::::::::::::::z r:::::r              cc:::::::::::::::cm::::m   m::::m   m::::m  d:::::::::ddd::::d
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz rrrrrrr                ccccccccccccccccmmmmmm   mmmmmm   mmmmmm   ddddddddd   ddddd
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
                                                                                                                      
`;

  const content = `\n\n版本: ${config.version}\n主页: ${config.home}\nGithub: ${config.github}`;
  console.info(`%c${title1} %c${title2} %c${content}`, styleTitle1, styleTitle2, styleContent);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", getWidth);
});
</script>

<style lang="scss" scoped>
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transition: transform 0.3s;
  animation: fade-blur-main-in 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.5s;
  .container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 0.5vw;
    .all {
      width: 100%;
      height: 100%;
      padding: 0 0.75rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .more {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000080;
      backdrop-filter: blur(20px);
      z-index: 2;
      animation: fade 0.5s;
    }
    @media (max-width: 1200px) {
      padding: 0 2vw;
    }
  }
  .menu {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 84%;
    left: calc(50% - 28px);
    width: 56px;
    height: 34px;
    background: rgb(0 0 0 / 20%);
    backdrop-filter: blur(10px);
    border-radius: 6px;
    transition: transform 0.3s;
    animation: fade 0.5s;
    &:active {
      transform: scale(0.95);
    }
    .i-icon {
      transform: translateY(2px);
    }
    @media (min-width: 721px) {
      display: none;
    }
  }
  @media (max-height: 720px) {
    overflow-y: auto;
    overflow-x: hidden;
    .container {
      height: 721px;
      .more {
        height: 721px;
        width: calc(100% + 6px);
      }
      @media (min-width: 391px) {
        // w 1201px ~ max
        padding-left: 0.7vw;
        padding-right: 0.25vw;
        @media (max-width: 1200px) { // w 1101px ~ 1280px
          padding-left: 2.3vw;
          padding-right: 1.75vw;
        }
        @media (max-width: 1100px) { // w 993px ~ 1100px
          padding-left: 2vw;
          padding-right: calc(2vw - 6px);
        }
        @media (max-width: 992px) { // w 901px ~ 992px
          padding-left: 2.3vw;
          padding-right: 1.7vw;
        }
        @media (max-width: 900px) { // w 391px ~ 900px
          padding-left: 2vw;
          padding-right: calc(2vw - 6px);
        }
      }
    }
    .menu {
      top: 605.64px; // 721px * 0.84
      left: 170.5px; // 391 * 0.5 - 25px
      @media (min-width: 391px) {
        left: calc(50% - 25px);
      }
    }
    .f-ter {
      top: 675px; // 721px - 46px
      @media (min-width: 391px) {
        padding-left: 6px;
      }
    }
  }
  @media (max-width: 390px) {
    overflow-x: auto;
    .container {
      width: 391px;
    }
    .menu {
      left: 167.5px; // 391px * 0.5 - 28px
    }
    .f-ter {
      width: 391px;
    }
    @media (min-height: 721px) {
      overflow-y: hidden;
    }
  }
}
</style>
