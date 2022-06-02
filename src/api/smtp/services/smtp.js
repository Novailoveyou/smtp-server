'use strict';

/**
 * smtp service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smtp.smtp');
