// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";
// import dotenv from "dotenv";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// const uploadToCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;
//     //upload the file on cloudinary
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });
//     // file has been uploaded successfull
//     // console.log("file is uploaded on cloudinary ", response.url);

//     fs.unlinkSync(localFilePath);
//     return response;
//   } catch (error) {
//     fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
//     return null;
//   }
// };

// export { uploadToCloudinary };

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload the file on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File has been uploaded successfully
    console.log("File is uploaded on Cloudinary:", response.url);

    // Delete the local file
    fs.unlinkSync(localFilePath);
    console.log("Local file deleted successfully.");

    return response;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);

    // Delete the local file in case of an error
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
      console.log("Local file deleted due to upload error.");
    }

    return null;
  }
};

export { uploadToCloudinary };
