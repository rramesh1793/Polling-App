const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote')
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '584039',
    key: '55e60adadcd129067db1',
    secret: 'e5a6ead4f6a1793ec7ed',
    cluster: 'us2',
    encrypted: true
  });

router.get('/', (req, res) => {
Vote.find().then(votes => res.json({sucess: true,
votes: votes}));
});

router.post('/', (req, res) => {
const newVote = {
    os: req.body.os,
    points:1
}

new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
        points: parseInt(vote.points),
        os: vote.os
      });
    
      return res.json({sucess:true, message: 'Thank you for voting' });
    

})
    
});

module.exports = router;