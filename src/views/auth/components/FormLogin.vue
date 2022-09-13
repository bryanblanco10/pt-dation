<template>
  <b-form @submit.prevent="login">
    <b-row>
      <b-col lg="12" md="12" sm="12">
        <div role="group">
          <label for="email" class="label_input"
            >Ingresa tu cuenta de correo electrónico</label
          >
          <b-form-input
            v-model="$v.formData.email.$model"
            @blur="$v.formData.email.$touch()"
            :class="{ error: $v.formData.email.$error }"
            id="email"
            type="email"
            placeholder="correo.usuario@gmail.com"
            autofocus
          />
          <span
            v-if="$v.formData.email.$error"
            class="help-block text-left text_error"
          >
            {{ messageValidation($v.formData.email) }}
          </span>
        </div>
      </b-col>
      <b-col lg="12" md="12" sm="12">
        <div role="group">
          <label for="password" class="label_input"
            >Ingresa tu contraseña de acceso</label
          >
          <b-form-input
            v-model="$v.formData.password.$model"
            @blur="$v.formData.password.$touch()"
            :class="{ error: $v.formData.password.$error }"
            id="password"
            type="password"
          />
          <span
            v-if="$v.formData.password.$error"
            class="help-block text-left text_error"
          >
            {{ messageValidation($v.formData.password) }}
          </span>
        </div>
      </b-col>
      <b-col lg="12" md="12" sm="12">
        <div class="content-link">
          <a>Olvidé mi contraseña</a>
        </div>
      </b-col>
      <b-col lg="12" md="12" sm="12" class="margin_bottom">
        <b-button
          type="submit"
          class="btn_primary"
          :disabled="$v.$invalid || isBusy"
        >
          <b-spinner v-if="isBusy" small />
          Ingresar
        </b-button>
      </b-col>
      <b-col lg="12" md="12" sm="12">
        <router-link to="/registro">
          <b-button class="btn_secondary">
            Soy nuevo quiero registrarme
          </b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import validationMixin from "@/mixins/validationMixin";
import { required, email } from "vuelidate/lib/validators";
import { generateToken } from "@/utils/generateToken";
import { messageSweetAlert } from "@/utils/alert";
import { mapActions } from "vuex";
import {
  BCol,
  BRow,
  BForm,
  BButton,
  BFormInput,
  BSpinner,
} from "bootstrap-vue";
export default {
  mixins: [validationMixin],
  inject: ["authRepository"],
  components: {
    BCol,
    BRow,
    BForm,
    BButton,
    BFormInput,
    BSpinner,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      isBusy: false,
    };
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions("user", ["changeAuthenticated"]),
    async login() {
      const me = this;
      me.isBusy = true;
      setTimeout(async () => {
        const { text, status } = await me.authRepository.login(me.formData);
        me.isBusy = false;
        if (status == 200) {
          me.statusSuccess(text);
        } else {
          messageSweetAlert("error", text);
        }
      }, 3000);
    },
    statusSuccess(text) {
      const me = this;
      messageSweetAlert("success", text);
      const token = generateToken();
      localStorage.setItem("access_token", token);
      localStorage.setItem("authenticated", true);
      me.changeAuthenticated(me.formData, true);
      me.$router.push("/inicio");
    },
  },
};
</script>
