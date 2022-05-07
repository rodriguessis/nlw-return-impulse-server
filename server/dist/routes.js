"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const nodemailer_mail_adapter_1 = require("./adapter/nodemailer/nodemailer-mail-adapter");
const prisma_feedbacks_repository_1 = require("./repositories/prisma/prisma-feedbacks-repository");
const submit_feedbacks_1 = require("./services/submit-feedbacks");
exports.routes = express_1.default.Router();
exports.routes.post('/feedbacks', async (req, resp) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbacksRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitFeedback = new submit_feedbacks_1.SubmitFeedback(prismaFeedbacksRepository, nodemailerMailAdapter);
    submitFeedback.execute({
        type,
        comment,
        screenshot
    });
    return resp.status(201).send();
});
