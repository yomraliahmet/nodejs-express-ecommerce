const express = require('express');
const mongoose = require('mongoose');

const ProductVotes = require('../models/ProductVotes');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    ProductVotes.find({})
        .then((data) => {

            const newData = {
                id: data._id,
                user_id: data.user_id,
                product_id: data.product_id,
                degree: data.degree,
            };

            const response = Response.make(200, 'Success', newData);
            arg.res.status(200).json(response);

        }).catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        });

}

// Add new record.
function store(arg) {

    let { user_id, product_id, degree } = arg.req.body;

    ProductVotes.findOne({
        user_id: user_id,
        product_id: product_id
    })
    .then((data) => {
        const productVotes = new ProductVotes({ 
            user_id, 
            product_id, 
            degree, 
        }); 

        productVotes.save()
        .then((data) => {
            const response = Response.make(200, 'Success', {
                id: data._id,
                user_id: data.user_id,
                product_id: data.product_id,
                degree: data.degree,
            });
            arg.res.status(200).json(response);
        })
        .catch((err) => {
            const response = Response.make(400, 'Bad Request', err);
            arg.res.status(400).json(response);
        });
    });
}

// Get one record.
function show(arg) {
    const id = arg.req.params.id ?? null;

    ProductVotes.findById(id)
        .then((data) => {
            console.log(data);
            if (!data) {
                const response = Response.make(404, 'Product Votes Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    product_id: data.product_id,
                    degree: data.degree,
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
    let { user_id, product_id, degree } = arg.req.body;

    ProductVotes.findById(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Votes Not Found', null);
                arg.res.status(404).json(response);
            } else {

                ProductVotes.findByIdAndUpdate(id, { 
                    user_id: user_id,  
                    product_id: product_id,  
                    degree: degree,  
                }, { new: true })
                .then((data) => {
                    console.log(data);
                    const response = Response.make(200, 'Success', {
                        id: data._id,
                        user_id: data.user_id,
                        product_id: data.product_id,
                        degree: data.degree,
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

    ProductVotes.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Votes Not Found', null);
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