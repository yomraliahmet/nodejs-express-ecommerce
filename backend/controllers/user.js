const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const User = require('../models/Users');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    User.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    email: data.email,
                    phone: data.phone,
                    name: data.name,
                    surname: data.surname,
                    country: data.country,
                    city: data.city
                };
            });

            const response = Response.make(200, 'Success', newData);
            arg.res.status(200).json(response);

        }).catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        });

}

// Add new record.
function store(arg) {

    const { email, password, phone, name, surname, country, city } = arg.req.body;

    // Record Exists
    User.findOne({
        email
    }, (err, user) => {
        if (err) { throw err; }

        if (user) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            bcrypt.hash(password, 10)
                .then((hash) => {
                    const user = new User({
                        email,
                        password: hash,
                        phone,
                        name,
                        surname,
                        country,
                        city
                    });

                    const userPromise = user.save();
                    userPromise
                        .then((data) => {
                            const response = Response.make(200, 'Success', {
                                id: data._id,
                                email: data.email,
                                phone: data.phone,
                                name: data.name,
                                surname: data.surname,
                                country: data.country,
                                city: data.city
                            });
                            arg.res.status(200).json(response);
                        })
                        .catch((err) => {
                            const response = Response.make(400, 'Bad Request', null);
                            arg.res.status(400).json(response);
                        });

                })
                .catch((err) => {
                    const response = Response.make(400, 'Bad Request', null);
                    arg.res.status(400).json(response);
                });
        }
    });
}

// Get one record.
function show(arg) {
    const id = arg.req.params.id;

    User.findById(id)
        .then((data) => {
            if (!data || data.deleted) {
                const response = Response.make(404, 'User Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    email: data.email,
                    phone: data.phone,
                    name: data.name,
                    surname: data.surname,
                    country: data.country,
                    city: data.city
                });
                arg.res.status(200).json(response);
            }
        })
        .catch(() => {
            const response = Response.make(404, 'Not Found', null);
            arg.res.status(404).json(response);
        });
}

// Update a record
function update(arg) {
    const id = arg.req.params.id;
    const { country, city } = arg.req.body;
    const updatedAt = new Date();

    User.findById(id)
    .then((data) => {
        if (!data || data.deleted) {
            const response = Response.make(404, 'User Not Found', null);
            arg.res.status(404).json(response);
        } else {

            data.updateOne(
                { deleted: false }, 
                { country, city, updatedAt },
                { new: true }
            );

            const response = Response.make(200, 'Success', {
                id: data._id,
                email: data.email,
                phone: data.phone,
                name: data.name,
                surname: data.surname,
                country: data.country,
                city: data.city
            });
            arg.res.status(200).json(response);
        }
    })
    .catch((err) => {
        const response = Response.make(400, 'Bad Request', null);
        arg.res.status(400).json(response);
    });
}

// Delete a record.
function remove(arg) {
    const id = mongoose.Types.ObjectId(arg.req.params.id);

    User.findOne({ _id: id, deleted: false})
        .then((user) => {
            if (!user) {
                const response = Response.make(404, 'User Not Found', null);
                arg.res.status(404).json(response);
            } else {
                User.deleteById(id, (err, user) => {
                    const response = Response.make(200, 'Success', null);
                    arg.res.status(200).json(response);
                });
            }
        })
        .catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        })
}

module.exports = {
    index,
    store,
    show,
    update,
    remove
}