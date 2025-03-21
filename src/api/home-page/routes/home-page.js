'use strict';

const middlewares = require('../../../../config/middlewares');
const { find } = require('../../../../config/middlewares');

/**
 * home-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-page.home-page', {
    config: {
        // Add your own logic here.
        find:{
            middlewares:['api::home-page.homepage-api']
        },
        findOne:{
            middlewares:['api::home-page.homepage-api']
        },
    },
});
