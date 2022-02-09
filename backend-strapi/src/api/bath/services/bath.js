'use strict';

/**
 * bath service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bath.bath');
