const NetUser = require('../models/NetUser')
const Appointment = require('../models/Appointment')
const Sale = require('../models/Sale')
const SaleDetails = require('../models/SaleDetails')

exports.getAccounts = function(req, res) {
  NetUser
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

exports.getSingleAccount = function(req, res) {
  const accountId = parseInt(req.params.id)
  NetUser
    .query()
    .findById(accountId)
    .then(function(account) {
      res.json(account).status(200)
    })
}

exports.createNewAccount = function(req, res) {
  NetUser
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

exports.editAccount = function(req, res) {
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

exports.deleteAccount = function(req, res) {
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

exports.getServices = function(req, res) {
  SaleDetails
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

exports.getSingleService = function(req, res) {
  const serviceId = req.params.id
  SaleDetails
    .query()
    .findById(serviceId)
    .then(function(service) {
      res.json(service).status(200)
    })
}

exports.createNewService = function(req, res) {
  SaleDetails
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

exports.editService = function(req, res) {
  const serviceId = parseInt(req.params.id)
  const newData = req.body
  SaleDetails
  	.query()
  	.updateAndFetchById(serviceId, newData)
    .then(function(updatedJob) {
      res.json(updatedJob).status(200)
    })
}

exports.deleteService = function(req, res) {
  const serviceId = parseInt(req.params.id)
  SaleDetails
    .query()
    .deleteById(serviceId)
    .then(function(rowsDeleted) {
  	  res.json({ serviceDeleted: rowsDeleted })
    }).status(200)
}

exports.getAppointments = function(req, res) {
  Appointment
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

exports.getSingleAppointment = function(req, res) {
  const appointmentId = parseInt(req.params.id)
  Appointment
    .query()
    .findById(appointmentId)
    .then(function(appointment) {
      res.json(appointment).status(200)
    })
}

exports.createNewAppointment = function(req, res) {
  Appointment
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

exports.editAppointment = function(req, res) {
  const appointmentId = parseInt(req.params.id)
  const newData = req.body
  Appointment
  	.query()
  	.updateAndFetchById(appointmentId, newData)
    .then(function(updatedJob) {
      res.json(updatedJob).status(200)
    })
}

exports.deleteAppointment = function(req, res) {
  const appointmentId = parseInt(req.params.id)
  Appointment
    .query()
    .deleteById(appointmentId)
    .then(function(rowsDeleted) {
  	  res.json({ appointmentDeleted: rowsDeleted })
    }).status(200)
}
