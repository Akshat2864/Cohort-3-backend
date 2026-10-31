import ImageKit , {toFile}from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

const storageInstance = new ImageKit({

  privateKey: process.env.IK_PRIVATE_KEY,
});

export const sendFiles = async (file, fileName) => {

     const uploadableFile = await toFile(file, fileName);
  const obj = {
    file:uploadableFile,
    fileName,
    folder: "cohort-3",
  };

  return await storageInstance.files.upload(obj);
};
