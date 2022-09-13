<template>
  <div class="home-tilte">
    <b-icon-chevron-left class="icon_chevron" @click="() => this.$router.go(-1)"/>
    <h3>Noticias y eventos de ciudad</h3>
    <b-icon-box-arrow-left class="icon_logout" @click.prevent="logout" />
  </div>
</template>

<script>
  import { BIconChevronLeft, BIconBoxArrowLeft } from "bootstrap-vue";
  import { mapActions } from "vuex";
  export default {
    name: "Home",
    components: {
      BIconChevronLeft,
      BIconBoxArrowLeft,
    },
    methods: {
      ...mapActions("user", ["changeAuthenticated"]),
      logout() {
        const me = this;
        localStorage.removeItem("access_token");
        localStorage.removeItem("authenticated");
        localStorage.removeItem("user");
        me.changeAuthenticated({ ...null, authenticated: true });
        me.$router.push("/inicio-sesion");
      }
    },
  };
</script>
<style lang="css">
  .home-tilte {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    background-color: var(--third-color);
    padding: 15px;
    padding-bottom: 35px;
    color: var(--white-color);
    font-family: var(--fuente-poppins);
    text-align: left;
    letter-spacing: 1px;
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
  }
  .icon_chevron {
    margin-right: 40px;
    margin-left: 8px;
    font-size: 28px;
    cursor: pointer;
  }
  .icon_logout {
    font-size: 30px;
    color: var(--primary-color);
    cursor: pointer;
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
    .icon_chevron {
      margin-right: 18px;
      margin-left: 0px;
      font-size: 28px;
    }
  }
  
  /*** VERSION CELULAR PEQUEÑO ***/
  @media only screen and (max-width: 340px) {
  }
  </style>