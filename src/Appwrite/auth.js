/* eslint-disable no-useless-catch */
import config from "../config/config";
import { Client, Account ,ID } from "appwrite";

  class AuthServices {
 client= new Client();
 account;
 constructor(){
  this.client
  .setEndpoint(config.appwriteurl)
  .setProject(config.appwriteProjectId);
  this.account =new Account(this.client);
 }

 async createAccount ({email,password,name}){
        
       try {
      const userAccount = this.account.create(ID.unique,email,password,name)
          if(userAccount){
 // call another method
          return this.userLogin(email,password);
       }else{
 return userAccount;
}
       } catch (error) {
        throw error;            
       }
}

async Login({email,password}){
 try {
  const userLogin = await this.account.createEmailPasswordSession(email,password);
  return userLogin;
 } catch (error) {
  throw error;
 }
  
}

async getCurrentUser(){
 try {
     return await this.account.get('current');
 } catch (error) {
  console.log("Appwrite Service :: getCurrentUser ! :: eroor",error);
  
 }
}
async logout (){
 try {
   return await this.account.deleteSessions();
 } catch (error) {
  console.log("Appwrite Service :: Logout ! :: eroor",error);
  
 }
}
}
   const   authServices = new AuthServices();

export default authServices