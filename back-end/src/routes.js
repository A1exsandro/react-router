const express = require('express');

const dbTest = [{name: 'secondName'}];
const routes = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

//CREATE
routes.post('/', async (request, response) => {
  const { name } = request.body;
  const test = await prisma.student.create({
    data: {
      name,
    }
  }); 
  return response.status(201).json(test);
});

//READ
routes.get('/', (request, response) => {
  return response.status(200).json(dbTest);
});

module.exports = routes;