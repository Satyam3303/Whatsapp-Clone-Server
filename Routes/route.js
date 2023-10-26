import express from 'express';

const route =express.Router();

import { addUser,getUsers } from '../Controller/user-controller.js';
import { newConversation } from '../Controller/conversation-controller.js';

route.post('/add',addUser);
route.get('/users', getUsers);
route.post('/conversation/add', newConversation);

export default route;