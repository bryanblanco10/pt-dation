<template>
  <router-link :to="{ name: 'Detail', params: { slug: item.slug }}">
    <b-card class="card-notice overflow-hidden p-0 h-100" no-body v-if="item">
    <img :src="loadImg(item.img)" :alt="item.title" />
    <div class="contend-card">
      <p class="caption">
        <strong>Por</strong> {{ item.caption }}
      </p>
      <div class="content-circles mt-1">
        <div class="content-circles">
          <span class="circle1" />
          <span class="circle-title"> Covid </span>
        </div>
        <div class="content-circles">
          <span class="circle2" />
          <span class="circle-title"> Salud </span>
        </div>
      </div>
      <h3 class="title-card">
        {{ item.title }}
      </h3>
      <p class="card-paragraph">
        {{ item.description }}
      </p>
    </div>
    </b-card>
  </router-link>
  
</template>

<script>
import { BCard } from "bootstrap-vue";
export default {
  props: {
    item: {
      type: Object,
      detault: null,
    },
  },
  components: {
    BCard,
  },
  data() {
    return {};
  },
  methods: {
    loadImg(path) {
      const img = require(`@/assets/images/${path}`);
      return img;
    },
  },
};
</script>
<style lang="css">
.card-notice {
  border-radius: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  cursor: po;
}

.card-notice img {
  height: 200px;
}
.contend-card {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.caption {
  padding: 0;
  margin: 0;
  margin-top: 5px;
  color: var(--black-color);
  font-family: var(--fuente-poppins);
  font-size: 13px;
}
.caption strong {
  margin-right: 5px;
}
.content-circles {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
}
.circle1 {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: var(--second-color);
}
.circle2 {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: var(--third-color);
}
.circle-title {
  color: var(--black-color);
  font-family: var(--fuente-poppins);
  font-size: 13px;
  margin-right: 5px;
}
.title-card {
  color: var(--primary-color);
  font-family: var(--fuente-roboto);
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.6px;
}
.card-paragraph {
  color: var(--black-color);
  font-family: var(--fuente-poppins);
  font-size: 16px;
  letter-spacing: 0.6px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  .title-card {
    font-size: 18px;
  }
  .caption {
    font-size: 12px;
  }
  .card-paragraph {
    font-size: 14px;
  }
  .circle-title {
    font-size: 12px;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>
