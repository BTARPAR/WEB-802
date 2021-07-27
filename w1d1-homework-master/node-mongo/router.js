const inventories = require('./controller')

const router = (app) => {
    app.post('/api/inventory', inventories.createInventory)
    app.get('/api/inventory/:id', inventories.getInventory)
    app.get('/api/inventories', inventories.inventories)
    app.put('/api/inventory', inventories.updateInventory)
    app.delete('/api/inventory/:id', inventories.deleteInventory)
}

module.exports = router