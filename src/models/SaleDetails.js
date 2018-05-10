
const { Model } = require('objection')

class SaleDetails extends Model {
  static get tableName() {
  return 'salesDetails'
  }
}

module.exports = SaleDetails
