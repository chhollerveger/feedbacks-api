import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const { USER_MAIL_TRANSPORT, PASSWORD_MAIL_TRANSPORT } = process.env;

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: USER_MAIL_TRANSPORT,
    pass: PASSWORD_MAIL_TRANSPORT
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Feedget team <hi@feedget.com>',
      to: 'Carlos Henrique Hollerveger <chhollerveger@gmail.com>',
      subject,
      html: body,
    })
  };
}