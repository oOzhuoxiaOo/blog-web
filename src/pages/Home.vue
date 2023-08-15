
<script setup>
import IconDown from "../components/icons/IconDown.vue";
function goNext(){
    window.scrollBy({
        top:window.innerHeight,
        left:0,
        behavior:'smooth'
    })
}
</script>




<template>
    <div class="middle-content">
        <section class="chunk get-started">
            <div class="get-started-pic"></div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
            <div class="show-me">
                <div class="me-avator"></div>
                <div class="me-introduce">
                    <p>灼眼の夏娜</p>
                    <p>千里之行，始于足下</p>
                    <p>我才不要那么没用</p>
                </div>
            </div>
            <div class="show-mask"></div>
        </section>
        <section class="chunk about-us" id="one">
            <div class="us-restful-pic"></div>
            <div class="us-introduce">
                <div class="introduce-item">
                    <div>关于我们</div>
                    <div>一个一天pv只有1000的小站,但还是想要好好做下去...</div>
                </div>
                <div class="introduce-item">
                    <div>公告</div>
                    <div>提供各种网站源码下载、导航等网站</div>
                </div>
                <div class="introduce-item">
                    <div>开源鸭起始</div>
                    <div>提供各种网站源码下载、导航等网站，无门凯下载给你丰富的体验</div>
                </div>
            </div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
        </section>
        <section class="chunk start-blog" id="two">
            <div class="blog-restful-pic"></div>
            <div class="blog-introduce">
                <div class="blog-introduce-title">
                    写博客、互动小站
                </div>
                <div class="blog-introduce-tip">
                    这个是写博客的网站！
                </div>
                <p>还希望大家多多投稿!</p>
                <p>其实还是每天按时审核的呢</p>
                <a class="blog-go" href="">进入写博客</a>
            </div>
            <div class="go-next" @click="goNext">
                <IconDown :width="30" :height="30" />
            </div>
        </section>
        <section class="chunk start-navside" id="three">
            <div class="navside-restful-pic"></div>
            <div class="navside-introduce">
                <div class="navside-introduce-title">
                    写博客、互动小站
                </div>
                <div class="navside-introduce-tip">
                    这个是写博客的网站！
                </div>
                <p>还希望大家多多投稿!</p>
                <p>其实还是每天按时审核的呢</p>
                <a class="navside-go" href="">进入写博客</a>
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
                        <div class="like-type-avatar"></div>
                        <div class="like-type-title">CG</div>
                        <div class="like-type-text">入坑作《Clannad》,虽然喜欢绘画，奈何长了一双毫无用处的手，无论今后遇到什么难题，我都选择吃饭、睡觉、打豆豆</div>
                    </div>
                    <div class="like-item like-type-ACG">
                        <div class="like-type-avatar"></div>
                        <div class="like-type-title">ACG</div>
                        <div class="like-type-text">入坑作《Clannad》,虽然喜欢绘画，奈何长了一双毫无用处的手，无论今后遇到什么难题，我都选择吃饭、睡觉、打豆豆</div>
                    </div>
                    <div class="like-item like-type-Music">
                        <div class="like-type-avatar"></div>
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



<style  scoped>
.chunk {
    position: relative;
    width: 100%;
    height: 100vh;
}

/* .about-us {
    display: flex;
    flex-direction: column;
} */

.us-restful-pic {
    height: 100%;
    background: url("/src/assets/images/animations/cols/Pz-0013.png") no-repeat center / cover;
    background-attachment: fixed;
}

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
}

.us-introduce>div {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    border: var(--debug-border);
    padding: 20% 0;
    grid-row-gap: 10px;

}

.us-introduce::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    top: 0;
    background-color: var(--primary-emphasis-color);
}

.introduce-item>div:nth-child(1) {
    align-self: end;
    border: var(--debug-border);
    font-size: 24px;
    font-weight: 500;

}

.introduce-item>div:nth-child(2) {
    color: var(--secondary-text-color);
    border: var(--debug-border);
    align-self: start;
}

/* blog */
.blog-restful-pic {
    width: 100%;
    height: 100%;
    background: url("/src/assets/images/animations/cols/Pz-0051.jpg") no-repeat center / cover;
    background-attachment: fixed;
}

.blog-introduce {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 100%;
    background: var(--secondary-bg-color);
    background-attachment: fixed;
    padding: 8rem 3rem;
}

.blog-introduce::before {
    content: "";
    display: block;
    position: absolute;
    width: 3px;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--primary-emphasis-color);
}

.blog-introduce-title {
    font-size: 2rem;
    font-weight: 500;
}

.blog-introduce-tip {
    font-size: 1.5rem;
    margin: 1.25rem 0 1.5rem;
}

.blog-introduce p {
    margin: 0.5rem 0;
    color: var(--secondary-text-color);
}

.blog-go {
    color: var(--secondary-text-color);
    margin-top: 2rem;
    display: block;
    width: 10rem;
    /* padding: 10px; */
    font-size: 1.2rem;
    height: 4rem;
    border: var(--secondary-text-color) solid;

    line-height: 4rem;
    text-align: center;
}

.blog-go:hover {
    color: var(--primary-text-color);
    border: solid var(--primary-text-color);
}

/* navside */
.navside-restful-pic {
    width: 100%;
    height: 100%;
    background: url("/src/assets/images/animations/cols/Pz-0052.jpg") no-repeat center / cover;
    background-attachment: fixed;
}

.navside-introduce {
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background: var(--secondary-bg-color);
    background-attachment: fixed;
    padding: 8rem 3rem;
}

.navside-introduce::before {
    content: "";
    display: block;
    position: absolute;
    width: 3px;
    height: 100%;
    right: 0;
    top: 0;
    background-color: var(--primary-emphasis-color);
}

.navside-introduce-title {
    font-size: 2rem;
    font-weight: 500;
}

.navside-introduce-tip {
    font-size: 1.5rem;
    margin: 1.25rem 0 1.5rem;
}

.navside-introduce p {
    margin: 0.5rem 0;
    color: var(--secondary-text-color);
}

.navside-go {
    color: var(--secondary-text-color);
    margin-top: 2rem;
    display: block;
    width: 10rem;
    /* padding: 10px; */
    font-size: 1.2rem;
    height: 4rem;
    border: var(--border-color) solid;
    /* border-radius: 0.5rem; */
    line-height: 4rem;
    text-align: center;
}

.navside-go:hover {
    color: var(--primary-text-color);
    border: solid var(--primary-text-color);
}

.like-introduce {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    text-align: center;
}

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
    display: flex;
    justify-content: space-between;
    padding: 4rem 10%;
    border: var(--debug-border);
}

.like-list::before {
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
    margin: 0 1.5rem;
    flex-direction: column;
    align-items: center;
    border: var(--debug-border);
}

.like-type-avatar {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    overflow: hidden;
}

.like-type-CG>.like-type-avatar {
    background: url("/src/assets/images/avatars/av-0005.png") no-repeat center / cover;
}

.like-type-ACG>.like-type-avatar {
    background: url("/src/assets/images/avatars/av-0001.jpg") no-repeat center / cover;
}

.like-type-Music>.like-type-avatar {
    background: url("/src/assets/images/avatars/av-0002.jpg") no-repeat center / cover;
}

.like-type-title {
    font-size: 1.2rem;
    margin-top: 1.5rem;
}

.like-type-text {
    color: var(--secondary-text-color);
    margin-top: 1.5rem;
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
}



/* .go-next::before {
    content: "";
    font-size: 2rem;
    display: block;
    position: absolute;
    fill: aliceblue;
    background: url("/src/assets/images/icons/down.svg") center / cover;
    z-index: 999;
    width: 20px;
    height: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: a-updown 0.6s ease infinite alternate;
    cursor: pointer;
} */

@keyframes a-updown {
    from {
        transform: translate(-50%, -50%);
    }

    to {
        transform: translate(-50%, -80%);
    }
}





/* show me */
.show-me {
    width: 80%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: var(--debug-border);
    display: flex;
    justify-content: center;
    align-items: center;
}

.me-avator {
    width: 16rem;
    height: 16rem;
    border: var(--debug-border);
    border-radius: 50%;
    background: url("/src/assets/images/avatars/av-0002.jpg") no-repeat center / cover;
    /* animation: jumpAnimation 1s infinite; */
}


@keyframes jumpAnimation {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.me-introduce {

    margin-left: 2rem;
}

.me-introduce>p {
    color: var(--color-white);
}

.me-introduce>p:nth-child(1) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
}

.me-introduce>p:nth-child(n+2) {
    line-height: 1.5rem;
}


.get-started-pic {
    background: no-repeat url("/src/assets/images/animations/rows/Pz-0050.jpg") center / cover;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -10;
}

.get-started-pic:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: -9;
}</style>