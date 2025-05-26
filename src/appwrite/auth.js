import conf from "../conf/envconf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.loginAccount({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async loginAccount({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error(error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error(error);
    }
  }
}
const authService = new AuthService();

export default authService;
