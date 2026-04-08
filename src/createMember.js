import fs from "fs";

function createMember(id, name, type) {
    const member = { id, name, type };
    fs.writeFileSync("member.json", JSON.stringify(member, null, 2));
    return member;
}

export default createMember;
