const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Cloudinary storage for avatars/profiles
const storageProfiles = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'instagram/profiles',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        resource_type: 'auto'
    }
});

// Cloudinary storage for posts
const storagePosts = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'instagram/posts',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        resource_type: 'auto'
    }
});

const cloudinaryUploadAvatar = multer({
    storage: storageProfiles,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        // Check file type
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images are allowed.'), false);
        }
    }
});

const cloudinaryUploadPost = multer({
    storage: storagePosts,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10MB limit
    },
    fileFilter: (req, file, cb) => {
        // Check file type
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only images are allowed.'), false);
        }
    }
});

// Wrap multer middleware to ensure req.file.location is set
exports.uploadAvatar = {
    single: (fieldname) => {
        const upload = cloudinaryUploadAvatar.single(fieldname);
        return (req, res, next) => {
            upload(req, res, (err) => {
                if (err) {
                    console.error('Upload error:', err);
                    return next(err);
                }
                if (req.file) {
                    // Set location to Cloudinary URL
                    req.file.location = req.file.path;
                }
                next();
            });
        };
    }
};

exports.uploadPost = {
    single: (fieldname) => {
        const upload = cloudinaryUploadPost.single(fieldname);
        return (req, res, next) => {
            upload(req, res, (err) => {
                if (err) {
                    console.error('Upload error:', err);
                    return next(err);
                }
                if (req.file) {
                    // Set location to Cloudinary URL
                    req.file.location = req.file.path;
                }
                next();
            });
        };
    }
};

// Delete file from Cloudinary
exports.deleteFile = async (fileuri) => {
    if (!fileuri) return;
    try {
        // Extract public_id from Cloudinary URL
        // Example URL: https://res.cloudinary.com/xxx/image/upload/v123/instagram/posts/filename.jpg
        const urlParts = fileuri.split('/');
        const uploadIndex = urlParts.indexOf('upload');
        if (uploadIndex !== -1 && uploadIndex + 2 < urlParts.length) {
            // Get everything after 'upload/v123/'
            const publicIdWithExt = urlParts.slice(uploadIndex + 2).join('/');
            // Remove file extension
            const publicId = publicIdWithExt.replace(/\.[^/.]+$/, '');
            
            await cloudinary.uploader.destroy(publicId);
            console.log(`Deleted file from Cloudinary: ${publicId}`);
        }
    } catch (error) {
        console.error("Failed to delete Cloudinary file:", error);
    }
};

module.exports.cloudinary = cloudinary;
