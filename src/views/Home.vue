<template>
  <div>
    <Header />
    <section class="content-home">
      <input-search @search="search" />
      <b-row v-if="records.length > 0">
        <b-col
          lg="4"
          md="6"
          sm="12"
          class="mb-4"
          v-for="item in records"
          :key="item.id"
        >
          <card-notice :item="item" @addRemoveFavorite="addRemoveFavorite" />
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col lg="12" md="12" sm="12">
          <div>
            No se encontrarón resultados de <strong>{{ value }}</strong>
          </div>
        </b-col>
      </b-row>
      <div class="d-flex justify-content-center" v-if="isVisible">
        <button class="btn_primary w-25" @click.prevent="lastPage()">
          Ver más
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";
import Header from "@/components/header/Header";
import InputSearch from "@/components/search/InputSearch";
import CardNotice from "@/components/card/CardNotice";
import { mapState } from "vuex";

export default {
  inject: ["noticeRepository"],
  name: "Home",
  components: {
    Header,
    InputSearch,
    CardNotice,
    BRow,
    BCol,
  },
  data() {
    return {
      records: [],
      value: null,
      page: 3,
      isVisible: true,
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    async loadNotices() {
      const me = this;
      const res = await me.noticeRepository.getAll(me.page);
      me.fillFavorities(res);
    },
    async search(value) {
      const me = this;
      me.value = value;
      const res = await me.noticeRepository.search(value);
      me.records = res;
    },
    fillFavorities(data) {
      const me = this;
      if (localStorage.getItem("favorities")) {
        const favorities = JSON.parse(localStorage.getItem("favorities"));

        data.forEach((record) => {
          favorities.forEach((favorite) => {
            if (me.user.email == favorite.email && record.id == favorite.id) {
              record.isLike = true;
            }
          });
          me.records.push(record);
        });
      } else {
        me.records = data;
      }
      me.records.length >= 10 ? me.isVisible = false : me.isVisible = true;
    },
    addRemoveFavorite(id) {
      const me = this;
      me.records.forEach((el) => {
        if (el.id == id) {
          el.isLike ? (el.isLike = false) : (el.isLike = true);
        }
      });
      const favorities = [];
      me.records.forEach((el) => {
        if (el.isLike) {
          favorities.push({
            id: el.id,
            email: me.user.email,
          });
        }
      });
      localStorage.setItem("favorities", JSON.stringify(favorities));
    },
    lastPage() {
      const me = this;
      me.page = me.page + 3;
      me.records = [];
      me.loadNotices(me.page);
    },
  },
  mounted() {
    const me = this;
    me.loadNotices();
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
