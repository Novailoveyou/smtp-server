'use strict'

/**
 * smtp router.
 */

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/v1/smtp',
      handler: 'smtp.sendEmail',
      config: {
        policies: []
      }
    }
  ]
}
