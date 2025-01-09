const ContactModel = require('../models/ContactModel');

module.exports.getContact = async (req, res) => {
    const contacts = await ContactModel.find();
    res.send(contacts);
};

module.exports.saveContact = async (req, res) => {
    const { name, email, message, userId } = req.body;
    const newContact = new ContactModel({ name, email, message, userId });
    await newContact.save();
    res.send(newContact);
};