module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/transactions/user/:id/balance',
            handler: 'api::transaction.transaction.getBalanceByUser',
            config: {
                // auth: false,
                policies: [],
                middlewares: [],
            },
        },{
            method: 'GET',
            path: '/transactions/:id/balance',
            handler: 'api::transaction.transaction.getBalanceByDoc',
            config: {
                // auth: false,
                policies: [],
                middlewares: [],
            },
        }
    ],
};