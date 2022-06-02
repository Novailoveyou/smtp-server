'use strict'

/**
 *  smtp controller
 */

const nodemailer = require('nodemailer')

const { createCoreController } = require('@strapi/strapi').factories

module.exports = createCoreController('api::smtp.smtp', ({ strapi }) => ({
  async sendEmail(ctx) {
    try {
      const { from, to, subject, text, html } = ctx.request.body

      const env = {
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT,
        login: process.env.SMTP_LOGIN,
        password: process.env.SMTP_PASSWORD
      }

      const transporter = nodemailer.createTransport({
        host: env.host,
        port: env.port,
        secure: false, // true for 465, false for other ports
        logger: true,
        debug: true,
        tls: {
          rejectUnAuthorized: true
        },
        auth: {
          user: env.login,
          pass: env.password
        }
      })

      await transporter.sendMail({
        from,
        to,
        subject, // Subject line
        text, // plain text body
        html
      })

      // console.log('Message sent: %s', emailRes.messageId)
      // res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')
      ctx.body = { status: 200, msg: 'Email is sent' }
    } catch (err) {
      console.error(err)
      ctx.body = err
    }
  }
}))
