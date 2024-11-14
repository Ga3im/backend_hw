const User = require('../models/user');

const getUsers = (req, res)=>{
    return User.find({}).then((data)=>{
        res.status(200).send(data)
    }).catch(e => res.status(500).send(e.message))
}

const getUser = (req, res)=>{
    const { user_id } = req.params;
    return User.findById(user_id).then(
        (user)=>{ res.status(200).send(user)
    }).catch(e => res.status(500).send(e.message))
}

const createUser = (req, res)=>{
    const { user_id } = req.params;
    return User.create({...req.body}).then(
        (user)=>{ res.status(201).send(user)
    }).catch(e => res.status(500).send(e.message))
}

const updateUser = (req, res)=>{
    const { user_id } = req.params;
    return User.findByIdAndUpdate(user_id, {...req.body}).then(
        (user)=>{ res.status(200).send(user)
    }).catch(e => res.status(500).send(e.message))
}

const deleteUser = (req, res)=>{
    const { user_id } = req.params;
    return User.findByIdAndDelete(user_id).then(
        ()=>{ res.status(200).send('ПОльзователь успешно удален')
    }).catch(e => res.status(500).send(e.message))
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}