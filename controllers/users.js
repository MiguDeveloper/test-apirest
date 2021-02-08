const { response } = require('express');

const getUsers = (req, res = response) => {
  res.status(200).json({
    isSuccess: true,
    message: 'get users success',
  });
};

const getUserById = (req, res = response) => {
  const { id } = req.params;
  if (id === 'U0001') {
    return res.status(200).json({
      isSuccess: true,
      message: 'get user by id success',
    });
  }

  res.status(404).json({
    isSuccess: false,
    message: 'user not found',
  });
};

const postUser = (req, res = response) => {
  const { username, password } = req.body;
  if (username && password) {
    return res.status(201).json({
      isSuccess: true,
      message: 'user created successfully',
    });
  }

  res.status(400).json({
    isSuccess: false,
    message: 'user not created',
  });
};

module.exports = { getUsers, getUserById, postUser };
