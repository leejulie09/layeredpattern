const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUser(email, password) {
    return prisma.$queryRaw`
        INSERT INTO users(email, password) VALUES (${email}, ${password});`;
   }

function readUser(email) {
        //중복된 email일 떄
    const checkDuplicate = await prisma.$queryRaw`
    SELECT users.email FROM users WHERE email=${email}`;
    
return checkDuplicate;
}

async function updateUser(id) {
    const { id } = req.params;

    return prisma.$queryRaw`
    UPDATE postings SET contents='실력이 늘고있어요' WHERE id=2;`;

}

function deleteUser() {
    const { id } = req.params;

    const deletePosting = await prisma.$queryRaw`
    DELETE FROM postings WHERE id=${id};`;

}


module.exports = {createUser, readUser, updateUser, deleteUser}