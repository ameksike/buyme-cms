module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/shippings/:id/balance',
            handler: 'api::shipping.shipping.getBalanceByDoc',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        }
    ],
};