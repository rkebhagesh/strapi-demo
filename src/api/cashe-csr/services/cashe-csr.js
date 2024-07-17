'use strict';

/**
 * cashe-csr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cashe-csr.cashe-csr');
