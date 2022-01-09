// Logic behind the functionalities
const search = import('./api/index.mjs');
const data = import('./api/data.mjs');

class Controller {
  // getting all results
  async getInfos() {
    // return all search results
    const module = await data;
    return new Promise((resolve, _) => resolve(module.default));
  }

  // getting a single search result
  async getInfo(id) {
    const module = await search;
    return module.default(id);
  }
}
module.exports = Controller;
