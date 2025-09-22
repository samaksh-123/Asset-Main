// // routes/assets.js
// const express = require('express');
// const router = express.Router();
// const Asset = require('../models/Asset');

// // Add Asset Route
// router.post('/add', async (req, res) => {
//   try {
//     const newAsset = new Asset(req.body);
//     await newAsset.save();
//     res.status(201).json(newAsset);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// // Get Available Assets
// router.get('/available', async (req, res) => {
//   try {
//     const availableAssets = await Asset.find({ issued: false });
//     res.json(availableAssets);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // Delete Asset
// router.delete('/:id', async (req, res) => {
//   try {
//     await Asset.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Asset deleted' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Issue Asset Route - Updates asset info directly
// router.post('/issue', async (req, res) => {
//   const { assetId, employeeId, departmentId, issuedDate } = req.body;

//   try {
//     const updatedAsset = await Asset.findByIdAndUpdate(
//       assetId,
//       {
//         issued: true,
//         employee: employeeId,
//         department: departmentId,
//         issuedDate,
//       },
//       { new: true }
//     );

//     if (!updatedAsset) {
//       return res.status(404).json({ message: 'Asset not found' });
//     }

//     res.status(200).json({ message: 'Asset issued successfully', asset: updatedAsset });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const newAsset = new Asset(req.body);
//     await newAsset.save();
//     res.status(201).json(newAsset);
//   } catch (error) {
//     console.error('Error adding asset:', error);
//     res.status(500).json({ error: 'Failed to add asset' });
//   }
// });


// // PUT: Update Asset
// router.put('/:id', async (req, res) => {
//   try {
//     const updated = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to update asset' });
//   }
// });

// // DELETE: Delete Asset
// router.delete('/:id', async (req, res) => {
//   try {
//     await Asset.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Asset deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to delete asset' });
//   }
// });

// router.get('/stats/type', async (req, res) => {
//   try {
//     const stats = await Asset.aggregate([
//       {
//         $group: {
//           _id: '$type',
//           count: { $sum: 1 }
//         }
//       }
//     ]);
//     res.json(stats);
//   } catch (error) {
//     console.error('Error fetching asset stats:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// // GET all available assets
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



// const express = require('express');
// const router = express.Router();
// const Asset = require('../models/Asset');


// // router.get('/generate-code/:type', async (req, res) => {
// //   try {
// //     const rawType = req.params.type;              // e.g. "Mouse" (from frontend)
// //     const normalizedType = rawType.toLowerCase(); // for DB comparison

// //     // Find all assets of this type (case-insensitive)
// //     const count = await Asset.countDocuments({ type: new RegExp(`^${normalizedType}$`, "i") });

// //     // Generate code using the original (camel case) type
// //     const code = `${rawType}-${String(count + 1).padStart(3, '0')}`;

// //     res.json({ code });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });


// // assetRoutes.js
// const typeAbbreviations = {
//   Keyboard: "KB",
//   Laptop: "LAP",
//   Mouse: "MOU",
//   Desktop: "DESK",
//   CPU: "CPU",
//   Printer: "PRN",
//   TV: "TV",
//   UPS: "UPS",
//   "Wireless Mouse": "WMOU",
//   "Wireless Keyboard": "WKB",
//   Wlkbmc: "WLK"   // example, customize as needed
// };

// router.get('/generate-code/:type', async (req, res) => {
//   try {
//     const rawType = req.params.type; // e.g. "Keyboard"
//     const normalizedType = rawType.toLowerCase();

//     // Find abbreviation (fallback to first 3 letters if not in dictionary)
//     const abbreviation = typeAbbreviations[rawType] || rawType.substring(0, 3).toUpperCase();

//     // Count existing assets of this type (case-insensitive)
//     const count = await Asset.countDocuments({ type: new RegExp(`^${normalizedType}$`, "i") });

//     // Generate code using abbreviation
//     const code = `${abbreviation}-${String(count + 1).padStart(3, '0')}`;

//     res.json({ code });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// // ✅ Add Asset
// router.post('/add', async (req, res) => {
//   try {
//     if (!req.body.assetCode) {
//       return res.status(400).json({ message: 'Asset code is required' });
//     }
//     const newAsset = new Asset(req.body);
//     await newAsset.save();
//     res.status(201).json(newAsset);
//   } catch (error) {
//     console.error('Error adding asset:', error);
//     res.status(500).json({ error: 'Failed to add asset' });
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

// // ✅ Issue Asset
// router.post('/issue', async (req, res) => {
//   const { assetId, employeeId, departmentId, issuedDate } = req.body;
//   try {
//     const updatedAsset = await Asset.findByIdAndUpdate(
//       assetId,
//       { issued: true, employee: employeeId, department: departmentId, issuedDate },
//       { new: true }
//     );
//     if (!updatedAsset) return res.status(404).json({ message: 'Asset not found' });
//     res.status(200).json({ message: 'Asset issued successfully', asset: updatedAsset });
//   } catch (error) {
//     console.error('Error issuing asset:', error);
//     res.status(500).json({ message: 'Server error' });
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

// // ✅ Stats by Type
// router.get('/stats/type', async (req, res) => {
//   try {
//     const stats = await Asset.aggregate([{ $group: { _id: '$type', count: { $sum: 1 } } }]);
//     res.json(stats);
//   } catch (error) {
//     console.error('Error fetching stats:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ✅ All Assets
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




// const express = require('express');
// const router = express.Router();
// const Asset = require('../models/Asset');

// // ✅ Abbreviations Dictionary
// const typeAbbreviations = {
//   Keyboard: "KB",
//   Laptop: "LAP",
//   Mouse: "MOU",
//   Desktop: "DESK",
//   CPU: "CPU",
//   Printer: "PRN",
//   TV: "TV",
//   UPS: "UPS",
//   "Wireless Mouse": "WMOU",
//   "Wireless Keyboard": "WKB",
//   Wlkbmc: "WLK"   // example, customize as needed
// };

// // ✅ Generate Code (API - optional if frontend needs preview)
// router.get('/generate-code/:type', async (req, res) => {
//   try {
//     const rawType = req.params.type;
//     const normalizedType = rawType.toLowerCase();

//     const abbreviation =
//       typeAbbreviations[rawType] ||
//       rawType.substring(0, 3).toUpperCase();

//     const count = await Asset.countDocuments({
//       type: new RegExp(`^${normalizedType}$`, "i")
//     });

//     const code = `${abbreviation}-${String(count + 1).padStart(3, '0')}`;

//     res.json({ code });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✅ Add Asset (auto-generate assetCode here)
// router.post('/add', async (req, res) => {
//   try {
//     const { type } = req.body;

//     if (!type) {
//       return res.status(400).json({ message: 'Asset type is required' });
//     }

//     // Pick abbreviation or fallback
//     const abbreviation =
//       typeAbbreviations[type] ||
//       type.substring(0, 3).toUpperCase();

//     // Count existing assets of this type (case-insensitive)
//     const count = await Asset.countDocuments({
//       type: new RegExp(`^${type}$`, "i")
//     });

//     // Generate new asset code
//     const assetCode = `${abbreviation}-${String(count + 1).padStart(3, '0')}`;

//     // ✅ Save new asset (put assetCode first so it doesn’t get overwritten)
//     const newAsset = new Asset({
//       assetCode,
//       ...req.body
//     });

//     await newAsset.save();
//     res.status(201).json(newAsset);
//   } catch (error) {
//     console.error('Error adding asset:', error);
//     res.status(500).json({ error: 'Failed to add asset' });
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

// // ✅ Issue Asset
// router.post('/issue', async (req, res) => {
//   const { assetId, employeeId, departmentId, issuedDate } = req.body;
//   try {
//     const updatedAsset = await Asset.findByIdAndUpdate(
//       assetId,
//       { issued: true, employee: employeeId, department: departmentId, issuedDate },
//       { new: true }
//     );
//     if (!updatedAsset) return res.status(404).json({ message: 'Asset not found' });
//     res.status(200).json({ message: 'Asset issued successfully', asset: updatedAsset });
//   } catch (error) {
//     console.error('Error issuing asset:', error);
//     res.status(500).json({ message: 'Server error' });
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

// // ✅ Stats by Type
// router.get('/stats/type', async (req, res) => {
//   try {
//     const stats = await Asset.aggregate([
//       { $group: { _id: '$type', count: { $sum: 1 } } }
//     ]);
//     res.json(stats);
//   } catch (error) {
//     console.error('Error fetching stats:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ✅ All Assets
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



// const express = require('express');
// const router = express.Router();
// const Asset = require('../models/Asset');
// const multer = require("multer");
// const path = require("path");
// // ✅ Abbreviations Dictionary
// const typeAbbreviations = {
//   Keyboard: "KB",
//   Laptop: "LAP",
//   Mouse: "MOU",
//   Desktop: "DESK",
//   CPU: "CPU",
//   Printer: "PRN",
//   TV: "TV",
//   UPS: "UPS",
//   "Wireless Mouse": "WMOU",
//   "Wireless Keyboard": "WKB",
//   Wlkbmc: "WLK"   // example, customize as needed
// };

// // ✅ Helper function to generate asset code
// async function generateAssetCode(type) {
//   // Pick abbreviation or fallback
//   const abbreviation =
//     typeAbbreviations[type] || type.substring(0, 3).toUpperCase();

//   // Count existing assets of this type (case-insensitive)
//   const count = await Asset.countDocuments({
//     type: new RegExp(`^${type}$`, "i")
//   });

//   // Generate new asset code
//   return `${abbreviation}-${String(count + 1).padStart(3, '0')}`;
// }

// // ✅ Multer storage setup
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/invoices"); // store PDFs in /uploads/invoices
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
//     cb(null, uniqueName);
//   }
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === "application/pdf") {
//       cb(null, true);
//     } else {
//       cb(new Error("Only PDF files are allowed!"), false);
//     }
//   }
// });

// // ✅ POST route with file upload
// router.post("/", upload.single("invoiceFile"), async (req, res) => {
//   try {
//     const newAsset = new Asset({
//       ...req.body,
//       invoiceFile: req.file ? req.file.filename : null // save filename
//     });

//     await newAsset.save();
//     res.json({ message: "Asset added successfully", asset: newAsset });
//   } catch (err) {
//     console.error("Error saving asset:", err);
//     res.status(500).json({ error: "Failed to add asset" });
//   }
// });


// // ✅ Generate Code (API - optional if frontend needs preview)
// // router.get('/generate-code/:type', async (req, res) => {
// //   try {
// //     const rawType = req.params.type;
// //     if (!rawType) return res.status(400).json({ message: "Type is required" });

// //     const code = await generateAssetCode(rawType);
// //     res.json({ code });
// //   } catch (err) {
// //     console.error("Error generating code:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // ✅ Add Asset (auto-generate assetCode here)
// // router.post('/add', async (req, res) => {
// //   try {
// //     const { type } = req.body;
// //     if (!type) {
// //       return res.status(400).json({ message: 'Asset type is required' });
// //     }

// //     // Generate code
// //     const assetCode = await generateAssetCode(type);

// //     // ✅ Save new asset
// //     const newAsset = new Asset({
// //       assetCode,
// //       ...req.body
// //     });

// //     await newAsset.save();
// //     res.status(201).json(newAsset);
// //   } catch (error) {
// //     console.error('Error adding asset:', error);
// //     res.status(500).json({ error: 'Failed to add asset' });
// //   }
// // });

// // Create Asset
// router.post("/", async (req, res) => {
//   try {
//     // Generate asset code
//     const assetCount = await Asset.countDocuments();
//     const assetCode = "AST" + String(assetCount + 1).padStart(4, "0");

//     const newAsset = new Asset({
//       assetCode, // Auto-generated
//       type: req.body.type,
//       name: req.body.name,
//       manufacturer: req.body.manufacturer,
//       configuration: req.body.configuration,
//       serialNumber: req.body.serialNumber,
//       invoiceNumber: req.body.invoiceNumber,
//       location: req.body.location,
//       status: req.body.status,
//       dateAdded: req.body.dateAdded || new Date(),
//       warranty: req.body.warranty,
//       price: req.body.price,
//       partyName: req.body.partyName,
//       issued: false,
//     });

//     const savedAsset = await newAsset.save();
//     res.status(201).json(savedAsset);
//   } catch (err) {
//     console.error("Error saving asset:", err);
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

// // ✅ Issue Asset
// router.post('/issue', async (req, res) => {
//   const { assetId, employeeId, departmentId, issuedDate } = req.body;
//   try {
//     const updatedAsset = await Asset.findByIdAndUpdate(
//       assetId,
//       { issued: true, employee: employeeId, department: departmentId, issuedDate },
//       { new: true }
//     );
//     if (!updatedAsset) return res.status(404).json({ message: 'Asset not found' });
//     res.status(200).json({ message: 'Asset issued successfully', asset: updatedAsset });
//   } catch (error) {
//     console.error('Error issuing asset:', error);
//     res.status(500).json({ message: 'Server error' });
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

// // ✅ Stats by Type
// router.get('/stats/type', async (req, res) => {
//   try {
//     const stats = await Asset.aggregate([
//       { $group: { _id: '$type', count: { $sum: 1 } } }
//     ]);
//     res.json(stats);
//   } catch (error) {
//     console.error('Error fetching stats:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // ✅ All Assets
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
