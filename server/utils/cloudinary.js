import { v2 as _cloudinary } from "cloudinary";

const cloudinary = () => {
  const config = useRuntimeConfig();

  _cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
  });

  return _cloudinary;
  // allows me to call this with cloudinary() without repeating the code
};

export const uploadToCloudinary = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary().uploader.upload(image, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
