const { Pool } = require('pg')
const _ = require('lodash')
const { credentials } = require('./config')
const { connectionString } = credentials.postgres
const pool = new Pool({connectionString})

module.exports = {
    getVacations: async () => {
        const { rows } = await pool.query('SELECT * from VACATIONS')
        return rows.map(row => {
            const vacation = _.mapKeys(row, (v, k) => _.camelCase(k))
            vacation.price = parseFloat(vacation.price.replace(/^\$/, ''))
            vacation.location = {
                search: vacation.locationSearch,
                coordinates: {
                    lat: vacation.locationLat,
                    lng: vacation.locationLgn,
                },
            }
            return vacation
        })
    }
}

