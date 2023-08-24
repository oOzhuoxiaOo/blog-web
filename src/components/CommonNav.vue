<script setup>




// 引入hook 关于导航伸展功能的组合函数
import { useNavScroll } from "../hooks/utils/useNavScroll";
const navScroll = useNavScroll(); //使用导航伸展功能
const isHide = navScroll.isHide //引用是否隐藏状态
const rules = navScroll.rules //引用配置规则
rules.hideDistance = 300 //配置距离


</script>


<template>
  <div class="navbar" :class="{ isHide: isHide }">
    <div class="menu-icon">XiaNaBlog</div>
    <nav class="nav-list">
      <router-link to="/" class="nav-item" active-class="route-active">Home</router-link>
      <router-link to="/note" class="nav-item" active-class="route-active">Note</router-link>
      <!-- <router-link to="/about" class="nav-item" active-class="route-active">About</router-link> -->
      <!-- <router-link to="/about" class="nav-item" active-class="route-active">About</router-link> -->
      <router-link to="/login" class="nav-item" active-class="route-active">Login</router-link>
      <router-link to="/admin" class="nav-item" active-class="route-active">Admin</router-link>
    </nav>
    <div class="appearance">
      <div class="appearance-slip"></div>
    </div>
  </div>
</template>




<style scoped>

@media (max-width:720px){
  .nav-list {
    & {
      /* display: none; */
    }
  }
}

.nav-item {
  display: block;
  padding: 0 12px;

}

.nav-item:hover {
  color: var(--secondary-text-color);
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
}

.nav-list li {
  margin: 0 10px;
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
}


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
</style>