import { gql } from "apollo-server";

//Schema
const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    image: String
    create: String
  }

  type Admin {
    id: ID
    username: String
    email: String
  }

  type Token {
    token: String
  }

  type Artist {
    id: ID
    artistName: String
    user: ID
    email: String
    bio: String
    image: String
    bandcampLink: String
    facebookLink: String
    instagramLink: String
    soundcloudLink: String
    twitterLink: String
    youtubeLink: String
    spotifyLink: String
    create: String
  }

  type Release {
    id: ID
    title: String
    releaseYear: Int
    bandacampLink: String
    beatportLink: String
    spotifyLink: String
    appleMusicLink: String
    youtubeLink: String
    soundcloudLink: String
    create: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input AuthInput {
    username: String!
    password: String!
  }

  input AdminInput {
    username: String!
    email: String!
    password: String!
  }

  input ArtistInput {
    artistName: String!
    user: String
    email: String!
    bio: String
    image: String
    bandcampLink: String
    facebookLink: String
    instagramLink: String
    soundcloudLink: String
    twitterLink: String
    youtubeLink: String
    spotifyLink: String
  }

  input ReleaseInput {
    title: String!
    releaseYear: Int!
    bandacampLink: String
    beatportLink: String
    spotifyLink: String
    appleMusicLink: String
    youtubeLink: String
    soundcloudLink: String
  }

  type Query {
    # Users
    users: [User]
    getUser(token: String!): User

    # Admin
    admins: [Admin]
    getAdmin(token: String!): Admin

    # Artists
    artists: [Artist]
    getArtists: [Artist]
    getArtist(id: ID!): Artist

    # Releases
    releases: [Release]
    getReleases: [Release]
    getRelease(id: ID!): Release
  }

  type Mutation {
    # Users
    newUser(input: UserInput): User
    authUser(input: AuthInput): Token

    # Admin
    newAdmin(input: AdminInput): Admin
    authAdmin(input: AuthInput): Token

    # Artists
    newArtist(input: ArtistInput): Artist
    updateArtist(id: ID!, input: ArtistInput): Artist
    deleteArtist(id: ID!): String

    # Releases
    newRelease(input: ReleaseInput): Release
    updateRelease(id: ID!, input: ReleaseInput): Release
    deleteRelease(id: ID!): String
  }
`;

export default typeDefs;
