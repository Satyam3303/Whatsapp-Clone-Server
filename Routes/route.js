import express from 'express';

const route =express.Router();

import { addUser,getUsers } from '../Controller/user-controller.js';

route.post('/add',addUser);
route.get('/users', getUsers);

export default route;