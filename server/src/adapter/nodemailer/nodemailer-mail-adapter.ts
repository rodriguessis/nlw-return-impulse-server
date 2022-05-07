import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7a3ecae5f8ebad",
      pass: "0366c8eb6a2365"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from : 'Equipe feedget <rodrigues.fricardo@gamail.com>',
            to: 'Ricardo Rodrigues <rodrigues.fricardo@gamail.com>',
            subject,
            html: body    
        });
    };

}