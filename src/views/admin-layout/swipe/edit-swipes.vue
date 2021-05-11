<template>
  <MDBContainer>
    <MDBRow v-if="!loading">
      <MDBCol col="12" v-if="!data" class="d-flex justify-content-center pt-2">
        No swipes yet. You can&thinsp;
        <router-link :to="{ name: 'create-swipe' }">create one</router-link>.
      </MDBCol>

      <MDBCol col="12" v-if="data">
        <div class="tips">
          <div>
            (to change the order, hold down
            <MDBIcon icon="align-justify" size="xs" iconStyle="fas" /> and drag)
          </div>
          <div>(to see a preview, press the "options" button)</div>
        </div>
        <DraggableList :data="data" />
      </MDBCol>
    </MDBRow>

    <MDBRow>
      <Spinner v-if="loading" />
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-vue-ui-kit'
import { defineComponent, onUnmounted } from 'vue'

import { reactiveFetcher, awaitFetcher } from '@/api/fetch'
import { graphqlFetch } from '@/api/graphql-api/GraphqlApi'
import { GET_SWIPES } from '@/api/graphql-api/queries/swipeQueries'
import DraggableList from '@/components/admin-layout/swipe/edit-swipes/DraggableList.vue'
import Spinner from '@/components/Spinner.vue'
import { eventBus } from '@/helpers/EventBus'
import { SwipeType } from '@/types/swipe'

export default defineComponent({
  name: 'edit-swipes',
  components: {
    DraggableList,
    MDBIcon,
    MDBCol,
    MDBContainer,
    MDBRow,
    Spinner,
  },
  setup() {
    const { data, loading } = reactiveFetcher<SwipeType[]>('NF', '/edit-swipes', () =>
      graphqlFetch(GET_SWIPES),
    )

    async function dataLoader(): Promise<void> {
      loading.value = true
      data.value = await awaitFetcher<SwipeType[]>('NF', '/edit-swipes', () =>
        graphqlFetch(GET_SWIPES),
      )
      loading.value = false
    }

    eventBus.subscribe('edit-swipes-update', async () => {
      await dataLoader()
    })

    onUnmounted(() => {
      eventBus.unsubscribe('edit-swipes-update')
    })

    return {
      data,
      loading,
    }
  },
})
</script>

<style scoped lang="scss">
.tips {
  font-size: 0.9rem;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4f4f4f;
}
</style>
