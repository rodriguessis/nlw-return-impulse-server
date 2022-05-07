import express from 'express'
import { NodemailerMailAdapter } from './adapter/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedback } from './services/submit-feedbacks';

export const routes = express.Router()

routes.post('/feedbacks', async (req, resp) => {

    const {type, comment, screenshot} = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const submitFeedback = new SubmitFeedback( prismaFeedbacksRepository,
                                               nodemailerMailAdapter); 

    submitFeedback.execute( {
                type, 
                comment, 
                screenshot
            } );
 


    return resp.status(201).send();
})