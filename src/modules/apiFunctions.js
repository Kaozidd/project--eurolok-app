const User = require('../models/User')
const Appointment = require('../models/Appointment')
const Sale = require('../models/Sale')
const SaleDetails = require('../models/SaleDetails')

exports.getAccountsTeam = function(req, res) {
  User
    .query()
    .where('roleId', '=', '2')
    .then(function(data) {
      res.json(data)
    })
}

exports.getAccounts = function(req, res) {
  User
  	.query()
  	.then(function(data) {
  	  res.json(data)
  	})
}

exports.getSingleAccount = function(req, res) {
  const accountId = parseInt(req.params.id)
  User
    .query()
    .findById(accountId)
    .then(function(account) {
      res.json(account).status(200)
    })
}

exports.createNewAccount = function(req, res) {
  User
  	.query()
  	.insert(req.body)
  	.then(function(newAcc) {
  	  res.json(newAcc).status(200)
  	})
}

exports.editAccount = function(req, res) {
  const accountId = parseInt(req.params.id);
  const newData = req.body
  User
    .query()
    .patchAndFetchById(accountId, newData)
    .then(function(updatedAcc) {
      res.json(updatedAcc).status(200)
    })
}

exports.deleteAccount = function(req, res) {
  const accountId = parseInt(req.params.id)
  Sale
    .query()
    .delete()
    .where('customerId', '=', accountId) 
    .then(function(salesCDeleted) {
      res.json({
        deleted: salesCDeleted
      })
    })
  Sale
    .query()
    .delete()
    .where('teamMemberId', '=', accountId) 
    .then(function(salesTDeleted) {
      res.json({
        deleted: salesTDeleted
      })
    })
  User
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
  	.then(function(newServ) {
  	  res.json(newServ).status(200)
  	})
}

exports.editService = function(req, res) {
  const serviceId = parseInt(req.params.id)
  const newData = req.body
  SaleDetails
  	.query()
  	.updateAndFetchById(serviceId, newData)
    .then(function(updatedServ) {
      res.json(updatedServ).status(200)
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
  	.then(function(newApp) {
  	  res.json(newApp).status(200)
  	})
}

exports.editAppointment = function(req, res) {
  const appointmentId = parseInt(req.params.id)
  const newData = req.body
  Appointment
  	.query()
  	.updateAndFetchById(appointmentId, newData)
    .then(function(updatedApp) {
      res.json(updatedApp).status(200)
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

exports.getSales = function(req, res) {
  Sale
    .query()
    .then(function(data) {
      res.json(data)
    })
}

exports.getSingleSale = function(req, res) {
  const salesId = parseInt(req.params.id)
  Sale
    .query()
    .findById(salesId)
    .then(function(sale) {
      res.json(sale).status(200)
    })
}

exports.createNewSale = function(req, res) {
  Sale
    .query()
    .insert(req.body)
    .then(function(newSale) {
      res.json(newSale).status(200)
    })
}

exports.editSale = function(req, res) {
  const salesId = parseInt(req.params.id)
  const newData = req.body
  Sale
    .query()
    .updateAndFetchById(salesId, newData)
    .then(function(updatedSale) {
      res.json(updatedSale).status(200)
    })
}

exports.deleteSale = function(req, res) {
  const salesId = parseInt(req.params.id)
  Sale
    .query()
    .deleteById(salesId)
    .then(function(rowsDeleted) {
      res.json({ appointmentDeleted: rowsDeleted })
    }).status(200)
}