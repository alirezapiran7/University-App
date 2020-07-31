const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const User = require('../models/User');
const Ufersa = require('../models/Ufersa');

// @route    POST api/users
// @desc     Register user
// @access   Public
// tested
router.post('/',
    [
        check('name', 'O nome é requerido!').not().isEmpty(),
        check('email', 'Por favor, inclua um email válido!').isEmail(),
        check(
          'password',
          'Por favor, digita uma senha com um mínimo de 8 dígitos!'
        ).isLength({ min: 8 }),
        check(
            'ufersaId',
            'Por favor, digita uma matrícula com 10 dígitos!'
          ).isLength({ min: 10, max: 10 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, ufersaId } = req.body;

        try {
            let user = await User.findOne({ email });
            const matricula = await Ufersa.findOne({ufersaId: ufersaId});

            if (user) {
                return res.status(400).json({ errors: [{msg: 'Um usuário já foi cadastrado com esse email'}] });
            }

            if (!matricula) {
                return res.status(400).json({ errors: [{msg: 'Não há madricula cadastrada com esse número'}] });
            }

            const avatar = 'https://scontent.fjdo2-1.fna.fbcdn.net/v/t1.0-9/13466001_949046545207899_8910960548141766749_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=ncqocp7AIdQAX-q-bRR&_nc_ht=scontent.fjdo2-1.fna&oh=2a06042ba599da0a8ce3f5d5fd08f8db&oe=5F32F09D';

            console.log(matricula);

            user = new User({
                name,
                email,
                ufersaId,
                password,
                avatar
            });

            const salt = await bcrypt.genSalt(15);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: '1hr' },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
            );

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;