const { Model } = require('objection')

class NetUser extends Model {
  static get tableName() {
    return 'netUsers'
  }
  static get relationshipMappings() {
	const Sale = require('./Sale')
	return {
	  sales: {
		relation: Model.HasManyRelation,
		modelClass: sales,
		join: {
		  from: 'netUsers.id',
		  to: 'sales.customerId'
		}
	  },
	  sales: {
	  	relation: Model.HasManyRelation,
	  	modelClass: sales,
	  	join: {
	  	  from: 'netUsers.id',
	  	  to: 'sales.teamMemberId'
	  	}
	  }
	}
  }
}

module.exports = NetUser