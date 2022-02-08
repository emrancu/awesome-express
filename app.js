import express from 'express'
const app = express()
import  Bootstrap  from './bootstrap/bootstrap.js' ;

// bootstrap
const boot = new Bootstrap(app)
boot.init(3000)

