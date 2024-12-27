module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/transactions/balance/:id',
            handler: 'api::transaction.transaction.getBalance',
            config: {
                auth: false,
                policies: [],
                middlewares: [],
            },
        },
    ],
};