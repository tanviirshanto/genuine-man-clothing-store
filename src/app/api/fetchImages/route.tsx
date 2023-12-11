import cloudinary from 'cloudinary';

// Configure Cloudinary (replace with your credentials)
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret'
});

export default async function handler(req, res) {
  try {
    const folderName = 'cotton/tshirt'; // Replace with your folder name
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: folderName,
      max_results: 100
    });

    const imageUrls = result.resources.map(resource => resource.secure_url);
    res.status(200).json({ imageUrls });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
}