import * as userDto from '#domains/user/user.dto.js';
import { userService } from '#domains/user/user.service.js';
import { handlerBody } from '#utils/handlerBody.js';
import handlerRequest from '#utils/handlerRequest.js';
import { userEntity } from '#domains/user/user.entity.js';

export const getUsers = handlerBody(async (req, res) => {
    return await userService.getUsers();
});

export const getUser = handlerRequest(userDto.getUserDTO, userEntity, async (req, res) => {
    return await userService.getUserById(req.params.id);
});

export const createUser = handlerRequest(userDto.createUserDTO, userEntity, async (req, res) => {
    const newUser = await userService.createUser(req.body);
    return newUser;
});

export const updateUser = handlerRequest(userDto.updateUserDTO, userEntity, async (req, res) => {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    return updatedUser;
});

export const deleteUser = handlerRequest(userDto.deleteUserDTO, userEntity, async (req, res) => {
    const deletedUser = await userService.deleteUser(req.params.id);
    return deletedUser;
});