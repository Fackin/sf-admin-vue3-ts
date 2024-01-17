<script setup lang="ts" name="webpackLogo"></script>

<template>
  <div class="bg-[#2b3a42] h-full w-full flex">
    <div class="demo-cube">
      <ul class="cube-inner">
        <li class="top"></li>
        <li class="bottom"></li>
        <li class="front"></li>
        <li class="back"></li>
        <li class="right"></li>
        <li class="left"></li>
      </ul>
      <ul class="cube">
        <li class="top"></li>
        <li class="bottom"></li>
        <li class="front"></li>
        <li class="back"></li>
        <li class="right"></li>
        <li class="left"></li>
      </ul>
    </div>
    <!-- <div class="demo-cube perspective">
      <ul class="cube-inner">
        <li class="top"></li>
        <li class="bottom"></li>
        <li class="front"></li>
        <li class="back"></li>
        <li class="right"></li>
        <li class="left"></li>
      </ul>
      <ul class="cube">
        <li class="top"></li>
        <li class="bottom"></li>
        <li class="front"></li>
        <li class="back"></li>
        <li class="right"></li>
        <li class="left"></li>
      </ul>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.demo-cute {
  margin: auto;
}
.perspective {
  transform-style: preserve-3d;
  perspective: 500px;
  transform: rotateX(10deg);
}
ul {
  padding: 0;
  list-style: none;
}

$inner-width: 30px;
$outer-width: 60px;
.demo-cube {
  position: relative;
  width: 100%;
  height: 200px;
  .cube-inner {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1 * $inner-width 0 0 -1 * $inner-width;
    transform-style: preserve-3d;
    transform-origin: $inner-width $inner-width;
    transform: rotateX(-33.5deg) rotateY(45deg);
    animation: fastspin 6s ease-in-out infinite 2s;

    li {
      position: absolute;
      display: block;
      width: $outer-width;
      height: $outer-width;
      background: #175d96;
      border: 1px solid #fff;
    }
    .top {
      transform: rotateX(90deg) translateZ($inner-width);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ($inner-width);
    }
    .front {
      transform: translateZ($inner-width);
    }
    .back {
      transform: rotateX(-180deg) translateZ($inner-width);
    }
    .left {
      transform: rotateY(-90deg) translateZ($inner-width);
    }
    .right {
      transform: rotateY(90deg) translateZ($inner-width);
    }
  }
  .cube {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1 * $outer-width 0 0 -1 * $outer-width;
    transform-style: preserve-3d;
    transform-origin: $outer-width $outer-width;
    transform: rotateX(-33.5deg) rotateY(45deg);
    animation: slowspin 6s ease-in-out infinite 2s;

    li {
      position: absolute;
      display: block;
      width: 120px;
      height: 120px;
      background: rgba(141, 214, 249, 0.5);
      border: 1px solid #fff;
    }
    .top {
      transform: rotateX(90deg) translateZ($outer-width);
    }
    .bottom {
      transform: rotateX(-90deg) translateZ($outer-width);
    }
    .front {
      transform: translateZ($outer-width);
    }
    .back {
      transform: rotateX(-180deg) translateZ($outer-width);
    }
    .left {
      transform: rotateY(-90deg) translateZ($outer-width);
    }
    .right {
      transform: rotateY(90deg) translateZ($outer-width);
    }
  }
}


@keyframes fastspin {
  0% {
    transform: rotateX(-33.5deg) rotateY(45deg);
  }
  40%,
  to {
    transform: rotateX(-33.5deg) rotateY(-315deg);
  }
}

@keyframes slowspin {
  0% {
    transform: rotateX(-33.5deg) rotateY(45deg);
  }
  40%,
  to {
    transform: rotateX(-33.5deg) rotateY(315deg);
  }
}
</style>
