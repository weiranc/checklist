const checklist = require('./controller');

module.exports = (server) => {
  server.route('')
    .get(checklist.list_all_items)
    .post(checklist.create_an_item);

  server.route(':itemId')
    .delete(checklist.delete_an_item);
};
