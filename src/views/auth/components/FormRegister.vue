<template>
  <b-form @submit.prevent="register">
    <b-row>
      <b-col lg="12" md="12" sm="12">
        <div role="group">
          <label for="names" class="label_input"
            >Ingresa tu nombre completo</label
          >
          <b-form-input
            v-model="$v.formData.names.$model"
            @blur="$v.formData.names.$touch()"
            :class="{ error: $v.formData.names.$error }"
            id="names"
            type="text"
            placeholder="Ingresar nombre completo"
            autofocus
          />
          <span
            v-if="$v.formData.names.$error"
            class="help-block text-left text_error"
          >
            {{ messageValidation($v.formData.names) }}
          </span>
        </div>
      </b-col>
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
            >Ingresa tu contraseña</label
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
        <div role="group">
          <label for="password_confirm" class="label_input"
            >Ingresa nuevamente tu contraseña</label
          >
          <b-form-input
            v-model="$v.formData.password_confirmation.$model"
            @blur="$v.formData.password_confirmation.$touch()"
            :class="{ error: $v.formData.password_confirmation.$error }"
            id="password_confirm"
            type="password"
          />
          <span
            v-if="$v.formData.password_confirmation.$error"
            class="help-block text-left text_error"
          >
            {{ messageValidation($v.formData.password_confirmation) }}
          </span>
        </div>
      </b-col>
      <b-col lg="12" md="12" sm="12" class="margin_bottom mt-3">
        <b-button
          type="submit"
          class="btn_primary"
          :disabled="$v.$invalid || isBusy"
        >
          <b-spinner v-if="isBusy" small />
          Registrar
        </b-button>
      </b-col>
      <b-col lg="12" md="12" sm="12">
        <router-link to="/inicio-sesion">
          <b-button class="btn_secondary">
            Tengo una cuenta, iniciar sesión
          </b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import validationMixin from "@/mixins/validationMixin";
import { required, email, sameAs } from "vuelidate/lib/validators";
import {
  BCol,
  BRow,
  BForm,
  BButton,
  BFormInput,
  BSpinner,
} from "bootstrap-vue";
import { generateToken } from "@/utils/generateToken";
import { messageSweetAlert } from "@/utils/alert";
import { mapActions } from "vuex";

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
        names: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      isBusy: false,
    };
  },
  validations: {
    formData: {
      names: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      password_confirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    ...mapActions("user", ["changeAuthenticated"]),
    async register() {
      const me = this;
      me.isBusy = true;
      setTimeout(async () => {
        const { text, status } = await me.authRepository.register(me.formData);
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
      localStorage.setItem("user", JSON.stringify(me.formData));
      me.changeAuthenticated({ ...me.formData, authenticated: true });
      window.location.reload();
      // me.$router.push("/inicio");
    },
  },
};
</script>
