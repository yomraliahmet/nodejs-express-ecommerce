const express = require('express');
const mongoose = require('mongoose');

const UserBillingInformation = require('../models/UserBillingInformations');
const Response = require('../helpers/response');

// Get all data.
function index(arg) {

    UserBillingInformation.find({})
        .then((data) => {

            const newData = data.map((data) => {
                return {
                    id: data._id,
                    user_id: data.user_id,
                    bill_name: data.bill_name,
                    name: data.name,
                    surname: data.surname,
                    phone: data.phone,
                    city: data.city,
                    address: data.address,
                    bill_type: data.bill_type,
                    company_name: data.company_name,
                    tax_administration: data.tax_administration,
                    tax_number: data.tax_number,
                    efatura: data.efatura,
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
        user_id,
        bill_name, 
        name, 
        surname, 
        phone, 
        city, 
        address,
        bill_type,
        company_name,
        tax_administration,
        tax_number,
        efatura,

    } = arg.req.body;

    // Record Exists
    UserBillingInformation.findOne({
        user_id, bill_name
    }, (err, data) => {
        if (err) { throw err; }

        if (data) {
            const response = Response.make(409, 'This record is available.', null);
            arg.res.status(409).json(response);
        } else {
            // Add record
            const userBillingInformation = new UserBillingInformation({
                user_id,
                bill_name, 
                name, 
                surname, 
                phone, 
                city, 
                address,
                bill_type,
                company_name,
                tax_administration,
                tax_number,
                efatura,
            });

            userBillingInformation.save()
            .then((data) => {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    bill_name: data.bill_name,
                    name: data.name,
                    surname: data.surname,
                    phone: data.phone,
                    city: data.city,
                    address: data.address,
                    bill_type: data.bill_type,
                    company_name: data.company_name,
                    tax_administration: data.tax_administration,
                    tax_number: data.tax_number,
                    efatura: data.efatura,
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

    UserBillingInformation.findById(id)
        .then((data) => {
            if (!data || data.deleted) {
                const response = Response.make(404, 'User Billing Information Not Found', null);
                arg.res.status(404).json(response);
            } else {
                const response = Response.make(200, 'Success', {
                    id: data._id,
                    user_id: data.user_id,
                    bill_name: data.bill_name,
                    name: data.name,
                    surname: data.surname,
                    phone: data.phone,
                    city: data.city,
                    address: data.address,
                    bill_type: data.bill_type,
                    company_name: data.company_name,
                    tax_administration: data.tax_administration,
                    tax_number: data.tax_number,
                    efatura: data.efatura,
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
        bill_name, 
        name, 
        surname, 
        phone, 
        city, 
        address,
        bill_type,
        company_name,
        tax_administration,
        tax_number,
        efatura,
    } = arg.req.body;
    const updatedAt = new Date();

    UserBillingInformation.findById(id)
    .then((data) => {
        if (!data || data.deleted) {
            const response = Response.make(404, 'User Billing Information Not Found', null);
            arg.res.status(404).json(response);
        } else {

            data.updateOne(
                { deleted: false }, 
                { 
                    bill_name, 
                    name, 
                    surname, 
                    phone, 
                    city, 
                    address,
                    bill_type,
                    company_name,
                    tax_administration,
                    tax_number,
                    efatura,
                    updatedAt 
                },
                { new: true }
            );

            const response = Response.make(200, 'Success', {
                id: data._id,
                user_id: data.user_id,
                bill_name: data.bill_name,
                name: data.name,
                surname: data.surname,
                phone: data.phone,
                city: data.city,
                address: data.address,
                bill_type: data.bill_type,
                company_name: data.company_name,
                tax_administration: data.tax_administration,
                tax_number: data.tax_number,
                efatura: data.efatura,
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

    UserBillingInformation.findOne({ _id: id, deleted: false})
        .then((data) => {
            if (!data) {
                const response = Response.make(404, 'User Billing Information Not Found', null);
                arg.res.status(404).json(response);
            } else {
                UserBillingInformation.deleteById(id, (err, data) => {
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