import Conversation from "../model/conversation.js";


export const newConversation = async (request, response) => {
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await Conversation.findOne({members: {$all:[receiverId, senderId]}});

        if(exist){
            return response.status(200).json("Conversation already exist");
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId]
        })

        await newConversation.save();
        return response.status(200).json("conversation saved successfully")
    }
    catch(error){
        return response(500).json(error.message)
    }
}