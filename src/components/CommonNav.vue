<script setup>

// 引入hook 关于导航伸展功能的组合函数
import { useNavScroll } from "../hooks/utils/useNavScroll";
const navScroll = useNavScroll(); //使用导航伸展功能
const isHide = navScroll.isHide //引用是否隐藏状态
const rules = navScroll.rules //引用配置规则
rules.hideDistance = 300 //配置距离

import IconMore from "@/components/icons/IconMore.vue";
import IconSet from "@/components/icons/IconSet.vue";
import { ref } from "vue";

import CartAuthor from "@/components/common/CartAuthor.vue";

const showAuthor = ref(false)

function handleShowAuthor() {
  showAuthor.value = true
}
function handleHideAuthor() {
  showAuthor.value = false
}

</script>


<template>
  <div>
    <div class="navbar" :class="{ isHide: isHide }">
      <div class="menu-icon"><router-link to="/" class="nav-item">XiaNaBlog</router-link></div>
      <nav class="nav-list">
        <router-link to="/" class="nav-item" active-class="route-active">Home</router-link>
        <router-link to="/note/nav" class="nav-item" active-class="route-active">Note</router-link>
        <!-- <router-link to="/about" class="nav-item" active-class="route-active">About</router-link> -->
        <!-- <router-link to="/about" class="nav-item" active-class="route-active">About</router-link> -->
        <router-link to="/note/friend" class="nav-item" active-class="route-active">友链</router-link>
        <div class="mobile-nav-item more" @click="handleShowAuthor">
          <IconMore />
        </div>
        <div class="mobile-nav-item">
          <IconSet />
        </div>
      </nav>
      <div class="appearance">
        <div class="appearance-slip"></div>
      </div>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft">
      <div class="cart-author" v-show="showAuthor">
        <CartAuthor />
      </div>
  
    </Transition>
    <div class="mask" v-show="showAuthor" @click="handleHideAuthor"></div>
  </div>
</template>




<style lang="less" scoped>
.cart-author {
  display: flex;
  position: fixed;
  width: 70vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

@media (max-width:765px) {
  .nav-list {
    .nav-item {
      display: none !important;
    }

    .mobile-nav-item {
      display: flex !important;
    }
  }

  .cart-author {
    display: flex;
  }
}

.route-active {
  /* font-weight: 700; */
  border-bottom: 3px solid rgb(12, 176, 12);
}

.navbar {
  height: var(--navbar-box-height);
  background: var(--navbar-bg-color);
  line-height: var(--navbar-box-height);
  width: 100%;
  padding: 0 10%;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--order-4-color);
  transition: all 0.3s;
  /* box-shadow: 5px 5px 5px rgb(161, 161, 161) ; */

  &.isHide {
    top: -4rem;
  }

}


.nav-list {
  display: flex;

  li {
    margin: 0 10px;
  }

  .nav-item {
    display: flex;
    padding: 0 12px;

    &:hover {
      color: var(--secondary-text-color);
    }

  }

  .mobile-nav-item {
    fill: aliceblue;
    display: none;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
  }

}



.appearance {
  display: flex;
  position: relative;
  border-radius: 2rem;
  height: 60%;
  width: 4rem;
  /* border: solid; */
  border: solid var(--secondary-text-color);
  align-self: center;
  background-color: var(--order-1-bg-color);
  cursor: pointer;
  user-select: none;

  .appearance-slip {
    position: absolute;
    text-align: center;
    width: 50%;
    height: 100%;
    line-height: 2rem;
    border-radius: 50%;
    top: 0;
    left: 0;
    /* background-color: #fff; */
    transition: all 0.5s ease;
    background-color: var(--primary-bg-color);
  }
}
</style>