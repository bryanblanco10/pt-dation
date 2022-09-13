<template>
  <section class="content">
    <div class="content-login">
      <div class="content-logo">
        <img src="@/assets/images/logo_alcaldia.png" alt="dation" />
      </div>
      <div class="content-tilte">
        <h3>Registrar usuario</h3>
      </div>
      <div class="content-form">
        <form-register />
      </div>
    </div>
  </section>
</template>

<script>
  import FormRegister from './components/FormRegister';

export default {
  components: {
    FormRegister,
  },
  data() {
    return {}
  },
  methods: {},
};
</script>

<style lang="css">
.content {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.content-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 0;
  margin: 0;
}

.content-logo {
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content-tilte {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: var(--third-color);
  padding: 15px;
  padding-bottom: 30px;
  color: var(--white-color);
  font-family: var(--fuente-poppins);
  text-align: center;
  position: relative;
  top: -20px;
  letter-spacing: 1px;
}

.content-tilte h3 {
  font-size: 18px;
}

.content-form {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: var(--white-color);
  padding: 40px;
  position: relative;
  top: -40px;
  border: 1px solid var(--gray-14);
}

.content-link {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.content-link a {
  color: var(--primary-color);
  text-decoration: underline;
  font-family: var(--fuente-poppins);
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
}

.margin_bottom {
  margin-bottom: 20px;
}

/* ............. */
/*Media querys*/
/*** VERSION ESCRITORIO Y TABLETS PANTALLS GRANDE ***/
@media only screen and (min-width: 992px) and (max-width: 1200px) {
}
/*** VERSION TABLETS ***/
@media only screen and (min-width: 768px) and (max-width: 992px) {
}
/*** VERSION CELULAR ***/
@media only screen and (max-width: 767px) {
  .content {
    padding: 0;
  }
  .content-login {
    width: 100%;
  }
  .content-form {
    padding: 20px;
    padding-top: 30px;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>
