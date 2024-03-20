import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "vandai",
      email: "vandai12@gmail.com",
      password: bcrypt.hashSync("123123"),
      role: "admin",
      department: "Finance",
      avatar:
        "http://res.cloudinary.com/dj1fsj5ec/image/upload/v1679611526/r4i3tsryjcwht4qvtbvn.jpg",
    },]
  
};
export default data;
