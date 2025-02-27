 import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

  class   DataBaseServices {
 client= new Client();
 database;        
 bucket;
 constructor( ) {
  this.client
  .setEndpoint(config.appwriteurl)
  .setProject(config.appwriteProjectId);
  this.database = new Databases(this.client);
  this.bucket = new Storage(this.client);
 }

 async createPost({tittle,slug, content, featuredImage, status,userId }) {
          try {
           return await this.database.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
           slug,
            {
             tittle,
              content,
              featuredImage,
              status,
              userId,

            }
           )
          } catch (error) {
            console.log( "Appwrite Service :: createPost ! :: eroor",error );
           
          }
 }
 async getPost(slug){
  try {
   return await  this.database.getDocument(
    config.appwriteDatabaseId,
     config.appwriteCollectionId,
     slug,
   )
  } catch (error) {
   console.log( "Appwrite Service :: getPost ! :: eroor",error );
   
  }
  
 }

 async getPosts( quries= [Query.equal("status", "active")]){
  try {
   return await this.database.listDocuments(
    config.appwriteDatabaseId,
    config.appwriteCollectionId,
    quries,
   )
  } catch (error) {
   console.log( "Appwrite Service :: getPosts ! :: eroor",error );
   return false;
  }

 }
 async updatePost(slug, {tittle,content, featuredImage, status  }) {
try {
  return await this.database.updateDocument(
   config.appwriteDatabaseId,
   config.appwriteCollectionId,
   slug,
   {
    tittle,
    content,
    featuredImage,
    status,
 
   },
  )
} catch (error) {
 console.log( "Appwrite Service :: updatePost ! :: eroor",error );
 
}
}

async deletePost(slug){
 try {
   return await this.database.deleteDocument(
    config.appwriteDatabaseId,
    config.appwriteCollectionId,
    slug,
   )
  
 } catch ( error) {
  console.log( "Appwrite Service :: deletePost ! :: eroor",error );
  return false;
 }
}

// file upload service 

async uploadFile(file){
 try {
  return await this.bucket.createFile(
   config.appwriteBucketID,
   ID.unique(),
   file,
  );
 } catch (error) {
  console.log( "Appwrite Service :: uploadFile ! :: eroor",error );
  return false;
 }

}

async deleteFile(fileId){ 
 try {
  return await this.bucket.deleteFile(
   config.appwriteBucketID,
   fileId,
  )
 } catch (error) {
  console.log( "Appwrite Service :: deleteFile ! :: eroor",error );
  return false;
  
 }
 }

 getPostPreview(fileId){
  return this.bucket.getFilePreview(
   config.appwriteBucketID,
   fileId,
  )
 }
}

const databaseServices = new DataBaseServices();

export default databaseServices;