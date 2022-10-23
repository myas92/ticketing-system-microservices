import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import jwt from 'jsonwebtoken';

import { BadRequestError } from "../errors/bad-request-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-validation-error";
import { User } from '../models/user'
const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    console.log('--- singup API ---')
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }

    if (!errors.isEmpty()) {
      throw new Error("Invalid email or password");
    }

    const { email, password } = req.body;
    // Throw a error for databse connection
    // throw new DatabaseConnectionError()
    console.log(email)
    console.log(password)
    const existingUser = await User.findOne({ email });
    console.log(existingUser)
    if (existingUser) {
      // console.log('Email in use');
      // return res.send({})

      throw new BadRequestError('Email in use')
    }

    const user = User.build({
      email,
      password,

    })

    // Generate JWT
    const userJwt = jwt.sign({
      id: user.id,
      email: user.email
    }, 'asdf');


    req.session = {
      jwt: userJwt
    }
    console.log(user)
    await user.save();
    res.status(201).send(user)
  }
);

export { router as signupRouter };