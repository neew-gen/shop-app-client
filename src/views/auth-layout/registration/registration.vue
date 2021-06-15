<template>
  <MDBContainer>
    <MDBRow tag="form" class="g-3" @submit.prevent="onSubmit">
      <MDBCol col="12">
        <MDBInput label="Name" v-model="values.name" />
        <ErrorField> {{ errors.name }} </ErrorField>
      </MDBCol>

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

      <MDBCol col="12">
        <div class="password-block">
          <MDBInput
            class="password-block__input"
            label="Repeat Password"
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="values.passwordConfirmation"
          />
          <MDBBtn
            class="password-block__show"
            color="dark"
            @click="changeShowConfirmPassword"
          >
            <MDBIcon
              :icon="showConfirmPassword ? 'eye-slash' : 'eye'"
              iconStyle="fas"
            />
          </MDBBtn>
        </div>
        <!--        <MDBInput label="Password" type="password" v-model="values.password" />-->
        <ErrorField> {{ errors.passwordConfirmation }} </ErrorField>
      </MDBCol>

      <MDBCol>
        <!--        {{ meta.valid === true }}-->
        <!--        &lt;!&ndash;        &ndash;&gt;-->
        <MDBBtn
          color="dark"
          type="submit"
          class="w-100"
          :disabled="!meta.valid"
        >
          Register
        </MDBBtn>
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
import { object, ref as yupRef, string } from 'yup'

import { register } from '@/services/JwtService/requests'
import ErrorField from '@/components/shared/InputWithErrorField/ErrorField.vue'
import router from '@/router'

export default defineComponent({
  name: 'registration',
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
    const showConfirmPassword = ref(false)
    const schema = object({
      email: string().required().email().label('Email'),
      password: string().required().min(4).label('Password'),
      name: string().required().min(4).label('Name'),
      passwordConfirmation: string()
        .required()
        .oneOf([yupRef('password'), null], 'Passwords must match.'),
    })

    const { values, errors, meta, setFieldError } = useForm({
      validationSchema: schema,
      initialValues: {
        email: '',
        password: '',
        name: '',
        passwordConfirmation: '',
      },
    })
    useField<string>('email')
    useField<string>('password')
    useField<string>('name')
    useField<string>('passwordConfirmation')

    const changeShowPassword = (): void => {
      showPassword.value = !showPassword.value
    }
    const changeShowConfirmPassword = (): void => {
      showConfirmPassword.value = !showConfirmPassword.value
    }

    const onSubmit = async (): Promise<void> => {
      const { email, password, name } = values
      if (!(email && password && name)) return
      // TODO need to bcrypt this
      const res = await register({
        username: email,
        password,
        name,
      })

      if (res === 'Username already in use.') {
        setFieldError('email', 'Email already in use.')
        toast.error('Email already in use.')
      }
      if (res === 'Registered.') {
        await router.push(
          sessionStorage.getItem('redirectPathAfterAuth') || '/profile',
        )
        toast.success('Registration was successful!')
      }
    }

    return {
      showPassword,
      showConfirmPassword,
      values,
      errors,
      meta,
      changeShowPassword,
      changeShowConfirmPassword,
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
