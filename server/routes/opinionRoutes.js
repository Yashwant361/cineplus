const express = require('express')
const router = express.Router();

const { createOpinion,
    getOpinions,
    likeOpinion,
    dislikeOpinion
} = require('../controllers/opinionController');

router.post('/opinion', createOpinion)
router.get('/opinions/:movieId', getOpinions)
router.put('/opinion/like/:id', likeOpinion)
router.put('/opinion/dislike/:id', dislikeOpinion)

module.exports = router