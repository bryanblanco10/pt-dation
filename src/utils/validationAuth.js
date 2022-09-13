const validationUserExist = (email) => {
  if (!localStorage.getItem("users")) return null;

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((el) => el.email == email);

  if (user) return user;
  
  return null;
};

const validationPassowrd = (password) => {
  if (!localStorage.getItem("users")) return null;

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((el) => el.password == password);

  if (user) return user;
  
  return null;
};

export { validationUserExist, validationPassowrd };