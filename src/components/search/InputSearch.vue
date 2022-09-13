<template>
  <div class="content-search mb-4">
    <input 
      v-model="value"
      class="input-search"
      type="search"
      placeholder="Todas las noticias"
      @input="() => $emit('search', value)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    }
  },
}
</script>

<style lang="css">
  .content-search {
  width: 40%;
}
.input-search {
  background: var(--white-color);
  border: 2px solid var(--gray-light-color);
  box-sizing: border-box;
  border-radius: 1rem !important;
  margin-bottom: 20px;
  height: 40px;
  padding: 15px;
  width: 100%;
  font-size: 16px;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
}

.input-search::placeholder {
  color: var(--gray-light-color);
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
  .content-search {
    width: 100%;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>