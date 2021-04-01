<template>
  <nav class="navbar sticky-top navbar-light bg-light">
    <div class="container-fluid justify-content-center">
      <div class="row w-100 justify-content-between">
        <div class="brand">
          <router-link class="navbar-brand" to="/">
            <!--            <img src="../assets/home/logo.jpg" height="35" alt="Logo" />-->
          </router-link>
        </div>
        <div class="col-12 d-flex justify-content-end p-0">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="input-group-btn">
              <button class="btn btn-default shadow-none" type="button">
                <!--                <img-->
                <!--                  src="../assets/home/find.svg"-->
                <!--                  width="15"-->
                <!--                  height="15"-->
                <!--                  alt="find"-->
                <!--                />-->
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <div class="row">
      <Carousel />
    </div>
    <div class="row m-1">
      <HomeList />
    </div>
    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
        deserunt eaque in inventore iure maiores neque, nobis quas qui quo
        ratione tenetur ut vitae? Eaque expedita iste maxime officia provident.
      </div>
      <div>
        A animi, architecto dolorum earum fugiat illum, laudantium maiores neque
        praesentium quasi sunt temporibus unde veniam voluptates voluptatum? Ab
        at, et expedita facere molestias nulla quaerat quod reprehenderit totam
        veritatis?
      </div>
      <div>
        Et laboriosam odio reiciendis veritatis. Autem beatae consequuntur dicta
        distinctio dolore dolorem doloribus ea earum exercitationem fugiat illum
        incidunt natus obcaecati odit omnis porro quo quod, rem, similique
        tempora voluptas!
      </div>
      <div>
        Adipisci alias architecto beatae cupiditate eaque et fugit ipsa iusto
        laborum laudantium magnam molestias nemo nihil nostrum optio porro quae
        quis quod ratione, reiciendis repudiandae sed veniam voluptate!
        Molestias, quos!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Carousel from '@/components/Carousel.vue'
import HomeList from '@/components/HomeList/index.vue'

export default defineComponent({
  name: 'Home',
  components: { HomeList, Carousel }
})
</script>

<style lang="scss" scoped>
.brand {
  position: absolute;
  left: 0;
  top: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.navbar-brand img {
  border-radius: 3px;
}
.input-group {
  width: 50%;
}
.input-group:hover {
  width: 101% !important;
}
.form-control {
  font-size: 0.8rem;
}
</style>
