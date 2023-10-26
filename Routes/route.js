import express from 'express';

const route =express.Router();

import { addUser,getUsers } from '../Controller/user-controller.js';
import { newConversation, getConversation } from '../Controller/conversation-controller.js';
import { newMessage, getMessages } from '../Controller/message-controller.js';

route.post('/add',addUser);
route.get('/users', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);
route.post('/message/add', newMessage)
route.get('/message/get/:id', getMessages);

export default route;