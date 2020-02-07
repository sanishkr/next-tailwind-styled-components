const routes = require('next-routes')();

routes
  .add({ name: 'page1', pattern: '/page1', page: 'page1' })
  .add({ name: 'page2', pattern: '/page2', page: 'page2' })
  .add({ name: '404', pattern: '/404', page: '404' })
  .add({ name: 'default', pattern: '/', page: 'home' });

module.exports = routes;
