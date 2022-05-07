"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7a3ecae5f8ebad",
        pass: "0366c8eb6a2365"
    }
});
class NodemailerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe feedget <rodrigues.fricardo@gamail.com>',
            to: 'Ricardo Rodrigues <rodrigues.fricardo@gamail.com>',
            subject,
            html: body
        });
    }
    ;
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
