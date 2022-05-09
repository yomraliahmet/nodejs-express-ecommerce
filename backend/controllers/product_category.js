const express = require('express');
const mongoose = require('mongoose');
const tree = require('../helpers/tree');

const ProductCategory = require('../models/ProductCategories');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    const listType = arg.req.query.list_type;

    ProductCategory.find({})
        .then((data) => {
            let newData = data.map((dataItem) => {
                return {
                    id: dataItem._id,
                    parent_id: dataItem.parent_id,
                    name: dataItem.name,
                    slug: dataItem.slug,
                    order: dataItem.order,
                    is_active: dataItem.is_active
                };
            }); 

            if(listType !== "list") {
                newData = tree.generate(newData);
            }

            const response = Response.make(200, 'Success', newData);
            arg.res.status(200).json(response);

        }).catch((err) => {
            const response = Response.make(400, 'Bad Request', null);
            arg.res.status(400).json(response);
        });

}

// Add new record.
function store(arg) {

    let { parent_id, name, slug, order, is_active } = arg.req.body;
    parent_id = parent_id === "" ? null : parent_id;

    ProductCategory.findOne({
        parent_id: parent_id,
        name: name,
        slug: slug
    })
    .then((data) => {

        if(data) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            const productCategory = new ProductCategory({ 
                parent_id, 
                name,
                slug,
                order,
                is_active 
            }); 

            productCategory.save()
            .then((data) => {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    name: data.name,
                    slug: data.slug,
                    order: data.order,
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
    let filter;

    if(id.length == 24) {
        filter = { _id: id }
    } else {
        filter = { slug: id }
    }

    ProductCategory.findOne(filter)
        .then((data) => {
            console.log(data);
            if (!data) {
                const response = Response.make(404, 'Product Category Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    parent_id: data.parent_id,
                    name: data.name,
                    slug: data.slug,
                    order: data.order,
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
    let { parent_id, name, slug, order, is_active } = arg.req.body;
    parent_id = parent_id === "" ? null : parent_id;

    ProductCategory.findById(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Category Not Found', null);
                arg.res.status(404).json(response);
            } else {

                ProductCategory.findByIdAndUpdate(id, { 
                    parent_id: parent_id, 
                    name: name, 
                    slug: slug, 
                    order: order, 
                    is_active: order 
                }, { new: true })
                .then((data) => {
                    console.log(data);
                    const response = Response.make(200, 'Success', {
                        id: data._id,
                        name: data.name,
                        slug: data.slug,
                        order: data.order,
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

    ProductCategory.findByIdAndRemove(id)
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'Product Category Not Found', null);
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