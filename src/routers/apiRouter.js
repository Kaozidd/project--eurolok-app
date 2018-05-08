const Router = require('express').Router
const apiRouter = Router();

const NetUser = require('../models/NetUser')
const Appointment = require('../models/Appointment')
const Sale = require('../models/Sale')
const SaleDetails = require('../models/SaleDetails')

function getAccounts(req, res) {
  NetUser
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

function getSingleAccount(req, res) {
  const accountId = parseInt(req.params.id)
  NetUser
    .query()
    .findById(accountId)
    .then(function(account) {
      res.json(account).status(200)
    })
}

function createNewAccount(req, res) {
  NetUser
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

function editAccount(req, res) {
  const accountId = parseInt(req.params.id);
  const newData = req.body
  NetUser
    .query()
    .patchAndFetchById(accountId, newData)
    .then(function(updatedJob) {
      res.json(updatedJob).status(200)
      console.log(
        `${req.body.name} account updated!\n
        email: ${req.body.email}`
      )
    })
}

function deleteAccount(req, res) {
  const accountId = parseInt(req.params.id)
  NetUser
    .query()
    .deleteById(accountId)
    .then(function(rowsDeleted) {
      res.json({ 
        accountDeleted: rowsDeleted 
      }).status(200)
    })
}

function getServices(req, res) {
  SaleDetails
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

function getSingleService(req, res) {
  const serviceId = req.params.id
  SaleDetails
    .query()
    .findById(serviceId)
    .then(function(service) {
      res.json(service).status(200)
    })
}

function createNewService(req, res) {
  SaleDetails
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

function editService(req, res) {
  const serviceId = parseInt(req.params.id)
  const newData = req.body
  SaleDetails
  	.query()
  	.updateAndFetchById(serviceId, newData)
    .then(function(updatedJob) {
      res.json(updatedJob).status(200)
    })
}

function deleteService(req, res) {
  const serviceId = parseInt(req.params.id)
  SaleDetails
    .query()
    .deleteById(serviceId)
    .then(function(rowsDeleted) {
  	  res.json({ serviceDeleted: rowsDeleted })
    }).status(200)
}

function getAppointments(req, res) {
  Appointment
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

function getSingleAppointment(req, res) {
  const appointmentId = parseInt(req.params.id)
  Appointment
    .query()
    .findById(appointmentId)
    .then(function(appointment) {
      res.json(appointment).status(200)
    })
}

function createNewAppointment(req, res) {
  Appointment
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

function editAppointment(req, res) {
  const appointmentId = parseInt(req.params.id)
  const newData = req.body
  Appointment
  	.query()
  	.updateAndFetchById(appointmentId, newData)
    .then(function(updatedJob) {
      res.json(updatedJob).status(200)
    })
}

function deleteAppointment(req, res) {
  const appointmentId = parseInt(req.params.id)
  Appointment
    .query()
    .deleteById(appointmentId)
    .then(function(rowsDeleted) {
  	  res.json({ appointmentDeleted: rowsDeleted })
    }).status(200)
}


apiRouter

  .get('/accounts', getAccounts)
  .get('/accounts/:id', getSingleAccount)
  .post('/accounts/', createNewAccount)
  .put('/accounts/:id', editAccount)
  .delete('/accounts/:id', deleteAccount)

  .get('/services', getServices)
  .get('/services/:id', getSingleService)
  .post('/services', createNewService)
  .put('/services/:id', editService)
  .delete('/services/:id', deleteService)

  .get('/appointments', getAppointments)
  .get('/appointments/:id', getSingleAppointment)
  .post('/appointments', createNewAppointment)
  .put('/appointments/:id', editAppointment)
  .delete('/appointments/:id', deleteAppointment)

module.exports = apiRouter