<script setup lang="ts">
import { onUnmounted } from 'vue'
import { onMounted, ref } from 'vue'

const timer = ref()
const inter = ref()
const time = ref()
const isOff = ref(true)

onMounted(() => {
  inter.value = setInterval(function () {
    var hours = new Date().getHours()
    var seconds = new Date().getSeconds()
    var minutes = new Date().getMinutes()

    var realTime = `${hours < 10 ? '0' : ''}${hours} : ${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`; 
    //   (hours < 10 ? '0' : '') +
    //   hours +
    //   ' : ' +
    //   (minutes < 10 ? '0' : '') +
    //   minutes +
    //   ' : ' +
    //   (seconds < 10 ? '0' : '') +
    //   seconds
    time.value = realTime
    // $('.time').html(realTime);
    // $('.time').attr('data-time', realTime);
  }, 1000)
  setTimeout(() => {
    isOff.value = false
  }, 5000)
})

onUnmounted(() => {
  clearInterval(inter.value)
  inter.value = null
})

</script>

<template>
  <div class="screen glitch">
    <div class="clock" :class="{'is-off': isOff}">
      <span :data-time="time" class="time">{{ time }}</span>
    </div>
  </div>
  <div>CSS: clip-path animation</div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

// Variables
$bg-color: #111;
$txt-color: #fff;
$color-c1: red;
$color-c2: blue;
$offset-c1: 3px;
$offset-c2: 2px;
$lay-c1: 2px;
$lay-c2: 2px;

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
  user-select: none;
}

.screen {
  font-family: 'Lato', sans-serif;
  font-weight: 800;
  background: $bg-color;
  color: $txt-color;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.clock {
  display: block;
  position: absolute;
  z-index: 9;
  width: 720px;
  height: 128px;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: default;
  span {
    display: block;
    position: relative;
    font-size: 128px;
    line-height: 1;
    // color: $txt-color;
    // background-color: $bg-color;
    // clip-path: inset(100px 50px);
    //   animation: clock 1s infinite linear alternate-reverse;
    &:before,
    &:after {
      display: block;
      content: attr(data-time);
      position: absolute;
      top: 0;
      overflow: hidden;
      color: $txt-color;
      background-color: $bg-color;
      height: 128px;
      width: 720px;
      clip: rect(0, 900px, 0, 0);
    }
    &:before {
      left: calc(-#{$offset-c2});
      text-shadow: #{$lay-c2} 0 #{$color-c2};
      animation: c2 1s infinite linear alternate-reverse;
    }

    &:after {
      left: #{$offset-c1};
      text-shadow: calc(-#{$lay-c1}) 0 #{$color-c1};
      animation: c1 2s infinite linear alternate-reverse;
    }
  }
  &.is-off {
    animation: is-off 2s linear infinite !important;
  }
}

.glitch .clock {
  transform: skewX(0deg) scaleY(1);
  animation: clock-bag 4s linear infinite;
}

@keyframes c1 {
  @for $i from 0 through 20 {
    #{percentage($i / 20)} {
      clip: rect(random(100) * 1px, 9999px, random(100) * 1px, 0);
    }
  }
}
@keyframes c2 {
  //   0% {
  //     clip-path: inset(0px 0px calc(100% - 10px) 0);
  //   }
  //   100% {
  //     clip-path: inset(calc(100% - 10px) 0px 0px 0);
  //   }
  @for $i from 0 through 20 {
    #{percentage($i / 20)} {
      clip: rect(random(100) * 1px, 9999px, random(100) * 1px, 0);
    }
  }
  23% {
    transform: scaleX(0.8);
  }
}

@keyframes clock-bag {
  @for $i from 0 through 50 {
    #{percentage($i / 50)} {
      transform: translate(random(5) * 1px, random(5) * 1px);
    }
  }
  1% {
    transform: scaleY(1) skewX(0deg);
  }
  1.5% {
    transform: scaleY(3) skewX(-60deg);
  }
  51% {
    transform: scaleX(1) scaleY(1) skewX(0deg);
  }
  52% {
    transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
  }
  53% {
    transform: scaleX(1) scaleY(1) skewX(0deg);
  }
}

@keyframes is-off {
  0%,
  50%,
  80%,
  85% {
    opacity: 1;
  }
  56%,
  57%,
  81%,
  84% {
    opacity: 0;
  }
  58% {
    opacity: 1;
  }
  71%,
  73% {
    transform: scaleY(1) skewX(0deg);
  }
  72% {
    transform: scaleY(3) skewX(-60deg);
  }
  91%,
  93% {
    transform: scaleX(1) scaleY(1) skewX(0deg);
    color: $txt-color;
  }
  92% {
    transform: scaleX(1.5) scaleY(0.2) skewX(80deg);
    color: green;
  }
}
</style>
