import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"
const ws = new WebSocketServer({
    port : 8080
});
ws.on("connection",async (socket)=>{  
    await client.users.create({
        data:{
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    socket.send("Hi there you are connect to the server")
})