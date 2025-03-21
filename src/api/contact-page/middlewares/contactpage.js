'use strict';

/**
 * `contactpage` middleware
 */

const populate = {
  Header:{
    populate:"*"
  },
  Footer:{
    populate:"*"
  }
}


module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In contactpage middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }

    await next();
  };
};
