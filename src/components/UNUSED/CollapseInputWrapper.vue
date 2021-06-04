<!--<template>-->
<!--  <MDBListGroupItem>-->
<!--    <div class="title" @click="updateShowInput">-->
<!--      <div class="me-2"><slot name="title"></slot></div>-->
<!--      <MDBIcon :icon="showInput ? 'angle-up' : 'angle-down'" iconStyle="fas" />-->
<!--    </div>-->
<!--    <MDBCollapse :id="`collapse-${inputName}`" v-model="showInput">-->
<!--      <div class="pt-2">-->
<!--        <slot name="input"></slot>-->
<!--      </div>-->
<!--    </MDBCollapse>-->
<!--  </MDBListGroupItem>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { MDBCollapse, MDBIcon, MDBListGroupItem } from 'mdb-vue-ui-kit'-->
<!--import { computed, defineComponent, WritableComputedRef } from 'vue'-->

<!--import { useStore } from '@/store'-->

<!--export default defineComponent({-->
<!--  name: 'CollapseInputWrapper',-->
<!--  props: {-->
<!--    inputName: {-->
<!--      type: String,-->
<!--      required: true,-->
<!--    },-->
<!--  },-->
<!--  components: {-->
<!--    MDBListGroupItem,-->
<!--    MDBCollapse,-->
<!--    MDBIcon,-->
<!--  },-->
<!--  setup(props) {-->
<!--    const store = useStore()-->
<!--    const showInput: WritableComputedRef<boolean> = computed({-->
<!--      get(): boolean {-->
<!--        return store.getters.getProductInputShow(props.inputName)-->
<!--      },-->
<!--      set(newValue: boolean) {-->
<!--        store.dispatch('updateProductInputShow', {-->
<!--          inputName: props.inputName,-->
<!--          newStatus: newValue,-->
<!--        })-->
<!--      },-->
<!--    })-->
<!--    const updateShowInput = (): void => {-->
<!--      store.dispatch('updateProductInputShow', {-->
<!--        inputName: props.inputName,-->
<!--        newStatus: !showInput.value,-->
<!--      })-->
<!--    }-->
<!--    return { showInput, updateShowInput }-->
<!--  },-->
<!--})-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.title {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  caret-color: transparent;-->
<!--}-->
<!--.invalid-feedback {-->
<!--  height: 10px;-->
<!--  width: 100%;-->
<!--}-->
<!--//.collapse.show {-->
<!--//  height: auto !important;-->
<!--//}-->
<!--</style>-->
