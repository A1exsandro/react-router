const express = require('express');

const dbTest = [{name: 'secondName'}];
const routes = express.Router();
const { PrismaClient } = require('@prisma/client');
const { response } = require('express');

const prisma = new PrismaClient();

//CREATE
routes.post('/', async (request, response) => {
  const { name } = request.body;
  const student = await prisma.student.create({
    data: {
      name,
    }
  }); 
  return response.status(201).json(student);
});

//READ
routes.get('/', async (request, response) => {
  const students = await prisma.student.findMany();
  return response.status(200).json(students);
});

//UPDATE
routes.put('/', async (request, response) => {
  const { name, id } = request.body;

  if(!id) {
    return response.status(400).json('Id is mandatory');
  }

  const alreadyExist = await prisma.student.findUnique({ where: { id } });
  if(!alreadyExist) {
    return response.status(404).json('Not exist');
  }

  const student = await prisma.student.update({
    where: {
      id,
    },
    data: {
      name,
    }
  });
  return response.status(200).json(student);
});

//DELETE
routes.delete('/:id', async (request, response) => {
  const { id } = request.params;

  if(!id) {
    return response.status(400).json('Id is mandatory');
  }

  const alreadyExist = await prisma.student.findUnique({ where: { id } });
  if(!alreadyExist) {
    return response.status(404).json('Not exist');
  }
  await prisma.student.delete({ where: { id } });
  return response.status(200).send;
})

module.exports = routes;