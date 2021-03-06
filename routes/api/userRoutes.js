const router = require('express').Router();
const { User, Question, Answer, Match } = require('../../models');

router.get('/', async(req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Question}, { model: Answer}, { model: Match}]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Question}, { model: Answer}, { model: Match}]
        });
        if (!userData) {
            res.status(404).json({ message: 'User not found'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const userData = await User.destroy({
            where: {
            id: req.params.id
        }
        });
        if (!userData) {
            res.status(404).json({ message: 'User not found'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;