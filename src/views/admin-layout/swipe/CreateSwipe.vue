<template>
  <div>
    <!--    <div class="mb-2">-->
    <!--      <Swipe :data="state" />-->
    <!--    </div>-->
    <!--    <MDBInput-->
    <!--      class="mb-2"-->
    <!--      label="Image Url"-->
    <!--      type="url"-->
    <!--      v-model="state.imgUrl"-->
    <!--    />-->
    <!--    <MDBInput class="mb-2 mt-2" label="Swipe title" v-model="state.title" />-->
    <!--    <MDBInput class="mb-2 mt-2" label="Swipe text" v-model="state.text" />-->
    <!--    <div class="d-flex justify-content-end m-1">-->
    <!--      <MDBBtn color="light" @click="addSwipe()">Add Swipe</MDBBtn>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref } from 'vue'
import { MDBBtn, MDBInput } from 'mdb-vue-ui-kit'
// import { useStore } from '@/store'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
import _ from 'lodash'
const INITIAL_STATE = {
  imgUrl: '',
  title: '',
  text: '',
}

export default defineComponent({
  name: 'CreateSwipe',
  components: {
    // Swipe,
    // MDBInput,
    // MDBBtn
  },
  setup() {
    // const store = useStore()
    // const toast: any = inject('toast')
    // const showDropdown = ref(false)
    //
    // let state = reactive({ ...INITIAL_STATE })
    // const resetState = (): void => {
    //   Object.assign(state, { ...INITIAL_STATE })
    // }
    //
    // const addSwipe = (): void => {
    //   const unboundData = Object.assign({}, state)
    //   store.dispatch('createSwipe', unboundData)
    //   resetState()
    //   toast.success('Swipe has been created!')
    // }
    // return { showDropdown, state, addSwipe }
  },
})
</script>

<style scoped lang="scss"></style>
