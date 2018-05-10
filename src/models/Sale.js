const { Model } = require('objection')

class Sale extends Model {
  static get tableName() {
    return 'sales'
  }
  static get relationshipMappings() {
  const SaleDetails = require('./SaleDetails')
  const Appointment = require('./Appointment')
  return {
    salesDetails: {
    relation: Model.HasManyRelation,
    modelClass: SaleDetails,
    join: {
      from: 'sales.id',
      to: 'salesDetails.salesId'
    }
    },
    appointments: {
      relation: Model.HasOneRelation,
      modelClass: Appointment,
      join: {
        from: 'sales.id',
        to: 'appointments.salesId'
      }
    }
  }
  }
}

module.exports = Sale
