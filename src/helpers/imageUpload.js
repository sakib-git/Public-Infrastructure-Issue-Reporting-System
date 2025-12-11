import axios from 'axios';

export default async function imageUpload(file) {
  const formData = new FormData();
  formData.append('image', file[0]);
  const img_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST_IMGBB}`;

  const imgResponse = await axios.post(img_api_url, formData);
  return imgResponse.data.data.url;
}
