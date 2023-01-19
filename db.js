module.exports = {
    getVacations: async (options = {}) => {
        //simularemos alguns dados de férias
        const vacations = [
            {
                name: 'Hood River Day Trip',
                slug: 'hood-river-day-trip',
                category: 'Day Trip',
                sku: 'HR199',
                description: 'Spend a day sailling on the Columbia and ' + 'enjoying craft beers in Hood River!',
                location: {
                    //usaremos essa parte para a geocodificação
                    // posteriormente
                    search: 'Hood Rifver, Oregon, USA',
                },
                price: 99.95,
                tags: ['day trip', 'hood river', 'sailling', 'windsurfind', 'breweries'],
                inSeason: true,
                maximumGuests: 16,
                available: true,
                packagesSold: 0,
            }
        ]
        // se a opção "available" for especificada, somente as
        // férias correspondentes serão retornadas
        if(options.available !== undefined)
        return vacations.filter(({available}) => available === options.available)
        return vacations 
    }
}