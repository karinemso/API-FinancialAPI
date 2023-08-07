const express = require('express')

const router = express.Router()
const Person = require('./models/Person')

router.post('/', async (req, res) => {
    const {name, salary} = req.body
    let approved
    
    if(salary > 1500){
        approved = true
    } else {
        approved = false
    }

    const person = {
        name,
        salary,
        approved
    }

    try {
        await Person.create(person)

        res.status(201).send('Criado')
    } catch (error) {
        res.status(500)
    }
})


router.get('/', async (req,res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500)
    }
})


router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id

        const person = await Person.findOne({_id : id})
        res.status(200).json(person)
    } catch (error) {
        res.status(500).send('deu certo nao')
    }
})


router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const updateData = {
            name: req.body.name,
            salary: req.body.salary,
            approved: req.body.approved
        }

        const person = await Person.updateOne({_id: id}, {$set: updateData})

        res.status(200).send('Atualizou')
    } catch (error) {
        res.status(500).send('deu certo nao')
    }
})


router.delete('/:id', async (req,res) => {
    try {
        const id = req.params.id

        const person = await Person.deleteOne({_id : id})
        res.status(200).send(`Pessoa com ${id} foi deletada`)
    } catch (error) {
        res.status(500).send('deu certo nao')
    }
})


module.exports = router