const dataDummy = require("./data dummy/users.json");

const userLogin = (req,res) => {
  const username = req.body.username.toLowerCase();
  const password = req.body.password;

  const selectedUser = dataDummy.find(
    (dummy) => dummy.username == username && dummy.password == password
  );

  if (selectedUser) {
    res.status(200).json({
      status: 200,
      message: "Login berhasil",
      data: selectedUser,
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Login gagal karena username tidak terdaftar",
    });
  }
};

const usersService = {
  userLogin,
};

module.exports = usersService;
