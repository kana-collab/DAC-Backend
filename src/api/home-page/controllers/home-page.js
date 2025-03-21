'use strict';

/**
 * home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::home-page.home-page", ({ strapi }) => ({
 
    async find(ctx) {
      // Call the default core controller's find method
      const { data, meta } = await super.find(ctx);
  
      // Fetch SEO data (assuming it's a single type or collection type)
      const seoData = await strapi.entityService.findMany('api::seo.seo', {
        filters: { Title: 'Dev Alliance Company - Web Development Services' }, // Adjust the filter as needed
        limit: 1,
      });
  
      // Add SEO fields to the meta section
      meta.seo = seoData.length > 0 ? seoData[0] : null;
  
      return { data, meta };
    },
  }));
