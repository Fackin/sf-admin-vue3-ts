<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HomeLayout from '../components/layouts/HomeLayout.vue'
</script>

<template>
	<HomeLayout>
		<div class="home-page">
			<header>
				<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
		
				<div class="wrapper">
					<HelloWorld msg="You did it!" />
		
					<nav>
						<RouterLink to="/">Home</RouterLink>
						<RouterLink to="/about">About</RouterLink>
						<RouterLink to="/counter">Counter</RouterLink>
						<RouterLink to="/passesWCAG">Passes WCAG</RouterLink>
						<RouterLink to="/login">Login</RouterLink>
					</nav>
				</div>
			</header>
		
			<RouterView />
		</div>
	</HomeLayout>
</template>

<style scoped>
.home-page {

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
	/* display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 0 2rem; */
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
	.home-page {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 2rem;
	}
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
