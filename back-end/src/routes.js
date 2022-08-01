const express = require('express');

const dbTest = [{name: 'firstName', status: false}];
const routes = express.Router();

//CREATE
routes.post('/', (request, response) => {
  const { name } = request.body;
  dbTest.push({ name, status: false});
  return response.status(201).json(dbTest);
});

module.exports = routes;