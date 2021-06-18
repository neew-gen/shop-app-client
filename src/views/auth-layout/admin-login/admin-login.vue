<template>
  <MDBContainer>
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol col="12">
        <MDBInput label="Email" v-model="values.email" />
        <ErrorField> {{ errors.email }} </ErrorField>
      </MDBCol>

      <MDBCol col="12">
        <div class="password-block">
          <MDBInput
            class="password-block__input"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            v-model="values.password"
          />
          <MDBBtn
            class="password-block__show"
            color="dark"
            @click="changeShowPassword"
          >
            <MDBIcon
              :icon="showPassword ? 'eye-slash' : 'eye'"
              iconStyle="fas"
            />
          </MDBBtn>
        </div>
        <ErrorField> {{ errors.password }} </ErrorField>
      </MDBCol>

      <MDBCol>
        <!--        :disabled="!meta.valid"-->
        <MDBBtn color="dark" class="w-100" type="submit"> Login </MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script lang="ts">
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from 'mdb-vue-ui-kit'
import { useField, useForm } from 'vee-validate'
import { defineComponent, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { object, string } from 'yup'

import ErrorField from '@/components/shared/ErrorField.vue'
import router from '@/router'
import { adminLogin, login } from '@/services/JwtService/requests'

export default defineComponent({
  name: 'admin-login',
  components: {
    ErrorField,
    MDBInput,
    MDBBtn,
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
  },
  setup() {
    const toast = useToast()
    const showPassword = ref(false)
    const schema = object({
      email: string().required().email().label('Email'),
      password: string().required().min(4).label('Password'),
    })

    const { values, errors, meta, setFieldError } = useForm({
      validationSchema: schema,
      initialValues: { email: '', password: '' },
    })
    useField<string>('email')
    useField<string>('password')

    const changeShowPassword = (): void => {
      showPassword.value = !showPassword.value
    }

    const onSubmit = (): void => {
      const { email, password } = values
      if (!(email && password)) return
      // TODO need to bcrypt this
      adminLogin({
        username: email,
        password: password,
      }).then((res) => {
        if (res === 'The login is invalid.') {
          setFieldError('email', 'Email is incorrect.')
          toast.error('Email is incorrect.')
        }
        if (res === 'The password is invalid.') {
          setFieldError('password', 'Password is incorrect.')
          toast.error('Password is incorrect.')
        }
        if (res === 'You do not have access.') {
          toast.error('You do not have access.')
        }
        if (res === 'Logged.') {
          router.push({ path: '/admin-panel' })
          toast.success('Successful login!')
        }
      })
    }

    return {
      showPassword,
      values,
      errors,
      meta,
      changeShowPassword,
      onSubmit,
    }
  },
})
</script>

<style scoped lang="scss">
.password-block {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'input show';
  &__input {
    grid-area: input;
  }
  &__show {
    grid-area: show;
    width: 40px;
    padding: 0;
  }
}
</style>
