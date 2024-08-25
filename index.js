import express from 'express';
import bodyParser from 'body-parser';
import nodemon from 'nodemon';
import mongoose from 'mongoose';
import cors from 'cors';

const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// POST Route: /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.json({
            is_success: false,
            user_id: "rakesh_v_08072003", // Replace with actual full_name_dob
            message: "Invalid input format. 'data' should be an array."
        });
    }

    // Extract numbers and alphabets from the input data
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));

    // Calculate the highest lowercase alphabet (if any)
    const lowercaseAlphabets = alphabets.filter(char => /^[a-z]+$/.test(char));
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    // Build the response
    const response = {
        is_success: true,
        user_id: "rakesh_v_08072003", // Replace with actual full_name_dob
        email: "vemularakesh2003@gmail.com",         // Replace with actual email
        roll_number: "21bce9843",        // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    // Send the response
    res.json(response);
});

// GET Route: /bfhl
app.get('/bfhl', (req, res) => {
    // Return the hardcoded response with operation_code
    res.status(200).json({
        "operation_code": 1
    });
});

module.exports = app;
