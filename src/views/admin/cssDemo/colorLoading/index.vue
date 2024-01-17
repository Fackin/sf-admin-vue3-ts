<script setup lang="ts" name="ColorLoading"></script>

<template>
  <div class="color-loading"></div>
</template>

<style lang="scss" scoped>
.color-loading {
  margin: auto;
  width: 84px;
  height: 84px;
  position: relative;
  top: 100px;
  transform: translate(-50%, -50%);
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  animation: change 2.4s infinite linear;

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size:
      50% 50%,
      50% 50%;
    background-position:
      0 0,
      100% 0,
      100% 100%,
      0 100%;
    background-image: linear-gradient(#399953, #399953),
                    linear-gradient(#fbb300, #fbb300),
                    linear-gradient(#d53e33, #d53e33), 
                    linear-gradient(#377af5, #377af5);
    animation: rotate 2.4s linear infinite, change 2.4s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 4px;
    top: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background: #fff;
    border-radius: 5px;
    animation: change 2.4s infinite linear;
  }
}
@keyframes rotate {
    100% {
        transform: rotate(1turn);
    }
}
@keyframes change {
    0%, 25% {
        border-radius: 0;
    }
    35%, 75% {
        border-radius: 50%;
    }
    85%, 100% {
        border-radius: 0;
    }
}
</style>
