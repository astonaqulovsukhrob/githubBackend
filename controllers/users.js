// import { v4 as uuid } from 'uuid';

// let users = [];

// export const getUsers = (req, res) => {
//     console.log(`Users in the database: ${users}`);

//     res.send(users);
// }

// export const createUser = (req, res) => {
//     const user = req.body;

//     users.push({...user, id: uuid()});

//     console.log(`User [${user.username}] added to the database.`);
// };

// export const getUser = (req, res) => {
//     res.send(req.params.id)
// };

// export const deleteUser = (req, res) => {
//     console.log(`user with id ${req.params.id} has been deleted`);

//     users = users.filter((user) => user.id !== req.params.id);
// };

// export const updateUser =  (req,res) => {
//     const user = users.find((user) => user.id === req.params.id);

//     user.username = req.body.username;
//     user.age = req.body.age;

//     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
// };

import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  console.log(`Users in the database:`, users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  const newUser = { ...user, id: uuid() };
  users.push(newUser);

  console.log(`User [${user.username}] added to the database.`);
  res.send(newUser);
};

export const getUser = (req, res) => {
  const foundUser = users.find((user) => user.id === req.params.id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  console.log(`User with id ${req.params.id} has been deleted`);

  users = users.filter((user) => user.id !== req.params.id);

  res.send({ message: "User deleted" });
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  if (!user) return res.status(404).send("User not found");

  user.username = req.body.username ?? user.username;
  user.age = req.body.age ?? user.age;

  console.log(`User updated:`, user);

  res.send(user);
};
