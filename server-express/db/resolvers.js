import User from "../models/user.model.js";
import Admin from "../models/admin.model.js";
import Artist from "../models/artist.model.js";
import Release from "../models/release.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const createToken = (user, secret, expiresIn) => {
  // console.log(user);
  const { id, username, email } = user;

  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

// Resolvers
const resolvers = {
  Query: {
    // Users
    getUser: async (_, { token }) => {
      const userId = await jwt.verify(token, process.env.SECRET);
      return userId;
    },

    // Admin
    getAdmin: async (_, { token }) => {
      const adminId = await jwt.verify(token, process.env.SECRET);
      return adminId;
    },

    // Artists
    getArtists: async () => {
      try {
        const artists = await Artist.find();
        return artists;
      } catch (error) {
        console.log(error);
      }
    },
    getArtist: async (_, { id }) => {
      const artist = await Artist.findById(id); // Buscar el artista por su ID

      if (!artist) {
        throw new Error("Artista no encontrado");
      }

      return artist;
    },

    // Releases
    getReleases: async () => {
      try {
        const releases = await Release.find();
        return releases;
      } catch (error) {
        console.log(error);
      }
    },
    getRelease: async (_, { id }) => {
      // Revisar si el Release existe
      const release = await Release.findById(id);

      if (!release) {
        throw new Error("Lanzamiento no encontrado");
      }

      return release;
    },
    bestArtists: async () => {
      const artists = await Release.aggregate([
        { $match: { state: "COMPLETED" } },
        {
          $group: {
            _id: "$artist",
            total: { $sum: "$total" },
          },
        },
        {
          $lookup: {
            from: 'artists',
            localField: '_id',
            foreignField: '_id',
            as: 'artist',
          }
        }
      ]);
      return artists;
    },
  },

  Mutation: {
    // Users
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
      const correctPassword = await bcryptjs.compare(
        password,
        userFound.password
      );

      if (!correctPassword) {
        throw new Error("Wrong password");
      }

      // Crear token
      return {
        token: createToken(userFound, process.env.SECRET, "24h"),
      };
    },

    // Admin
    newAdmin: async (_, { input }) => {
      const { email, password } = input;

      // Revisar si existe el usuario
      const adminFound = await Admin.findOne({ email });

      if (adminFound) {
        throw new Error("Admin already exists");
      }

      //Hashear password
      const salt = await bcryptjs.genSalt(10);
      input.password = await bcryptjs.hash(password, salt);

      try {
        const admin = new Admin(input);
        admin.save();
        return admin;
      } catch (error) {
        console.log(error);
      }
    },
    authAdmin: async (_, { input }) => {
      const { username, password } = input;

      // Revisar si existe el admin
      const adminFound = await Admin.findOne({ username });

      if (!adminFound) {
        throw new Error("Admin not found");
      }

      // Revisar si el password es correcto
      const correctPassword = await bcryptjs.compare(
        password,
        adminFound.password
      );

      if (!correctPassword) {
        throw new Error("Wrong password");
      }

      // Crear token
      return {
        token: createToken(adminFound, process.env.SECRET, "24h"),
      };
    },

    // Artists
    newArtist: async (_, { input }, ctx) => {
      console.log(ctx);
      const { email } = input;

      // Revisar si existe el usuario

      const artist = await Artist.findOne({ email });
      if (artist) {
        throw new Error("Artist already exists");
      }
      const newArtist = new Artist(input);

      // Asignar User
      newArtist.user = "664094a0db533081f996a173";
      //Guardar en DB
      try {
        const result = await newArtist.save();

        return result;
      } catch (error) {
        console.log(error);
      }
    },
    updateArtist: async (_, { id, input }) => {
      //  Revisar si el artista existe
      let artist = await Artist.findById(id);

      if (!artist) {
        throw new Error("Artist not found");
      }

      //Guardar en DB
      artist = await Artist.findOneAndUpdate({ _id: id }, input, { new: true });

      return artist;
    },
    deleteArtist: async (_, { id }) => {
      // Buscar el artista por su ID
      let artist = await Artist.findById(id);
      if (!artist) {
        throw new Error("Artist not found");
      }

      // Eliminar el artista de la base de datos
      await Artist.findOneAndDelete({ _id: id });

      return "Artist deleted";
    },

    // Releases
    newRelease: async (_, { input }) => {
      try {
        const release = new Release(input);

        // DB
        const result = await release.save();
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    updateRelease: async (_, { id, input }) => {
      // Revisar si el Release existe
      let release = await Release.findById(id);

      if (!release) {
        throw new Error("Release not found");
      }

      //Guardar en DB
      release = await Release.findOneAndUpdate({ _id: id }, input, {
        new: true,
      });

      return release;
    },
    deleteRelease: async (_, { id }) => {
      // Revisar si el Release existe
      let release = await Release.findById(id);
      if (!release) {
        throw new Error("Release not found");
      }

      // Eliminar el Release de la base de datos
      await Release.findOneAndDelete({ _id: id });

      return "Release deleted";
    },
  },
};

export default resolvers;
