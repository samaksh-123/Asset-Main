// const express = require('express');
// const router = express.Router();
// const Asset = require('../models/Asset');
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// // Ensure upload folder exists
// // const uploadPath = path.join(__dirname, "../uploads/invoice");
// // if (!fs.existsSync(uploadPath)) {
// //   fs.mkdirSync(uploadPath, { recursive: true });
// // }

// // // Multer storage setup
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, uploadPath);
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
// //     cb(null, uniqueName);
// //   }
// // });

// // const upload = multer({
// //   storage,
// //   fileFilter: (req, file, cb) => {
// //     if (file.mimetype === "application/pdf") {
// //       cb(null, true);
// //     } else {
// //       cb(new Error("Only PDF files are allowed!"), false);
// //     }
// //   }
// // });

// // // ✅ POST Asset with Invoice PDF
// // router.post("/", upload.single("invoiceFile"), async (req, res) => {
// //   try {
// //     // Generate assetCode (simple auto-increment)
// //     const assetCount = await Asset.countDocuments();
// //     const assetCode = "AST" + String(assetCount + 1).padStart(4, "0");

// //     const newAsset = new Asset({
// //       assetCode,
// //       ...req.body,
// //       invoiceFile: req.file ? req.file.filename : null, // Save PDF filename
// //       issued: false
// //     });

// //     const savedAsset = await newAsset.save();
// //     res.status(201).json({ message: "Asset added successfully", asset: savedAsset });
// //   } catch (err) {
// //     console.error("Error saving asset:", err);
// //     res.status(500).json({ error: "Failed to save asset" });
// //   }
// // });

// // storage engine
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// // ✅ Add Asset
// router.post("/", upload.single("invoiceFile"), async (req, res) => {
//   try {
//     const newAsset = new Asset({
//       ...req.body,
//       invoiceFile: req.file ? req.file.filename : null   // 👈 save file name
//     });

//     await newAsset.save();
//     res.status(201).json(newAsset);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to save asset" });
//   }
// });

// // ✅ Get Available Assets
// router.get('/available', async (req, res) => {
//   try {
//     const availableAssets = await Asset.find({ issued: false });
//     res.json(availableAssets);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ✅ Update Asset
// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (error) {
//     console.error('Error updating asset:', error);
//     res.status(500).json({ error: 'Failed to update asset' });
//   }
// });

// // ✅ Delete Asset
// router.delete('/:id', async (req, res) => {
//   try {
//     await Asset.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Asset deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting asset:', error);
//     res.status(500).json({ error: 'Failed to delete asset' });
//   }
// });

// // ✅ Get All Assets
// router.get('/', async (req, res) => {
//   try {
//     const assets = await Asset.find();
//     res.status(200).json(assets);
//   } catch (err) {
//     console.error('Error fetching assets:', err);
//     res.status(500).json({ error: 'Failed to fetch assets' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Asset = require('../models/Asset');
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure upload folder exists
const uploadPath = path.join(__dirname, "../uploads/invoice");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed!"), false);
    }
  }
});

// ✅ POST Asset with Invoice PDF
router.post("/", upload.single("invoiceFile"), async (req, res) => {
  try {
    // Generate assetCode (simple auto-increment)
    const assetCount = await Asset.countDocuments();
    const assetCode = "AST" + String(assetCount + 1).padStart(4, "0");

    const newAsset = new Asset({
      assetCode,
      ...req.body,
      invoiceFile: req.file ? req.file.filename : null, // Save PDF filename
      issued: false
    });

    const savedAsset = await newAsset.save();
    res.status(201).json({ message: "Asset added successfully", asset: savedAsset });
  } catch (err) {
    console.error("Error saving asset:", err);
    res.status(500).json({ error: "Failed to save asset" });
  }
});

// ✅ Get Available Assets
router.get('/available', async (req, res) => {
  try {
    const availableAssets = await Asset.find({ issued: false });
    res.json(availableAssets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Update Asset
router.put('/:id', async (req, res) => {
  try {
    const updated = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    console.error('Error updating asset:', error);
    res.status(500).json({ error: 'Failed to update asset' });
  }
});

// ✅ Delete Asset
router.delete('/:id', async (req, res) => {
  try {
    await Asset.findByIdAndDelete(req.params.id);
    res.json({ message: 'Asset deleted successfully' });
  } catch (error) {
    console.error('Error deleting asset:', error);
    res.status(500).json({ error: 'Failed to delete asset' });
  }
});

// ✅ Get All Assets
router.get('/', async (req, res) => {
  try {
    const assets = await Asset.find();
    res.status(200).json(assets);
  } catch (err) {
    console.error('Error fetching assets:', err);
    res.status(500).json({ error: 'Failed to fetch assets' });
  }
});

module.exports = router;



