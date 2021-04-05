<template>
  <div v-if="showContent">
    <div class="mb-2">
      <Swipe :data="state" />
    </div>
    <MDBInput
      class="mb-2"
      label="Image Url"
      type="url"
      v-model="state.imgUrl"
    />
    <MDBInput class="mb-2 mt-2" label="Swipe title" v-model="state.title" />
    <MDBInput class="mb-2 mt-2" label="Swipe text" v-model="state.text" />
    <div class="d-flex justify-content-end m-1">
      <MDBBtn color="light" @click="editSwipe()">Edit Swipe</MDBBtn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref } from 'vue'
import { MDBInput, MDBBtn } from 'mdb-vue-ui-kit'
import { useStore } from '@/store'
import Swipe from '@/components/public-layout/home/HomeContent/HomeSwiper/Swipe.vue'
import { GraphqlApi } from '@/api/GraphqlApi'
import { assignFieldsForReactive } from '@/helpers'
import router from '@/router'
import { GET_SWIPE_BY_ID } from '@/api/queries/swipeQueries'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'EditSwipe',
  components: {
    Swipe,
    MDBInput,
    MDBBtn
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  async setup(props) {
    const store = useStore()
    const toast: any = inject('toast')
    const showContent = ref(false)

    let state = reactive({
      title: '',
      text: '',
      imgUrl: ''
    })

    await GraphqlApi.fetchById<SwipeType>(GET_SWIPE_BY_ID, props.id)
      .then(fetchedData => {
        assignFieldsForReactive(state, fetchedData.swipeData)
        showContent.value = true
      })
      .catch(() => {
        router.back()
      })

    const editSwipe = (): void => {
      store.dispatch('updateSwipe', {
        id: props.id,
        input: state
      })
      toast.success('Swipe has been updated!')
    }
    return { showContent, state, editSwipe }
  }
})
</script>

<style scoped lang="scss"></style>
