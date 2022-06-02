'use strict'

/**
 *  smtp controller
 */

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::smtp.smtp', ({ strapi }) => ({
  async sendEmail(ctx) {
    try {
      console.log(ctx.request.body)
      ctx.body = 'ok'
    } catch (err) {
      ctx.body = err
    }
  }
}))
