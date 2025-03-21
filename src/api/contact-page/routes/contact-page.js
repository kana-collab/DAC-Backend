'use strict';

/**
 * contact-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-page.contact-page',{
    config: {
        // Add your own logic here.
        find:{
            middlewares:['api::contact-page.contactpage']
        },
        findOne:{
            middlewares:['api::contact-page.contactpage']
        },
    },
});
