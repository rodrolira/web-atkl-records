import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();



const createToken = (user, secret, expiration) => {
    console.log(user);
    const { id, username, password, email } = user;

    return jwt.sign({ id, email, username, password}, secret, { expiresIn: expiration });

}

// Resolvers
const resolvers = {
  Query: {
        getUser: async (_, { token }) => {
            const userId = await jwt.verify(token, process.env.SECRET)
            return userId
        }
    },

  Mutation: {
    newUser: async (_, { input }) => {
      const { email, password } = input;

      // Revisar si existe el usuario
      const userFound = await User.findOne({ email });

      if (userFound) {
        throw new Error("User already exists");
      }

      //Hashear password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        const user = new User(input);
        user.save();
        return user;
      } catch (error) {
        console.log(error);
      }
      },

      authUser: async (_, { input }) => {

          const { email, password } = input;

          // Revisar si existe el usuario
          const userFound = await User.findOne({ email });

          if (!userFound) {
            throw new Error("User not found");
          }

          // Revisar si el password es correcto
          const correctPassword = await bcryptjs.compare(password, userFound.password);

          if (!correctPassword) {
            throw new Error("Wrong password");
          }

          // Crear token
          return {
            token: createToken(userFound, process.env.SECRET, "24h")


      }
      },

  },
};

export default resolvers;
