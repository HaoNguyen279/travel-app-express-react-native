const { chatWithGemma } = require('../services/gemma.service')

class GemmaController{
    async getResult(req, res, next){
        const data = await chatWithGemma();
        // console.log(data);
        // console.log(data.choices[0].message.content);
        res.json({
            ans : data.choices[0].message.content
        });
    }
}

module.exports = new GemmaController;