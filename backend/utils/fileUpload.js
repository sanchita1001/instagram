const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist
const uploadDirProfiles = path.join(__dirname, '../../public/uploads/profiles');
const uploadDirPosts = path.join(__dirname, '../../public/uploads/posts');

if (!fs.existsSync(uploadDirProfiles)) {
    fs.mkdirSync(uploadDirProfiles, { recursive: true });
}
if (!fs.existsSync(uploadDirPosts)) {
    fs.mkdirSync(uploadDirPosts, { recursive: true });
}

const storageProfiles = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirProfiles);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname));
    }
});

const storagePosts = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirPosts);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname));
    }
});

const localUploadAvatar = multer({
    storage: storageProfiles,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

const localUploadPost = multer({
    storage: storagePosts,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

// Wrap multer middleware to inject the location property on req.file (for compatibility with controllers using req.file.location)
exports.uploadAvatar = {
    single: (fieldname) => {
        const upload = localUploadAvatar.single(fieldname);
        return (req, res, next) => {
            upload(req, res, (err) => {
                if (err) return next(err);
                if (req.file) {
                    req.file.location = `/public/uploads/profiles/${req.file.filename}`;
                }
                next();
            });
        };
    }
};

exports.uploadPost = {
    single: (fieldname) => {
        const upload = localUploadPost.single(fieldname);
        return (req, res, next) => {
            upload(req, res, (err) => {
                if (err) return next(err);
                if (req.file) {
                    req.file.location = `/public/uploads/posts/${req.file.filename}`;
                }
                next();
            });
        };
    }
};

exports.deleteFile = async (fileuri) => {
    if (!fileuri) return;
    try {
        // e.g., /public/uploads/profiles/filename.jpg -> public/uploads/profiles/filename.jpg
        const relativePath = fileuri.replace(/^\//, '');
        const absolutePath = path.join(__dirname, '../../', relativePath);
        if (fs.existsSync(absolutePath)) {
            fs.unlinkSync(absolutePath);
        }
    } catch (error) {
        console.error("Failed to delete local file:", error);
    }
};
