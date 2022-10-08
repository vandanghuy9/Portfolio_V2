const db = require('../dbQuery');
const express = require('express');
const getHomePage = (req,res)=>{
    res.sendFile(__dirname + '../views/')
}
const messageHandle = function(req,res){
    const infor = req.body;
    if (!infor.name || !infor.email){
        return res.status(401).json({success:false,message:"Please provide information"});
    }
    db.insertQuery(infor);
    return res.status(201).json({success:true,name:infor.name});
};

module.exports.messageHandle = messageHandle;
