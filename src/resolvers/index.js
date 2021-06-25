const db = require('../db/models')
const { hasRights } = require('../helpers/auth')

module.exports = {
    Query: {
        async getCrops(parent, args, context) {
            const { token } = context
            if (!hasRights(token, 'master')) throw new Error('Unauthorized')
            return await db.Crop.findAll()
        }
    },

    Crop: {
        async __resolveReference(crop) {
            return await db.Crop.findByPk(crop.id)
        }
    }
}