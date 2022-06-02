const express = require('express');
const mongoose = require('mongoose');

const UserContract = require('../models/UserContracts');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    UserContract.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    user_id: data.user_id,
                    contract_id: data.contract_id,
                    content: data.content,
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

    const { user_id, contract_id, content } = arg.req.body;

    // Record Exists
    UserContract.findOne({
        user_id, contract_id
    }, (err, data) => {
        if (err) { throw err; }

        if (data) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            const userContract = new UserContract({
                user_id,
                contract_id,
                content,
            });

            userContract.save()
            .then((data) => {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    contract_id: data.contract_id,
                    content: data.content,
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

    UserContract.findById(id)
        .then((data) => {
            if (!data || data.deleted) {
                const response = Response.make(404, 'User Contract Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    contract_id: data.contract_id,
                    content: data.content,
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
    const { content } = arg.req.body;
    const updatedAt = new Date();

    UserContract.findById(id)
    .then((data) => {
        if (!data || data.deleted) {
            const response = Response.make(404, 'User Contract Not Found', null);
            arg.res.status(404).json(response);
        } else {

            data.updateOne(
                { deleted: false }, 
                { content, updatedAt },
                { new: true }
            );

            const response = Response.make(200, 'Success', {
                id: data._id,
                user_id: data.user_id,
                contract_id: data.contract_id,
                content: data.content,
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

    UserContract.findOne({ _id: id, deleted: false})
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'User Contract Not Found', null);
                arg.res.status(404).json(response);
            } else {
                UserContract.deleteById(id, (err, user) => {
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