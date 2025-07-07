import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: "686bf9a8003db8d7d0e2",
  url: "https://fra.cloud.appwrite.io/v1",
  databaseId: "686bf9e100065c48adcc",
  storageId: "686bfa25003665620d2c",
  userCollectionId: "686bfd290011531db944",
  postCollectionId: "686bfd43002fb7eb3e97",
  savesCollectionId: "686bfd590025e5982d77",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
