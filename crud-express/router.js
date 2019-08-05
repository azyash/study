const fs = require('fs')
const Student = require('./student')
const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    Student.find(function(err, students) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('index.html', {
            students: students
        })
    })
})

router.get('/students/new', function(req, res) {
    res.render('new.html')
})

router.post('/students/new', function(req, res) {
    Student.save(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})


router.get('/students/edit', function(req, res) {
    Student.findById(parseInt(req.query.id), function(err, student) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            student: student
        })
    })
})

//编辑
router.post('/students/edit', function(req, res) {
    Student.updateById(req.body, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})

//删除
router.get('/students/delete', function(req, res) {
    Student.deleteById(req.query.id, function(err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})
module.exports = router