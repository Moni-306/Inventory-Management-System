package com.monica.inventory.services;

import com.monica.inventory.dtos.LoginRequest;
import com.monica.inventory.dtos.RegisterRequest;
import com.monica.inventory.dtos.Response;
import com.monica.inventory.dtos.UserDTO;
import com.monica.inventory.models.User;

public interface UserService {
    Response registerUser(RegisterRequest registerRequest);

    Response loginUser(LoginRequest loginRequest);

    Response getAllUsers();

    User getCurrentLoggedInUser();

    Response getUserById(Long id);

    Response updateUser(Long id, UserDTO userDTO);

    Response deleteUser(Long id);

    Response getUserTransactions(Long id);
}
