const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Ufersa = require('../models/Ufersa');


//tested
router.post('/',
    check(
        'ufersaId',
        'Por favor, digita uma matrícula com 10 dígitos!'
    ).isLength({ min: 10, max: 10 }),
    async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { ufersaId } = req.body;

            const ifExists = await Ufersa.findOne({ ufersaId: ufersaId });
            if(ifExists){
                return res.status(400).json('Já há uma matrícula com esse número ou ocorreu um erro inesperado!');
            }

            const newUfersaId = new Ufersa({
                ufersaId
            });
            await newUfersaId.save();

            return res.json(newUfersaId);
        } catch (error) {
            console.log(error);
            return res.status(400).json('Já há uma matrícula com esse número ou ocorreu um erro inesperado!');
        }
    }
);

module.exports = router;