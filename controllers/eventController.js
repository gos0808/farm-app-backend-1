const EventModel = require('../models/EventModel');
    
module.exports.getEvents = async (req, res) => {
  const events = await EventModel.find()
  res.send(events)
}

module.exports.saveEvents = async (req, res) => {
  const { name, description, season, image } = req.body;
  const newEvent = new EventModel({ name, description, season, image });
  await newEvent.save();
  res.send(newEvent);
}