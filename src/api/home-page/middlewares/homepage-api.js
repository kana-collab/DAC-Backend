'use strict';

/**
 * `homepage-api` middleware
 */

const populate = {

  //worktitle:"True",
  Header:{
    populate:"*"
  },
  Hero:{
    populate:"*"
  },
  Story:{
    populate:"*"
  },
  Services:{
    populate:{
      fields:['ServiceSectionName','ServiceSectionText'],
      ServiceCards:{
        populate:{
          fields:['CardTitle','CardSubtext'],
          ServiceImage:{
            populate:{
              fields:['url','alternativeText']
            }
          }
        }
      },
      Nocard:{
        populate:{
          fields:['CardTitle','CardSubtext'],
          ServiceImage:{
            populate:{
              fields:['url']
            }
          }
        }
      }
    },
  },  
  Workcard:{
    populate:"*"
  },
  CTA:{
    populate:"*"
  },
  Footer:{
    populate:"*"
  }
}

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In homepage-api middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }
    await next();
  };
};
