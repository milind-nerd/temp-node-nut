//function which will send data to Mongo DB

import mongoose from "mongoose";
import { ContactSchema } from '../models/crmModel.js'

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
};

