const express = require('express');
const mongoose = require('mongoose');
const tree = require('../helpers/tree');

const Contract = require('../models/Contracts');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    Contract.find({})
        .then((data) => {
            let newData = data.map((dataItem) => {
                return {
                    id: dataItem._id,
                    name: dataItem.name,
                    key: dataItem.key,
                    content: dataItem.content,
                    is_active: dataItem.is_active
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

    let { name, key, content, is_active } = arg.req.body;

    Contract.findOne({
        name: name,
        key: key
    })
    .then((data) => {

        if(data) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            const contract = new Contract({ 
                name,
                key,
                content,
                is_active 
            }); 

            contract.save()
            .then((data) => {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    name: data.name,
                    key: data.key,
                    content: data.content,
                    is_active: data.is_active
                });
                arg.res.status(200).json(response);
            })
            .catch((err) => {
                const response = Response.make(400, 'Bad Request', err);
                arg.res.status(400).json(response);
            });
        }
    });
}

// Get one record.
function show(arg) {
    const id = arg.req.params.id ?? null;

    Contract.findById(id)
        .then((data) => {
            console.log(data);
            if (!data) {
                const response = Response.make(404, 'Contract Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    name: data.name,
                    key: data.key,
                    content: data.content,
                    is_active: data.is_active
                });
                arg.res.status(200).json(response);
            }
        })
        .catch((err) => {
            const response = Response.make(404, 'Not Found', err);
            arg.res.status(404).json(response);
        });
}

// Update a record
function update(arg) {

    const id = arg.req.params.id;
    let { name, key, content, is_active } = arg.req.body;

    Contract.findById(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Contract Not Found', null);
                arg.res.status(404).json(response);
            } else {

                Contract.findByIdAndUpdate(id, {  
                    name: name, 
                    key: key, 
                    content: content, 
                    is_active: is_active 
                }, { new: true })
                .then((data) => {
                    console.log(data);
                    const response = Response.make(200, 'Success', {
                        id: data._id,
                        name: data.name,
                        key: data.key,
                        content: data.content,
                        is_active: data.is_active
                    });
                    arg.res.status(200).json(response);
                });
            }
        })
        .catch(() => {
            const response = Response.make(404, 'Not Found', null);
            arg.res.status(404).json(response);
        });
}

// Delete a record.
function remove(arg) {
    const id = arg.req.params.id;

    Contract.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Contract Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', null);
                arg.res.status(200).json(response);
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