const router = require('express').Router();
const { User, Thought } = require("../../models");

// GET all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find().select('-__v');
        res.json(thoughts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET a single thought by its _id
router.get('/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id).select('-__v');

        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(thought);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST a new thought
router.post('/', async (req, res) => {
    try {
        const { thoughtText, username, userId } = req.body;

        const newThought = await Thought.create({ thoughtText, username, userId });
        
        // Push the created thought's _id to the associated user's thoughts array field
        await User.findByIdAndUpdate(userId, { $push: { thoughts: newThought._id } });

        res.status(201).json(newThought);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT to update a thought by its _id
router.put('/:id', async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(updatedThought);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE to remove a thought by its _id
router.delete('/:id', async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.id);

        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        // Remove the deleted thought's _id from the associated user's thoughts array field
        await User.findByIdAndUpdate(deletedThought.userId, { $pull: { thoughts: deletedThought._id } });

        res.json({ message: 'Thought deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const { thoughtId } = req.params;
        const { reactionBody, username } = req.body;

        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $push: { reactions: { reactionBody, username } } },
            { new: true }
        );

        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(updatedThought);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const { thoughtId, reactionId } = req.params;

        const updatedThought = await Thought.findByIdAndUpdate(
            thoughtId,
            { $pull: { reactions: { reactionId } } },
            { new: true }
        );

        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(updatedThought);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;