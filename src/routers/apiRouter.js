const Router = require('express').Router
const apiRouter = Router();

const { isUserAuthenticated } = require('../modules/isUserAuthenticated')

const User = require('../models/User')
const Appointment = require('../models/Appointment')
const Sale = require('../models/Sale')
const SaleDetails = require('../models/SaleDetails')

const {
  getAccountsTeam,
  getAccounts,
  getSingleAccount,
  createNewAccount,
  editAccount,
  deleteAccount,

  getServices,
  getSingleService,
  createNewService,
  editService,
  deleteService,

  getAppointments,
  getSingleAppointment,
  createNewAppointment,
  editAppointment,
  deleteAppointment,

  getSales,
  getSingleSale,
  createNewSale,
  editSale,
  deleteSale
} = require('../modules/apiFunctions')

apiRouter

  .get('/accounts/team', getAccountsTeam)

  .get('/accounts', getAccounts)
  .get('/accounts/:id', getSingleAccount)
  .post('/accounts/', isUserAuthenticated, createNewAccount)
  .put('/accounts/:id', editAccount)
  .delete('/accounts/:id', isUserAuthenticated, deleteAccount)

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

  .get('/sales', getSales)
  .get('/sales/:id', getSingleSale)
  .post('/sales', createNewSale)
  .put('/sales/:id', editSale)
  .delete('/sales/:id', deleteSale)

module.exports = apiRouter