<script setup>

// 引入hook 关于导航伸展功能的组合函数
import { useNavScroll } from "../hooks/utils/useNavScroll";

import { getSearchNotes } from "@/apis/search.js";

import { useRouter } from "vue-router";

const navScroll = useNavScroll(); //使用导航伸展功能
const isHide = navScroll.isHide //引用是否隐藏状态
const rules = navScroll.rules //引用配置规则
rules.hideDistance = 300 //配置距离

import IconMore from "@/components/icons/IconMore.vue";
import IconSet from "@/components/icons/IconSet.vue";
import { ref } from "vue";
import { Sunny, Moon } from '@element-plus/icons-vue'
import CartAuthor from "@/components/common/CartAuthor.vue";


const value2 = ref(false)
const router = useRouter();
const showAuthor = ref(false)
const dialogVisible = ref(false)
const state = ref('')

function handleShowAuthor() {
  showAuthor.value = true
}
function handleHideAuthor() {
  showAuthor.value = false
}

const handleSelect = (item) => {
  console.log("handleSelect");
  console.log(item);
  router.push({
    path: '/note/content',
    query: {
      noteId: item._id
    }
  })
  dialogVisible.value = false;
  state.value = "";

}
const querySearchAsync = async (queryString, cb) => {
  const res = await getSearchNotes(state.value);
  console.log("res", res)
  let notesList = res.data;
  notesList.forEach((item, idx) => {
    item.value = item.title;
  })
  console.log("querySearch");
  cb(notesList)

}

function themeToggle(){
  let htmlDom = document.documentElement;
  htmlDom.classList.toggle("dark-mode")
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
        <router-link to="/note/cate" class="nav-item" active-class="route-active">归档</router-link>
        <router-link to="/note/friend" class="nav-item" active-class="route-active">友链</router-link>
        <div class="mobile-nav-item more" @click="handleShowAuthor">
          <IconMore />
        </div>
        <div class="mobile-nav-item">
          <IconSet />
        </div>
      </nav>
      <div class="util">

        <el-icon color="#F56C6C" size="24" @click="dialogVisible = true">
          <Search />
        </el-icon>
        <div class="appearance">
          <el-switch v-model="value2" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Sunny"
            :inactive-icon="Moon" @change="themeToggle" />
        </div>
      </div>
    </div>
    <Transition enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeOutLeft">
      <div class="cart-author" v-show="showAuthor">
        <CartAuthor />
      </div>

    </Transition>
    <div class="mask" v-show="showAuthor" @click="handleHideAuthor"></div>

    <el-dialog v-model="dialogVisible" title="" width="500">
      <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input"
        @select="handleSelect" />
      <template #footer>
        <div class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取消</el-button> -->
          <!-- <el-button type="primary" @click="handlePublishComment(2)">
            发布评论
          </el-button> -->
        </div>
      </template>
    </el-dialog>
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
  background: var(--primary-bg-color);
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
      color: var(--primary-emphasis-color);
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
  .el-switch {
    --el-switch-on-color: #525457;
    --el-switch-off-color: #525457;
  }
}

.util {
  // z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .el-icon {
    cursor: pointer;
  }
}
</style>