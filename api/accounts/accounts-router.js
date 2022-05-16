const router = require('express').Router()
const middle = require('./accounts-middleware')
const model = require('./accounts-model')


router.get('/', async (req, res, next) => {
try {
  const data = await model.getAll()
  res.json(data)

}
catch(err){
  next(err)
}
})

router.get('/:id', middle.checkAccountId, async (req, res, next) => {
  try {
    const data = await model.getById(req.params.id)
    res.json(data)
      } catch(err){
        console.log(err)
      }

  // DO YOUR MAGIC
  // const id = req.params.id
  // const data = model.getById(id)
  // res.json(data)
})

router.post('/', middle.checkAccountPayload, async (req, res, next) => {})


router.put('/:id', middle.checkAccountPayload, middle.checkAccountId, (req, res, next) => {

});

router.delete('/:id', middle.checkAccountId, async (req, res, next) => {
try{
  const data = await model.deleteById(req.params.id)

  res.json(data)
}
catch{(err)=>{console.log(err)}}
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
