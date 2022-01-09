// Logic behind the functionalities
const search = import('./api/index.mjs');
const data = import('./api/data.mjs');

class Controller {
  // getting all todos
  async getInfos() {
    // return all todos
    const module = await data;
    return new Promise((resolve, _) => resolve(module.default));
  }

  // getting a single todo
  async getInfo(id) {
    const module = await search;
    return module.default(id);
  }
}
module.exports = Controller;
