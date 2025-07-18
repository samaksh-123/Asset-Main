
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReturnAsset = () => {
//   const [issuedAssets, setIssuedAssets] = useState([]);
//   const [selectedId, setSelectedId] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [returnTo, setReturnTo] = useState('');
//   const [returnReason, setReturnReason] = useState('');

//   const returnToOptions = ['IT Department', 'Others'];
//   const returnReasons = ['Not Working ', 'Damaged', 'In Stock', 'Other'];

//   useEffect(() => {
//     fetchIssuedAssets();
//   }, []);

//   const fetchIssuedAssets = async () => {
//     try {
//       const res = await axios.get('https://asset-main-backend.onrender.com/api/issued');
//       setIssuedAssets(res.data);
//     } catch (err) {
//       console.error('Failed to fetch issued assets', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedId || !returnTo || !returnReason || !returnDate) {
//       return alert('Please fill all fields');
//     }

//     const assetToReturn = issuedAssets.find(item => item._id === selectedId);
//     if (!assetToReturn) return;

//     const issuedDate = new Date(assetToReturn.issuedDate);
//     const selectedReturnDate = new Date(returnDate);
//     const today = new Date();

//     if (selectedReturnDate > today) {
//       return alert("Return date cannot be in the future.");
//     }

//     if (selectedReturnDate < issuedDate) {
//       return alert("Return date cannot be before the issue date.");
//     }

//     try {
//       if (returnReason === 'In Stock') {
//         // Add back to available assets
//         const availableAssetPayload = {
//           name: assetToReturn.assetId?.name,
//           type: assetToReturn.assetId?.type,
//           serialNumber: assetToReturn.assetId?.serialNumber,
//           configuration: assetToReturn.assetId?.configuration,
        
//           manufacturer: assetToReturn.assetId?.manufacturer,
      
//           status: 'In Stock',
//           dateAdded: returnDate
//         };

//         await axios.post('http://localhost:5000/api/assets', availableAssetPayload);
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ReturnAsset = () => {
//   const [issuedAssets, setIssuedAssets] = useState([]);
//   const [selectedId, setSelectedId] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [returnTo, setReturnTo] = useState('');
//   const [returnReason, setReturnReason] = useState('');

//   const returnToOptions = ['IT Department', 'Others'];
//   const returnReasons = ['Not Working ', 'Damaged', 'In Stock', 'Other'];

//   useEffect(() => {
//     fetchIssuedAssets();
//   }, []);

//   const fetchIssuedAssets = async () => {
//     try {
//       const res = await axios.get('https://it-asset-management-u60k.onrender.com/api/issued');
//       setIssuedAssets(res.data);
//     } catch (err) {
//       console.error('Failed to fetch issued assets', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedId || !returnTo || !returnReason || !returnDate) {
//       return alert('Please fill all fields');
//     }

//     const assetToReturn = issuedAssets.find(item => item._id === selectedId);
//     if (!assetToReturn) return;

//     const issuedDate = new Date(assetToReturn.issuedDate);
//     const selectedReturnDate = new Date(returnDate);
//     const today = new Date();

//     if (selectedReturnDate > today) {
//       return alert("Return date cannot be in the future.");
//     }

//     if (selectedReturnDate < issuedDate) {
//       return alert("Return date cannot be before the issue date.");
//     }

//     try {
//       if (returnReason === 'In Stock') {
//         // Add back to available assets
//         const availableAssetPayload = {
//           name: assetToReturn.assetId?.name,
//           type: assetToReturn.assetId?.type,
//           serialNumber: assetToReturn.assetId?.serialNumber,
//           configuration: assetToReturn.assetId?.configuration,
//           manufacturer: assetToReturn.assetId?.manufacturer,
//           status: 'In Stock',
//           dateAdded: returnDate
//         };

//         await axios.post('https://it-asset-management-u60k.onrender.com/api/assets', availableAssetPayload);


//         alert('Asset returned to stock successfully');
//       } else {
//         // Add to returned asset list
//         const returnPayload = {
//           assetId: assetToReturn.assetId,
//           employeeId: assetToReturn.employeeId,
//           departmentId: assetToReturn.departmentId,
//           issuedDate: assetToReturn.issuedDate,
//           returnDate,
//           returnTo,
//           returnReason
//         };

//         await axios.post('http://localhost:5000/api/returns', returnPayload);
//         alert('Asset marked as returned successfully');
//       }

//       // Remove from issued list
//       await axios.delete(`http://localhost:5000/api/issued/${selectedId}`);

//       // Reset form
//       setSelectedId('');
//       setReturnDate('');
//       setReturnTo('');
//       setReturnReason('');
//       fetchIssuedAssets();

//     } catch (err) {
//       console.error('Error processing return:', err);
//       // alert('');                         //Failed to process return
//     }
//   };

//   return (
//     <div className="form">
//       <h3>Return Asset</h3>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Select Issued Asset:
//           <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} required>
//             <option value="">Select Issued Asset</option>
//             {issuedAssets.map(item => (
//               <option key={item._id} value={item._id}>
//                 {item.assetId?.name || 'Unnamed'} -
//                 {item.assetId?.serialNumber || 'No Serial'} -
//                 {item.assetId?.configuration || 'No Config'} -
//                 {item.employeeId?.name || 'Unknown Employee'}
//               </option>
//             ))}
//           </select>
//         </label>
//         <br />

//         <label>
//           Return Date:
//           <input
//             type="date"
//             value={returnDate}
//             max={new Date().toISOString().split('T')[0]}
//             onChange={(e) => setReturnDate(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Return To:
//           <select value={returnTo} onChange={(e) => setReturnTo(e.target.value)} required>
//             <option value="">Select</option>
//             {returnToOptions.map((option, idx) => (
//               <option key={idx} value={option}>{option}</option>
//             ))}
//           </select>
//         </label>
//         <br />

//         <label>
//           Return Reason:
//           <select value={returnReason} onChange={(e) => setReturnReason(e.target.value)} required>
//             <option value="">Select Reason</option>
//             {returnReasons.map((reason, idx) => (
//               <option key={idx} value={reason}>{reason}</option>
//             ))}
//           </select>
//         </label>
//         <br />

//         <button type="submit">Return</button>
//       </form>
//     </div>
//   );
// };

// export default ReturnAsset;

//         await axios.post('https://it-asset-management-u60k.onrender.com/api/returns', returnPayload);
//         alert('Asset marked as returned successfully');
//       }

//       // Remove from issued list
//       await axios.delete(`https://it-asset-management-u60k.onrender.com/api/issued/${selectedId}`);

//       // Reset form
//       setSelectedId('');
//       setReturnDate('');
//       setReturnTo('');
//       setReturnReason('');
//       fetchIssuedAssets();

//     } catch (err) {
//       console.error('Error processing return:', err);
//     }
//   };

//   return (
//     <div className="form">
//       <h3>Return Asset</h3>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Select Issued Asset:
//           <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} required>
//             <option value="">Select Issued Asset</option>
//             {issuedAssets.map(item => (
//               <option key={item._id} value={item._id}>
//                 {item.assetId?.name || 'Unnamed'} -
//                 {item.assetId?.serialNumber || 'No Serial'} -
//                 {item.assetId?.configuration || 'No Config'} -
//                 {item.employeeId?.name || 'Unknown Employee'}
//               </option>
//             ))}
//           </select>
//         </label>
//         <br />

//         <label>
//           Return Date:
//           <input
//             type="date"
//             value={returnDate}
//             max={new Date().toISOString().split('T')[0]}
//             onChange={(e) => setReturnDate(e.target.value)}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Return To:
//           <select value={returnTo} onChange={(e) => setReturnTo(e.target.value)} required>
//             <option value="">Select</option>
//             {returnToOptions.map((option, idx) => (
//               <option key={idx} value={option}>{option}</option>
//             ))}
//           </select>
//         </label>
//         <br />

//         <label>
//           Return Reason:
//           <select value={returnReason} onChange={(e) => setReturnReason(e.target.value)} required>
//             <option value="">Select Reason</option>
//             {returnReasons.map((reason, idx) => (
//               <option key={idx} value={reason}>{reason}</option>
//             ))}
//           </select>
//         </label>
//         <br />

//         <button type="submit">Return</button>
//       </form>
//     </div>
//   );
// };

// export default ReturnAsset;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AddDepartment.css'; // Import your CSS for styling

// const ReturnAsset = () => {
//   const [issuedAssets, setIssuedAssets] = useState([]);
//   const [selectedId, setSelectedId] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [returnTo, setReturnTo] = useState('');
//   const [returnReason, setReturnReason] = useState('');
//   const [remark, setRemark] = useState(''); // NEW STATE

//   const returnToOptions = ['IT Department', 'Others'];
//   const returnReasons = ['Not Working', 'Damaged', 'In Stock', 'Other'];

//   useEffect(() => {
//     fetchIssuedAssets();
//   }, []);

//   const fetchIssuedAssets = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/issued');
//       setIssuedAssets(res.data);
//     } catch (err) {
//       console.error('Failed to fetch issued assets', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedId || !returnTo || !returnReason || !returnDate) {
//       return alert('Please fill all fields');
//     }

//     const assetToReturn = issuedAssets.find(item => item._id === selectedId);
//     if (!assetToReturn) return;

//     const issuedDate = new Date(assetToReturn.issuedDate);
//     const selectedReturnDate = new Date(returnDate);
//     const today = new Date();

//     if (selectedReturnDate > today) {
//       return alert("Return date cannot be in the future.");
//     }

//     if (selectedReturnDate < issuedDate) {
//       return alert("Return date cannot be before the issue date.");
//     }

//     try {
//       if (returnReason === 'In Stock') {
//         const availableAssetPayload = {
//           name: assetToReturn.assetId?.name,
//           type: assetToReturn.assetId?.type,
//           serialNumber: assetToReturn.assetId?.serialNumber,
//           configuration: assetToReturn.assetId?.configuration,
//           manufacturer: assetToReturn.assetId?.manufacturer,
//           status: 'In Stock',
//           dateAdded: returnDate
//         };

//         await axios.post('http://localhost:5000/api/assets', availableAssetPayload);
//         alert('Asset returned to stock successfully');
//       } else {
//         const returnPayload = {
//           assetId: assetToReturn.assetId,
//           employeeId: assetToReturn.employeeId,
//           departmentId: assetToReturn.departmentId,
//           issuedDate: assetToReturn.issuedDate,
//           returnDate,
//           returnTo,
//           returnReason,
//           remark // Include remark in payload
//         };

//         await axios.post('http://localhost:5000/api/returns', returnPayload);
//         alert('Asset marked as returned successfully');
//       }

//       await axios.delete(`http://localhost:5000/api/issued/${selectedId}`);

//       // Reset form
//       setSelectedId('');
//       setReturnDate('');
//       setReturnTo('');
//       setReturnReason('');
//       setRemark('');
//       fetchIssuedAssets();

//     } catch (err) {
//       console.error('Error processing return:', err);
//     }
//   };

//   return (
//     <div className="form" style={{ maxWidth: '600px', margin: 'auto' }}>
//       <h3>Return Asset</h3>
//       <form onSubmit={handleSubmit}>
//         {/* Select Issued Asset */}
//         <label>Select Issued Asset:</label>
//         <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} required>
//           <option value="">Select Issued Asset</option>
//           {issuedAssets.map(item => (
//             <option key={item._id} value={item._id}>
//               {item.assetId?.name || 'Unnamed'} - {item.assetId?.serialNumber || 'No Serial'} - {item.assetId?.configuration || 'No Config'} - {item.employeeId?.name || 'Unknown Employee'}
//             </option>
//           ))}
//         </select>
//         <br />

//         {/* Return Date */}
//         <label>Return Date:</label>
//         <input
//           type="date"
//           value={returnDate}
//           max={new Date().toISOString().split('T')[0]}
//           onChange={(e) => setReturnDate(e.target.value)}
//           required
//         />
//         <br />

//         {/* Return To */}
//         <label>Return To:</label>
//         <select value={returnTo} onChange={(e) => setReturnTo(e.target.value)} required>
//           <option value="">Select</option>
//           {returnToOptions.map((option, idx) => (
//             <option key={idx} value={option}>{option}</option>
//           ))}
//         </select>
//         <br />

//         {/* Return Reason */}
//         <label>Return Reason:</label>
//         <select value={returnReason} onChange={(e) => setReturnReason(e.target.value)} required>
//           <option value="">Select Reason</option>
//           {returnReasons.map((reason, idx) => (
//             <option key={idx} value={reason}>{reason}</option>
//           ))}
//         </select>
//         <br />

//         {/* Remark Field */}
//         <label>Remark:</label>
//         <textarea
//           rows="3"
//           value={remark}
//           onChange={(e) => setRemark(e.target.value)}
//           placeholder="Enter any remarks (optional)..."
//           style={{
//             width: '100%',
//             padding: '8px',
//             border: '1px solid #ccc',
//             borderRadius: '4px',
//             resize: 'vertical'
//           }}
//         />
//         <br />

//         <button type="submit">Return</button>
//       </form>
//     </div>
//   );
// };

// export default ReturnAsset;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './AddDepartment.css'; // ✅ Make sure this file contains .input-field styles

// const ReturnAsset = () => {
//   const [issuedAssets, setIssuedAssets] = useState([]);
//   const [selectedId, setSelectedId] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [returnTo, setReturnTo] = useState('');
//   const [returnReason, setReturnReason] = useState('');
//   const [remark, setRemark] = useState('');

//   const returnToOptions = ['IT Department', 'Others'];
//   const returnReasons = ['Not Working', 'Damaged', 'In Stock', 'Other'];

//   useEffect(() => {
//     fetchIssuedAssets();
//   }, []);

//   const fetchIssuedAssets = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/issued');
//       setIssuedAssets(res.data);
//     } catch (err) {
//       console.error('Failed to fetch issued assets', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedId || !returnTo || !returnReason || !returnDate) {
//       return alert('Please fill all fields');
//     }

//     const assetToReturn = issuedAssets.find(item => item._id === selectedId);
//     if (!assetToReturn) return;

//     const issuedDate = new Date(assetToReturn.issuedDate);
//     const selectedReturnDate = new Date(returnDate);
//     const today = new Date();

//     if (selectedReturnDate > today) {
//       return alert("Return date cannot be in the future.");
//     }

//     if (selectedReturnDate < issuedDate) {
//       return alert("Return date cannot be before the issue date.");
//     }

//     try {
//       if (returnReason === 'In Stock') {
//         const availableAssetPayload = {
//           name: assetToReturn.assetId?.name,
//           type: assetToReturn.assetId?.type,
//           serialNumber: assetToReturn.assetId?.serialNumber,
//           configuration: assetToReturn.assetId?.configuration,
//           manufacturer: assetToReturn.assetId?.manufacturer,
//           status: 'In Stock',
//           dateAdded: returnDate
//         };

//         await axios.post('http://localhost:5000/api/assets', availableAssetPayload);
//         alert('Asset returned to stock successfully');
//       } else {
//         const returnPayload = {
//           assetId: assetToReturn.assetId,
//           employeeId: assetToReturn.employeeId,
//           departmentId: assetToReturn.departmentId,
//           issuedDate: assetToReturn.issuedDate,
//           returnDate,
//           returnTo,
//           returnReason,
//           remark
//         };

//         await axios.post('http://localhost:5000/api/returns', returnPayload);
//         alert('Asset marked as returned successfully');
//       }

//       await axios.delete(`http://localhost:5000/api/issued/${selectedId}`);

//       setSelectedId('');
//       setReturnDate('');
//       setReturnTo('');
//       setReturnReason('');
//       setRemark('');
//       fetchIssuedAssets();

//     } catch (err) {
//       console.error('Error processing return:', err);
//     }
//   };

//   return (
//     <div className="form" style={{ maxWidth: '600px', margin: 'auto' }}>
//       <h3>Return Asset</h3>
//       <form onSubmit={handleSubmit}>

//         <label>Select Issued Asset:</label>
//         <select
//           value={selectedId}
//           onChange={(e) => setSelectedId(e.target.value)}
//           required
//           className="input-field"
//         >
//           <option value="">Select Issued Asset</option>
//           {issuedAssets.map(item => (
//             <option key={item._id} value={item._id}>
//               {item.assetId?.name || 'Unnamed'} - {item.assetId?.serialNumber || 'No Serial'} - {item.assetId?.configuration || 'No Config'} - {item.employeeId?.name || 'Unknown Employee'}
//             </option>
//           ))}
//         </select>

//         <label>Return Date:</label>
//         <input
//           type="date"
//           value={returnDate}
//           max={new Date().toISOString().split('T')[0]}
//           onChange={(e) => setReturnDate(e.target.value)}
//           required
//           className="input-field"
//         />

//         <label>Return To:</label>
//         <select
//           value={returnTo}
//           onChange={(e) => setReturnTo(e.target.value)}
//           required
//           className="input-field"
//         >
//           <option value="">Select</option>
//           {returnToOptions.map((option, idx) => (
//             <option key={idx} value={option}>{option}</option>
//           ))}
//         </select>

//         <label>Return Reason:</label>
//         <select
//           value={returnReason}
//           onChange={(e) => setReturnReason(e.target.value)}
//           required
//           className="input-field"
//         >
//           <option value="">Select Reason</option>
//           {returnReasons.map((reason, idx) => (
//             <option key={idx} value={reason}>{reason}</option>
//           ))}
//         </select>

//         <label>Remark:</label>
//         <textarea
//           rows="3"
//           value={remark}
//           onChange={(e) => setRemark(e.target.value)}
//           placeholder="Enter any remarks (optional)..."
//           className="input-field"
//         />

//         <button type="submit" style={{ marginTop: '1rem' }}>Return</button>
//       </form>
//     </div>
//   );
// };

// export default ReturnAsset;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddDepartment';

const ReturnAsset = () => {
  const [issuedAssets, setIssuedAssets] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTo, setReturnTo] = useState('');
  const [returnReason, setReturnReason] = useState('');
  const [remark, setRemark] = useState('');

  const returnToOptions = ['IT Department', 'Others'];
  const returnReasons = ['Not Working', 'Damaged', 'In Stock', 'Other'];

  useEffect(() => {
    fetchIssuedAssets();
  }, []);

  const fetchIssuedAssets = async () => {
    try {
      const res = await axios.get('https://asset-main-2.onrender.com/api/issued');
      setIssuedAssets(res.data);
    } catch (err) {
      console.error('Failed to fetch issued assets', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedId || !returnTo || !returnReason || !returnDate) {
      return alert('Please fill all fields');
    }

    const assetToReturn = issuedAssets.find(item => item._id === selectedId);
    if (!assetToReturn) return;

    const issuedDate = new Date(assetToReturn.issuedDate);
    const selectedReturnDate = new Date(returnDate);
    const today = new Date();

    if (selectedReturnDate > today) {
      return alert("Return date cannot be in the future.");
    }

    if (selectedReturnDate < issuedDate) {
      return alert("Return date cannot be before the issue date.");
    }

    try {
      if (returnReason === 'In Stock') {
        const availableAssetPayload = {
          name: assetToReturn.assetId?.name,
          type: assetToReturn.assetId?.type,
          serialNumber: assetToReturn.assetId?.serialNumber,
          configuration: assetToReturn.assetId?.configuration,
          manufacturer: assetToReturn.assetId?.manufacturer,
          status: 'In Stock',
          dateAdded: returnDate
        };

        await axios.post('https://asset-main-2.onrender.com/api/assets', availableAssetPayload);
        alert('Asset returned to stock successfully');
      } else {
        const returnPayload = {
          assetId: assetToReturn.assetId,
          employeeId: assetToReturn.employeeId,
          departmentId: assetToReturn.departmentId,
          issuedDate: assetToReturn.issuedDate,
          returnDate,
          returnTo,
          returnReason,
          remark
        };

        await axios.post('https://asset-main-2.onrender.com/api/returns', returnPayload);
        alert('Asset marked as returned successfully');
      }

      await axios.delete(`https://asset-main-2.onrender.com/api/issued/${selectedId}`);

      setSelectedId('');
      setReturnDate('');
      setReturnTo('');
      setReturnReason('');
      setRemark('');
      fetchIssuedAssets();

    } catch (err) {
      console.error('Error processing return:', err);
    }
  };

  return (
    <div className="return-asset-container">
      <div className="return-form">
        <h3>Return Asset</h3>
        <form onSubmit={handleSubmit}>
          <label>Select Issued Asset:</label>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select Issued Asset</option>
            {issuedAssets.map(item => (
              <option key={item._id} value={item._id}>
                {item.assetId?.name || 'Unnamed'} - {item.assetId?.serialNumber || 'No Serial'} - {item.assetId?.configuration || 'No Config'} - {item.employeeId?.name || 'Unknown Employee'}
              </option>
            ))}
          </select>

          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            max={new Date().toISOString().split('T')[0]}
            onChange={(e) => setReturnDate(e.target.value)}
            required
            className="input-field"
          />

          <label>Return To:</label>
          <select
            value={returnTo}
            onChange={(e) => setReturnTo(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select</option>
            {returnToOptions.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>

          <label>Return Reason:</label>
          <select
            value={returnReason}
            onChange={(e) => setReturnReason(e.target.value)}
            required
            className="input-field"
          >
            <option value="">Select Reason</option>
            {returnReasons.map((reason, idx) => (
              <option key={idx} value={reason}>{reason}</option>
            ))}
          </select>

          <label>Remark:</label>
          <textarea
            rows="3"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            placeholder="Enter any remarks (optional)..."
            className="input-field"
          />

          <button type="submit">Return</button>
        </form>
      </div>
    </div>
  );
};

export default ReturnAsset;
