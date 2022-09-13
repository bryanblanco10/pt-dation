import data from "../notices.json";
export default {
  async getAll() {
    return data;
  },
  async search(value) {
    const results = data.data.filter((el) => {
      const title = el.title.toLowerCase();
      const description = el.description.toLowerCase();
      const caption = el.caption.toLowerCase();

      return (
        title.includes(value) ||
        description.includes(value) ||
        caption.includes(value)
      );
    });

    return results;
  },
  async find(slug) {
    const notice = data.data.find((el) => el.slug == slug);

    return notice;
  }
};
