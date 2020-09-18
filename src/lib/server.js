const app = require('./app')

const { PORT } = require('./config.js')

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})