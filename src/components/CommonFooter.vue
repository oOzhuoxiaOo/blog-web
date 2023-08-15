<script setup>

</script>






<template>
    <footer id="footer">
        <div class="find-me">
            <p>联系方式</p>
            <p>这里是我的联系方式哦</p>
            <p>邮箱: QQ邮箱@qq.com</p>
            <p>联系方式: qq号</p>
        </div>
        <div class="footer-record">
            <p>2000-2023 Blue dit net All Rights Reserved</p>
            <p>沪ICP备000000号</p>
        </div>
    </footer>
</template>


<style scoped>


/* footer */
#footer {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    margin-top: 10rem;
  }



  .find-me {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-bg-color);
    flex: 6;
    border: var(--debug-border);
  }
  .find-me > p {
    margin-top: 2rem;
    border: var(--debug-border);
  }
  .find-me > p:nth-child(1) {
    font-size: 1.5rem;
  }
  .find-me > p:nth-child(2) {
    margin-top: 1.5rem;
    font-size: 1.2rem;
  }
  .find-me > p:nth-child(n + 3) {
    color: var(--secondary-text-color);
  }
  .footer-record {
    color: var(--secondary-text-color);
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-bg-color);
    border: var(--debug-border);
    border-top: 1px solid var(--secondary-text-color);
  }
  .footer-record > p:nth-child(2) {
    margin-top: 1.5rem;
  }





</style>