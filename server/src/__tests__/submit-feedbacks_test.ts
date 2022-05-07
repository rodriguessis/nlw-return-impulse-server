import { SubmitFeedback } from "../services/submit-feedbacks";

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('SubmitFeedbacks', () => {

    it('should be able to submit a feedback', async ()=>{

        await expect( submitFeedback.execute(
                    {
                        type: 'BUG',
                        comment: 'Deu erro aqui oh...',
                        screenshot: 'data:image/png;base64:asdhfalsdhfalsdhfalk.jpg',
                    })
                ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit a feedback without type', async ()=>{

        await expect( submitFeedback.execute(
                    {
                        type: '',
                        comment: 'Deu erro aqui oh...',
                        screenshot: 'data:image/png;base64:asdhfalsdhfalsdhfalk.jpg',
                    })
                ).rejects.toThrow();

    })

    it('should not be able to submit a feedback without Comment', async ()=>{

        await expect( submitFeedback.execute(
                    {
                        type: 'BUG',
                        comment: '',
                        screenshot: 'data:image/png;base64:asdhfalsdhfalsdhfalk.jpg',
                    })
                ).rejects.toThrow();

    })

    it('should not be able to submit a feedback with invalid format screenshot', async ()=>{

        await expect( submitFeedback.execute(
                    {
                        type: 'BUG',
                        comment: 'Deu erro aqui oh...',
                        screenshot: 'formato_inválido.xxx',
                    })
                ).rejects.toThrow();

    })


})