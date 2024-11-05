import { connect, disconnect } from "mongoose";
const urlStr = "mongodb+srv://sushil13129340:zARhuLIHejUK7N3D@cluster0.4mqxm.mongodb.net/mernChatBot?retryWrites=true&w=majority&appName=Cluster0";
async function connectToDatabase() {
    try {
        await connect(urlStr);
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot connect to Mongo");
    }
}
async function disConnectDB() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("cannot disconnect to Mongos");
    }
}
export { connectToDatabase, disConnectDB };
//# sourceMappingURL=connection.js.map