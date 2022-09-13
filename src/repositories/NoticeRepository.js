import data from "../notices.json";
export default {
  async getAll(page) {
    const results = data.data.slice(0, page)
    return results;
  },
  async search(value) {
    const results = data.data.filter((el) => {
      value.toLowerCase();
      const title = el.title.toLowerCase();
      const description = el.description.toLowerCase();
      const caption = el.caption.toLowerCase();

      const some = el.categories.some(item => item.title.toLocaleLowerCase().includes(value));
      return (
        title.includes(value) ||
        description.includes(value) ||
        caption.includes(value) ||
        some
      );
    });

    return results;
  },
  async find(slug) {
    const notice = data.data.find((el) => el.slug == slug);

    return notice;
  }
};
