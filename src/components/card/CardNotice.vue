<template>
    <b-card class="card-notice overflow-hidden p-0 h-100" no-body v-if="item">
      <router-link :to="{ name: 'Detail', params: { slug: item.slug }}">
        <img class="img-card" :src="loadImg(item.img)" :alt="item.title" />
      </router-link>
    <div class="contend-card">
      <p class="caption">
        <strong>Por</strong> {{ item.caption }}
      </p>
      <div class="content-circles mt-1">
        <div class="content-circles" v-for="(category, index) in item.categories" :key="index">
          <span class="circle" :style="{ backgroundColor: category.color }" />
          <span class="circle-title"> {{ category.title }} </span>
        </div>
      </div>
      <router-link :to="{ name: 'Detail', params: { slug: item.slug }}">
        <h3 class="title-card">
          {{ item.title }}
        </h3>
      </router-link>
      <p class="card-paragraph">
        {{ item.description }}
      </p>
      <div class="content-like">
        <button @click.prevent="() => $emit('addRemoveFavorite', item.id)">
          <b-icon-heart-fill class="icon_heart_fill" v-if="item.isLike" />
          <b-icon-heart class="icon_heart" v-else />
        </button>
      </div>
    </div>
    </b-card>
</template>

<script>
import { 
  BCard, 
  BIconHeart,
  BIconHeartFill,
 } from "bootstrap-vue";
export default {
  props: {
    item: {
      type: Object,
      detault: null,
    },
  },
  components: {
    BCard,
    BIconHeart,
    BIconHeartFill,
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
  cursor: pointer;
}

.img-card {
  height: 200px;
  width: 100%;
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
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
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
.content-like {
  display: flex;
  justify-content: flex-end;
  z-index: 4;
  font-size: 25px;
  color: var(--primary-color);
}
.content-like button {
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
}
.icon_heart_fill {
  color: var(--primary-color);
}
.icon_heart {
  color: var(--primary-color);
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
