<template>
  <nav class="navbar fixed-bottom navbar-light bg-light">
    <div class="container-fluid">
      <ul class="nav nav-justified w-100">
        <li class="nav-item w-25 d-flex justify-content-center">
          <router-link class="nav-link" to="/">
            <div class="home-link nav-item-img"></div>
          </router-link>
        </li>
        <li class="nav-item w-25 d-flex justify-content-center">
          <router-link class="nav-link" to="/catalog">
            <div class="list-link nav-item-img"></div>
          </router-link>
        </li>
        <li class="nav-item w-25 d-flex justify-content-center">
          <router-link class="nav-link" to="/shopping-cart">
            <div class="shopping-cart-link nav-item-img"></div>
          </router-link>
        </li>
        <li class="nav-item w-25 d-flex justify-content-center">
          <router-link class="nav-link" to="/profile">
            <div class="profile-link nav-item-img"></div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style lang="scss" scoped>
.navbar {
}
.home-link {
  background: url(../assets/header/home.svg) no-repeat center;
}
.list-link {
  background: url(../assets/header/list.svg) no-repeat center;
}
.shopping-cart-link {
  background: url(../assets/header/shopping-cart.svg) no-repeat center;
}
.profile-link {
  background: url(../assets/header/profile.svg) no-repeat center;
}

.home-link,
.list-link,
.shopping-cart-link,
.profile-link {
  background-size: cover;
}

.nav-item-img {
  width: 40px;
  height: 40px;
}

.router-link-active,
.router-link-exact-active {
  filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg)
    brightness(104%) contrast(97%);
}
</style>
