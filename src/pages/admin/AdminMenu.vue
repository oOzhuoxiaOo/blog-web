<script setup>


import IconBook from "../../components/icons/IconBook.vue";
import IconWrite from "../../components/icons/IconWrite.vue";
import IconSet from "../../components/icons/IconSet.vue";
import IconFold from "../../components/icons/IconFold.vue";
import IconUnfold from "../../components/icons/IconUnfold.vue";

const componentReflect = {
    IconBook,
    IconWrite,
    IconSet,
    IconFold,
    IconUnfold
}


import { reactive, markRaw } from "vue";

const navData = reactive(
    [
        {
            id: 0,
            isHide: true,
            title: {
                icon: "IconWrite",
                text: '主页'
            },
            list: [
                {
                    to: '/note',
                    icon: 'IconWrite',
                    text: '回到笔记首页'
                }
            ]
        },

        {
            id: 1,
            isHide: true,
            title: {
                icon: "IconBook",
                text: '文章'
            },
            list: [
                {
                    to: '/admin/query',
                    icon: 'IconWrite',
                    text: '所有文章'
                },
                {
                    to: '/admin/write',
                    icon: "IconWrite",
                    text: '写文章'
                }
            ]
        },

        {
            id: 2,
            isHide: true,
            title: {
                icon: "IconSet",
                text: '测试'
            },
            list: [


            ]
        },
    ]

)





import { useRouter } from "vue-router";
const router = useRouter()


function goRoute(item, index) {
    router.push({
        path: item.to
    })

}



</script>


<template>
    <aside class="menu">
        <div class="head">
            <div class="avatar"></div>
            <div class="username">夏娜</div>
        </div>
        <div class="nav-list">
            <div class="nav-item" v-for="item in navData" :key="item.id">
                <div class="title" @click="item.isHide = !item.isHide">
                    <!-- 动态渲染标签 -->
                    <component :is="componentReflect[item.title.icon]" />
                    <div class="text">{{ item.title.text }}</div>
                    <!-- 展开隐藏图标 -->
                    <IconUnfold :class="['iconUnfold', item.isHide ? '' : 'a-rotate']" />

                </div>
                <transition>
                    <div class="list" v-show="!item.isHide">
                        <template v-for="(listItem, index) in item.list">
                            <router-link class="item" active-class="active" :to="listItem.to">
                                <component :is="componentReflect[listItem.icon]" />
                                {{ listItem.text }}
                            </router-link>
                        </template>
                    </div>
                </transition>
            </div>


        </div>
    </aside>
</template>



<style scoped>
.menu {
    & {
        /* border: solid; */
        width: 230px;
        fill: var(--icon-fill);
        user-select: none;
        /* box-shadow: 3px 0 10px rgb(254, 254, 254); */
    }


    .head {
        & {
            /* border: solid; */
            border: var(--debug-border);
            padding: 2rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            --avatar-wh: 6rem;
        }

        .avatar {
            border: solid;
            width: var(--avatar-wh);
            height: var(--avatar-wh);
            border-radius: var(--avatar-wh);
            background: url('@/assets/images/avatars/av-0005.png') center / cover;
        }


    }

    .nav-list {
        /* border: solid; */
        border: var(--debug-border);

        .nav-item {
            & {
                /* border: solid; */
                border: var(--debug-border);
                display: flex;
                flex-direction: column;
                justify-content: center;

            }

            .title {
                & {
                    display: flex;
                    /* border: solid; */
                    /* box-shadow: 0 0 0.5rem rgb(0, 0, 0); */
                    border: var(--debug-border);
                    align-items: center;
                    height: 3rem;
                    gap: 0.3rem;
                    padding-left: 1rem;
                    padding-right: 1rem;

                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                }

                .text {
                    flex: 1;
                }



                .iconUnfold {
                    /* margin-left: auto; */
                    fill: red;
                    transition: all 0.5s;


                    &.a-rotate {
                        transform: rotate(180deg);
                    }
                }
            }

            .list {
                /* border: solid red; */
                border: var(--debug-border);
                overflow: hidden;
                /* background: #3b3b3b; */

                .item {
                    & {
                        height: 3rem;
                        display: flex;
                        align-items: center;
                        gap: 0.3rem;
                        padding-left: 1.5rem;
                        fill: inherit;
                        cursor: pointer;
                        color: inherit;
                    }

                    &:hover {
                        background-color: rgba(255, 255, 255, 0.1);
                        cursor: pointer;
                    }

                }

                .active {
                    background-color: rgba(255, 255, 255, 0.1);
                    color: rgb(255, 255, 255) !important;
                }




            }

        }

    }


}
</style>