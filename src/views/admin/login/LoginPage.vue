<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
// import '@/assets/js/login-bg.js'
import HomeLayout from '@/components/layouts/HomeLayout.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const username = ref('admin')
const password = ref('admin')
const $router = useRouter()
const $route = useRoute()

const login = () => {
  console.log('login')
  $router.push('/admin')
}
</script>
<template>
  <HomeLayout class="login-page-box">
    <div class="login-page">
      <header>
        <div class="wrapper">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
          <!-- <HelloWorld msg="You did it!" /> -->
          <div>This is a login page</div>
        </div>
      </header>
      <main>
        <div class="login-box">
          <h2>Sign In</h2>
          <input type="text" placeholder="Username" v-model="username" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit" @click="login">Sign In</button>
        </div>
      </main>
    </div>
  </HomeLayout>
</template>

<style scoped>
.login-page-box {
  width: 100vw;
  background: url("@/assets/admin/login/bg.png") fixed no-repeat;
  background-size: cover;
  z-index: -3;
}
.login-page {
  margin: 0 auto;
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  
  /* background: url("@/assets/admin/login/bg.png") fixed no-repeat; */
  /* background-size: cover; */
}
header {
  line-height: 1.5;
  max-height: 100vh;
  /* background-color: blueviolet; */
}
header .wrapper {
  display: grid;
  grid-template-columns: 80px 180px;
  justify-items: center;
  align-items: center;
  padding: 10px;

  /* background-color: burlywood; */
}

.logo {
  display: block;
  /* margin: 0 auto 2rem; */
}
main {
  /* background-color: cadetblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
}
main .login-box {
  width: 300px;
  /* height: 400px; */
  padding: 20px;
  border-radius: 10px;

  /* background-color: #fff;
  border: 1px solid #ccc; */
  /* filter: blur(10px); */
  position: relative;
  z-index: 100;
  background: inherit;
  border-radius: 18px;
  overflow: hidden; /* 隐藏多余的模糊效果*/
}

main .login-box::before {
  content: '';
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  position: absolute;
  top: -10px;
  left: -10px;
  overflow: hidden;
  background: inherit;
  box-shadow: inset 0 0 0 200px rgba(128, 127, 127, 0.25);
  filter: blur(6px);
  z-index: -1;
}

main .login-box h2 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}


.login-box input,
.login-box button {
  margin: 6px 0;
  height: 36px;
  border: none;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 0 14px;
  color: #3d5245;
  width: 100%;
}


.login-box input::placeholder {
  color: #3d5245;
}


.login-box button:focus,
.login-box input:focus {
  outline: 0;
}
/* .login-box button {
  margin-top: 24px;
  background-color: rgba(57, 88, 69, 0.4);
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s;
}

.login-box button:hover {
  background-color: rgba(12, 80, 38, 0.67);
} */


.login-box button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.4s;
  margin-top: 24px;
}

.login-box button[type="submit"]:hover {
  background-color: #3e8e41;
}

@media (min-width: 1024px) {
	.login-page {
		display: grid;
		grid-template-columns: 2fr 1fr;
		padding: 0 2rem;
    min-height: 100vh;
	}
  header {
    width: 600px;
    /* display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 auto 2rem;
    /* margin: 0 2rem 0 0; */
    width: 120px;
    height: 120px;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
}
</style>
