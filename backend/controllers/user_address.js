const express = require('express');
const mongoose = require('mongoose');

const UserAddress = require('../models/UserAddresses');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    UserAddress.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    user_id: data.user_id,
                    name: data.name,
                    country: data.country,
                    city: data.city,
                    address: data.address
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

    const { user_id, name, country, city, address } = arg.req.body;

    // Record Exists
    UserAddress.findOne({
        user_id, name
    }, (err, data) => {
        if (err) { throw err; }

        if (data) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            const userAddress = new UserAddress({
                user_id,
                name,
                country,
                city,
                address
            });

            userAddress.save()
            .then((data) => {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    name: data.name,
                    country: data.country,
                    city: data.city,
                    address: data.address
                });
                arg.res.status(200).json(response);
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

    UserAddress.findById(id)
        .then((data) => {
            if (!data || data.deleted) {
                const response = Response.make(404, 'User Address Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    name: data.name,
                    country: data.country,
                    city: data.city,
                    address: data.address
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
    const { name, country, city, address } = arg.req.body;
    const updatedAt = new Date();

    UserAddress.findById(id)
    .then((data) => {
        if (!data || data.deleted) {
            const response = Response.make(404, 'User Address Not Found', null);
            arg.res.status(404).json(response);
        } else {

            data.updateOne(
                { deleted: false }, 
                { name, country, city, address, updatedAt },
                { new: true }
            );

            const response = Response.make(200, 'Success', {
                id: data._id,
                user_id: data.user_id,
                name: data.name,
                country: data.country,
                city: data.city,
                address: data.address
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

    UserAddress.findOne({ _id: id, deleted: false})
        .then((user) => {
            if (!user) {
                const response = Response.make(404, 'User Address Not Found', null);
                arg.res.status(404).json(response);
            } else {
                UserAddress.deleteById(id, (err, user) => {
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