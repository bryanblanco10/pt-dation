<template>
  <div>
    <Header />
    <section class="content-home">
      <b-card no-body class="overflow-hidden" v-if="record">
        <b-row no-gutters>
          <b-col md="6">
            <img :src="loadImg(record.img)" alt="Image" class="w-100" />
          </b-col>
          <b-col md="6">
            <div class="contend-card-detail">
              <p class="caption-detail">
                <strong>Por</strong> {{ record.caption }}
              </p>
              <div class="content-circles-detail mt-1">
                <div
                  class="content-circles-detail"
                  v-for="(category, index) in record.categories"
                  :key="index"
                >
                  <span class="circle-detail" :style="{ backgroundColor: category.color }" />
                  <span class="circle-title"> {{ category.title }} </span>
                </div>
              </div>
              <h3 class="title-card-detail">
                {{ record.title }}
              </h3>
              <p class="card-paragraph-detail">
                {{ record.description }}
              </p>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </section>
  </div>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";
import Header from "@/components/header/Header";
export default {
  inject: ["noticeRepository"],
  components: {
    Header,
    BRow,
    BCol,
    BCard,
  },
  data() {
    return {
      record: null,
      slug: this.$route.params.slug,
    };
  },
  methods: {
    async loadNotice() {
      const me = this;
      const res = await me.noticeRepository.find(me.slug);
      me.record = res;
    },
    loadImg(path) {
      const img = require(`@/assets/images/${path}`);
      return img;
    },
  },
  mounted() {
    const me = this;
    me.loadNotice();
  },
};
</script>

<style lang="css">
.card-notice {
  border-radius: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.card-notice img {
  height: 200px;
}
.contend-card-detail {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.caption-detail {
  padding: 0;
  margin: 0;
  margin-top: 5px;
  color: var(--black-color);
  font-family: var(--fuente-poppins);
  font-size: 14px;
}
.caption-detail strong {
  margin-right: 5px;
}
.content-circles-detail {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 10px;
}
.circle-detail {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: var(--second-color);
}
.circle-title {
  color: var(--black-color);
  font-family: var(--fuente-poppins);
  font-size: 14px;
  margin-right: 5px;
}
.title-card-detail {
  color: var(--primary-color);
  font-family: var(--fuente-roboto);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.6px;
}
.card-paragraph-detail {
  color: var(--black-color);
  font-family: var(--fuente-poppins);
  font-size: 16px;
  letter-spacing: 0.6px;
  overflow: hidden;
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
  .title-card-detail {
    font-size: 18px;
  }
  .caption-detail {
    font-size: 12px;
  }
  .card-paragraph-detail {
    font-size: 14px;
  }
  .circle-title {
    font-size: 12px;
  }
  .circle1-detail {
    width: 15px;
    height: 15px;
  }
  .circle2-detail {
    width: 15px;
    height: 15px;
  }
}

/*** VERSION CELULAR PEQUEÑO ***/
@media only screen and (max-width: 340px) {
}
</style>
