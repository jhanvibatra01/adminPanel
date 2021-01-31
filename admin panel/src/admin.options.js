const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companies/company.admin');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminCompany],
  dashboard: {
    handler: async () => {
      return { some: 'output' }
    },
    component: AdminBro.bundle('./my-dashboard-component')
  },
};

module.exports = options;
