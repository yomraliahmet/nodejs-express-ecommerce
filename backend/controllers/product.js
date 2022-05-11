const express = require('express');

const Product = require('../models/Products');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    Product.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    category_id: data.category_id,
                    name: data.name,
                    slug: data.slug,
                    description: data.description,
                    image_url: data.image_url,
                    video_url: data.video_url,
                    price: parseFloat(data.price.toString()),
                    discount: parseFloat(data.discount.toString()),
                    tax: parseFloat(data.tax.toString()),
                    currency: data.currency,
                    is_active: data.is_active,
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

    const { 
        category_id,
        name,
        slug,
        description,
        image_url,
        video_url,
        price,
        discount,
        tax,
        currency,
        is_active,
    } = arg.req.body;

    // Record Exists
    Product.findOne({
        name, slug
    }, (err, product) => {
        if (err) { throw err; }

        if (product) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            const product = new Product({
                category_id,
                name,
                slug,
                description,
                image_url,
                video_url,
                price,
                discount,
                tax,
                currency,
                is_active,
            });

            product.save()
                .then((data) => {
                    const response = Response.make(200, 'Success', {
                        id: data._id,
                        category_id: data.category_id,
                        name: data.name,
                        slug: data.slug,
                        description: data.description,
                        image_url: data.image_url,
                        video_url: data.video_url,
                        price: parseFloat(data.price.toString()),
                        discount: parseFloat(data.discount.toString()),
                        tax: parseFloat(data.tax.toString()),
                        currency: data.currency,
                        is_active: data.is_active,
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
    const id = arg.req.params.id ?? null;
    let filter;

    if(id.length == 24) {
        filter = { _id: id }
    } else {
        filter = { slug: id }
    }

    Product.findOne(filter)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    category_id: data.category_id,
                    name: data.name,
                    slug: data.slug,
                    description: data.description,
                    image_url: data.image_url,
                    video_url: data.video_url,
                    price: parseFloat(data.price.toString()),
                    discount: parseFloat(data.discount.toString()),
                    tax: parseFloat(data.tax.toString()),
                    currency: data.currency,
                    is_active: data.is_active,
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
    const { 
        category_id,
        name,
        slug,
        description,
        image_url,
        video_url,
        price,
        discount,
        tax,
        currency,
        is_active,
    } = arg.req.body;

    Product.findByIdAndUpdate(id, { 
        category_id,
        name,
        slug,
        description,
        image_url,
        video_url,
        price,
        discount,
        tax,
        currency,
        is_active,
    }, { new: true })
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    category_id: data.category_id,
                    name: data.name,
                    slug: data.slug,
                    description: data.description,
                    image_url: data.image_url,
                    video_url: data.video_url,
                    price: parseFloat(data.price.toString()),
                    discount: parseFloat(data.discount.toString()),
                    tax: parseFloat(data.tax.toString()),
                    currency: data.currency,
                    is_active: data.is_active,
                });
                arg.res.status(200).json(response);
            }
        })
        .catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        })
}

// Delete a record.
function remove(arg) {
    const id = arg.req.params.id;

    Product.findByIdAndRemove(id)
        .then((product) => {
            if (!product) {
                const response = Response.make(404, 'Product Not Found', null);
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