
<script setup>
import IconDown from "../components/icons/IconDown.vue";
function goNext() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    })
}
</script>




<template>
    <div class="middle-content">
        <section class="chunk get-started">
            <div class="get-started-pic" v-lazy data-src="/src/assets/images/animations/rows/Pz-0050.jpg"></div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
            <div class="show-me">
                <div class="me-avator">
                    <img class="img" v-lazy data-src="/src/assets/images/avatars/av-0002.jpg" alt="头像图片">
                </div>
                <div class="me-introduce">
                    <p>灼眼の夏娜</p>
                    <p>千里之行，始于足下</p>
                    <p>我才不要那么没用</p>
                </div>
            </div>
            <div class="show-mask"></div>
        </section>
        <section class="chunk about-us" id="one">
            <div class="us-restful-pic" v-lazy data-src="/src/assets/images/animations/cols/Pz-0013.png"></div>
            <div class="us-introduce">
                <div class="introduce-item">
                    <div class="title">关于我们</div>
                    <div class="text">一个一天pv只有1000的小站,但还是想要好好做下去...</div>
                </div>
                <div class="introduce-item">
                    <div class="title">公告</div>
                    <div class="text">提供各种网站源码下载、导航等网站</div>
                </div>
                <div class="introduce-item">
                    <div class="title">开源鸭起始</div>
                    <div class="text">提供各种网站源码下载、导航等网站，无门凯下载给你丰富的体验</div>
                </div>
            </div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
        </section>
        <section class="chunk start-blog" id="two">
            <div class="blog-restful-pic" v-lazy data-src="/src/assets/images/animations/cols/Pz-0051.jpg"></div>
            <div class="blog-introduce">
                <div class="title blog-introduce-title">
                    写博客、互动小站
                </div>
                <div class="tip blog-introduce-tip">
                    这个是写博客的网站！
                </div>
                <p>还希望大家多多投稿!</p>
                <p>其实还是每天按时审核的呢</p>
                <a class="go" href="">进入写博客</a>
            </div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
        </section>
        <section class="chunk start-navside" id="three">
            <div class="navside-restful-pic" v-lazy data-src="/src/assets/images/animations/cols/Pz-0052.jpg"></div>
            <div class="navside-introduce">
                <div class="title navside-introduce-title">
                    写博客、互动小站
                </div>
                <div class="tip navside-introduce-tip">
                    这个是写博客的网站！
                </div>
                <p>还希望大家多多投稿!</p>
                <p>其实还是每天按时审核的呢</p>
                <a class="go" href="">进入写博客</a>
            </div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
        </section>

        <section class="chunk about-like" id="four">
            <div class="like-restful-pic"></div>
            <div class="like-introduce">
                <div class="like-title">网站设计</div>
                <div class="like-tip">CV时长两年半的练习生!</div>
                <div class="like-list">
                    <div class="like-item like-type-CG">
                        <div class="like-type-avatar" v-lazy data-src="/src/assets/images/avatars/av-0005.png"></div>
                        <div class="like-type-title">CG</div>
                        <div class="like-type-text">入坑作《Clannad》,虽然喜欢绘画，奈何长了一双毫无用处的手，无论今后遇到什么难题，我都选择吃饭、睡觉、打豆豆</div>
                    </div>
                    <div class="like-item like-type-ACG">
                        <div class="like-type-avatar" v-lazy data-src="/src/assets/images/avatars/av-0001.jpg"></div>
                        <div class="like-type-title">ACG</div>
                        <div class="like-type-text">入坑作《Clannad》,虽然喜欢绘画，奈何长了一双毫无用处的手，无论今后遇到什么难题，我都选择吃饭、睡觉、打豆豆</div>
                    </div>
                    <div class="like-item like-type-Music">
                        <div class="like-type-avatar" v-lazy data-src="/src/assets/images/avatars/av-0002.jpg"></div>
                        <div class="like-type-title">Music</div>
                        <div class="like-type-text">入坑作《Clannad》,虽然喜欢绘画，奈何长了一双毫无用处的手，无论今后遇到什么难题，我都选择吃饭、睡觉、打豆豆</div>
                    </div>

                </div>
            </div>
            <!-- <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div> -->
        </section>
    </div>
</template>



<style  lang="less" scoped>


.chunk {
    position: relative;
    width: 100%;
    height: 100vh;
}


// 首页page1
.get-started {

    // 背景图片
    .get-started-pic {
        background: no-repeat center / cover;
        background-attachment: fixed;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -10;

        // 图片遮罩
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-color: rgba(0, 0, 0, .5);
            z-index: -9;
        }
    }

    // 自我展示
    .show-me {
        width: 80%;
        /* height: 50%; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: var(--debug-border);
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        // 头像
        .me-avator {
            overflow: hidden;
            width: 16rem;
            height: 16rem;
            /* border: var(--debug-border); */
            /* border: solid red; */
            /* background: url("/src/assets/images/avatars/av-0002.jpg") no-repeat center / cover; */
            /* animation: jumpAnimation 1s infinite; */

            .img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
                object-fit: cover;
                object-position: center;
                border: solid;
            }
        }

        // 头像介绍
        .me-introduce {
            margin-left: 2rem;

            p {
                color: var(--color-white);
            }

            p:nth-child(1) {
                margin-bottom: 1.5rem;
                font-size: 2rem;

            }

            p:nth-child(n + 2) {
                line-height: 1.5rem;
            }
        }


    }


}


.about-us {

    // 我们-背景图图
    .us-restful-pic {
        height: 100%;
        background: no-repeat center / cover;
        background-attachment: fixed;
    }

    // 我们-介绍-list
    .us-introduce {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 40%;
        background-color: var(--secondary-bg-color);
        padding: 0 10%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;

        // 边框
        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 3px;
            top: 0;
            background-color: var(--primary-emphasis-color);
        }

        // 介绍-item
        .introduce-item {
            display: grid;
            grid-template-rows: 1fr 3fr;
            border: var(--debug-border);
            padding: 20% 0;
            grid-row-gap: 0.5rem;

            .title {
                // align-self: end;
                border: var(--debug-border);
                font-size: 1.5rem;
                font-weight: 500;

            }

            .text {
                color: var(--secondary-text-color);
                border: var(--debug-border);
                // align-self: start;
            }

        }
    }

}


// 混入
.restful-pic {
    width: 100%;
    height: 100%;
    background: no-repeat center / cover;
    background-attachment: fixed;
}

.introduce {
    position: absolute;
    width: 30%;
    height: 100%;
    background: var(--secondary-bg-color);
    background-attachment: fixed;
    padding: 8rem 3rem;

    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 3px;
        height: 100%;
        background-color: var(--primary-emphasis-color);
    }

    .go {
        color: var(--secondary-text-color);
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 50%;
        padding: 1rem;
        font-size: 1.2rem;
        border: var(--secondary-text-color) solid;
        text-align: center;

        // 悬浮效果
        &:hover {
            color: var(--primary-text-color);
            border: solid var(--primary-text-color);
        }
    }

    // 标题
    .title {
        font-size: 2rem;
        font-weight: 500;
    }

    // 介绍小标题
    .tip {
        font-size: 1.5rem;
        margin: 1.25rem 0 1.5rem;
    }

    // p文字内容
    p {
        margin: 0.5rem 0;
        color: var(--secondary-text-color);
    }

    @media (max-width:768px) {
        width: 100%;
        height: 50%;
        padding: 3rem;
        top:auto;
        right: auto;
        left: 0;
        bottom: 0;
        &::before {
            width: 100%;
            height: 3px;
            left: 0 !important;
            right: auto !important;
            bottom: auto !important;
            top: 0 !important;
        }
    }

}


/* blog */
.start-blog {
    .blog-restful-pic {
        .restful-pic();
    }

    .blog-introduce {
        .introduce();
        top: 0;
        right: 0;
        // 边框
        &::before {
            top: 0;
            left: 0;
        }
    }

}


.start-navside {
    .navside-restful-pic {
        .restful-pic();
    }

    .navside-introduce {
        .introduce();
        top: 0;
        left: 0;

        &::before {
            top: 0;
            right: 0;
        }
    }

}


.about-like {
    height: auto;

    .like-introduce {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        text-align: center;


        .like-title {
            margin-top: 8%;
            font-size: 2rem;
        }

        .like-tip {
            color: var(--secondary-text-color);
            font-size: 1.2rem;
            margin-top: 1.5rem;
        }


        .like-list {
            position: relative;
            margin-top: 3rem;
            flex: 1;
            width: 100%;
            gap: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 4rem 10%;
            border: var(--debug-border);

            &::before {
                content: "";
                position: absolute;
                width: 25%;
                height: 3px;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: var(--primary-emphasis-color);

            }





            .like-item {
                flex: 1;
                display: flex;
                position: relative;
                margin: 0 1.5rem;
                flex-direction: column;
                align-items: center;
                border: var(--debug-border);
               @media (max-width: 768px) {
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    // height: 100%;
                    width: 3px;
                    top: 40%;
                    bottom: 40%;
                    left: -2rem;
                    background-color: #0d47f6;
                }
               }
                .like-type-avatar {
                    width: 8rem;
                    height: 8rem;
                    border-radius: 50%;
                    overflow: hidden;
                    background: no-repeat center / cover;
                }

                .like-type-title {
                    font-size: 1.2rem;
                    margin-top: 1.5rem;
                }

                .like-type-text {
                    color: var(--secondary-text-color);
                    margin-top: 1.5rem;
                }
            }
        }
    }

}



/* 去下一个 */
.go-next {
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    width: 5rem;
    height: 5rem;
    transform: translateX(-50%);
    border: var(--debug-border);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width:768px) {
        display: none;
    }
}

</style>