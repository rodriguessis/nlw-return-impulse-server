import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbackRepository {
    async create( { type, comment, screenshot } : FeedbackCreateData) {
        
        // esse codigo precisa ser configurado novamente 
        // await prisma.feedback.create({
        //     data : {
        //         type,
        //         comment,
        //         screenshot
        //     }
        // })
    }
}