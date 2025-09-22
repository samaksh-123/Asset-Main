// import React, { useEffect, useState } from 'react';
// import { fetchAvailableAssets } from '../api';
// import { exportToExcel } from '../utils/exportToExcel';


// const ViewAssets = () => {
//   const [assets, setAssets] = useState([]);
//   const [filteredAssets, setFilteredAssets] = useState([]);
//   const [selectedType, setSelectedType] = useState('');
//   const [selectedDateFilter, setSelectedDateFilter] = useState('');
//   const [customDate, setCustomDate] = useState('');

//   useEffect(() => {
//     loadAssets();
//   }, []);

//   const loadAssets = () => {
//     fetchAvailableAssets()
//       .then(res => {
//         setAssets(res.data);
//         setFilteredAssets(res.data);
//       })
//       .catch(err => console.error('Error fetching assets:', err));
//   };

//   const filterAssets = (type, dateFilter, customDate) => {
//     let filtered = [...assets];
//     const now = new Date();

//     if (type && type !== 'all') {
//       filtered = filtered.filter(a => a.type === type);
//     }

//     if (dateFilter || customDate) {
//       filtered = filtered.filter(asset => {
//         const assetDate = new Date(asset.dateAdded);
//         const diffTime = now - assetDate;
//         const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//         if (customDate) {
//           const selected = new Date(customDate);
//           return assetDate.toDateString() === selected.toDateString();
//         }

//         switch (dateFilter) {
//           case 'today':
//             return assetDate.toDateString() === now.toDateString();
//           case 'yesterday':
//             return diffDays === 1;
//           case 'last7':
//             return diffDays <= 7;
//           default:
//             return true;
//         }
//       });
//     }

//     setFilteredAssets(filtered);
//   };

//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     filterAssets(type, selectedDateFilter, customDate);
//   };

//   const handleDateFilterChange = (e) => {
//     const dateFilter = e.target.value;
//     setSelectedDateFilter(dateFilter);
//     setCustomDate('');
//     filterAssets(selectedType, dateFilter, '');
//   };

//   const handleCustomDateChange = (e) => {
//     const date = e.target.value;
//     setCustomDate(date);
//     setSelectedDateFilter('');
//     filterAssets(selectedType, '', date);
//   };

//   const handleExport = () => {
//     const exportData = filteredAssets.map(asset => ({
//       Type: asset.type || 'N/A',
//       Name: asset.name || 'N/A',
//       Configuration: asset.configuration || 'N/A',
//       SerialNumber: asset.serialNumber || 'N/A',
//       AssetCode: asset.assetCode || 'N/A',
//       Location: asset.location || 'N/A',
//       Status: asset.status || 'N/A',
//       PartyName: asset.partyName || 'N/A',
//       Price: asset.price ? `₹${asset.price}` : 'N/A',
//       Warranty: asset.warranty || 'N/A',
//       DateAdded: formatDate(asset.dateAdded),
//     }));

//     exportToExcel(exportData, 'AvailableAssets.xlsx');
//   };

//   const assetTypes = [...new Set(assets.map(a => a.type))];

//   const formatDate = (dateString) => {
//     if (!dateString || dateString === 'null') return 'N/A';
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return 'N/A';
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div className="asset-page">
//       <h3 style={{ color: '#000', textAlign: 'center' }}>Available Assets</h3>

//       {/* Filters */}
//       <div className="filters">
//         <div>
//           <label>Type: </label>
//           <select value={selectedType} onChange={handleTypeChange}>
//             <option value="all">All</option>
//             {assetTypes.map((type, idx) => (
//               <option key={idx} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Date Filter: </label>
//           <select value={selectedDateFilter} onChange={handleDateFilterChange}>
//             <option value="">All Dates</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="last7">Last 7 Days</option>
//           </select>
//         </div>

//         <div>
//           <label>Or Pick Date: </label>
//           <input type="date" value={customDate} onChange={handleCustomDateChange} />
//         </div>

//         <div>
//           <button
//             onClick={handleExport}
//             style={{
//               padding: '6px 12px',
//               backgroundColor: '#2980b9',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Export to Excel
//           </button>
//         </div>
//       </div>

//       <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>
//         Showing {filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''}.
//       </div>

//       {/* Table */}
//       {filteredAssets.length === 0 ? (
//         <p style={{ color: '#fff' }}>No assets available.</p>
//       ) : (
//         <table className='asset-table'>
//           <thead>
//             <tr>
//               <th>Type</th>
//               <th>Name</th>
//               <th>Configuration</th>
//               <th>Serial Number</th>
//               <th>Asset Code</th>

//               <th>Location</th>
//               <th>Status</th>
//               <th>Party Name</th>
//               <th>Price (₹)</th>
//               <th>Warranty</th>
//               <th>Date Received</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAssets.map((a, idx) => (
//               <tr key={idx}>
//                 <td>{a.type}</td>
//                 <td>{a.name || 'N/A'}</td>
//                 <td>{a.configuration}</td>
//                 <td>{a.serialNumber}</td>
//                 <td>{a.assetCode || 'N/A'}</td>
//                 <td>{a.location}</td>
//                 <td>{a.status}</td>
//                 <td>{a.partyName || 'N/A'}</td>
//                 <td>{a.price ? `₹${a.price}` : 'N/A'}</td>
//                 <td>{a.warranty || 'N/A'}</td>
//                 <td>{formatDate(a.dateAdded)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewAssets;


// import React, { useEffect, useState } from 'react';
// import { fetchAvailableAssets } from '../api';
// import { exportToExcel } from '../utils/exportToExcel';

// const ViewAssets = () => {
//   const [assets, setAssets] = useState([]);
//   const [filteredAssets, setFilteredAssets] = useState([]);
//   const [selectedType, setSelectedType] = useState('');
//   const [selectedDateFilter, setSelectedDateFilter] = useState('');
//   const [customDate, setCustomDate] = useState('');

//   useEffect(() => {
//     loadAssets();
//   }, []);

//   const loadAssets = () => {
//     fetchAvailableAssets()
//       .then(res => {
//         // ✅ Sort by AssetCode (latest first)
//         const sorted = [...res.data].sort((a, b) =>
//           (a.assetCode || '').localeCompare(b.assetCode || '')
//         );
//         setAssets(sorted);
//         setFilteredAssets(sorted);
//       })
//       .catch(err => console.error('Error fetching assets:', err));
//   };

//   const filterAssets = (type, dateFilter, customDate) => {
//     let filtered = [...assets];
//     const now = new Date();

//     if (type && type !== 'all') {
//       filtered = filtered.filter(a => a.type === type);
//     }

//     if (dateFilter || customDate) {
//       filtered = filtered.filter(asset => {
//         const assetDate = new Date(asset.dateAdded);
//         const diffTime = now - assetDate;
//         const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

//         if (customDate) {
//           const selected = new Date(customDate);
//           return assetDate.toDateString() === selected.toDateString();
//         }

//         switch (dateFilter) {
//           case 'today':
//             return assetDate.toDateString() === now.toDateString();
//           case 'yesterday':
//             return diffDays === 1;
//           case 'last7':
//             return diffDays <= 7;
//           default:
//             return true;
//         }
//       });
//     }

//     setFilteredAssets(filtered);
//   };

//   const handleTypeChange = (e) => {
//     const type = e.target.value;
//     setSelectedType(type);
//     filterAssets(type, selectedDateFilter, customDate);
//   };

//   const handleDateFilterChange = (e) => {
//     const dateFilter = e.target.value;
//     setSelectedDateFilter(dateFilter);
//     setCustomDate('');
//     filterAssets(selectedType, dateFilter, '');
//   };

//   const handleCustomDateChange = (e) => {
//     const date = e.target.value;
//     setCustomDate(date);
//     setSelectedDateFilter('');
//     filterAssets(selectedType, '', date);
//   };

//   const handleExport = () => {
//     const exportData = filteredAssets.map(asset => ({
//       AssetCode: asset.assetCode || 'N/A',   // ✅ Ensure assetCode goes to Excel
//       Type: asset.type || 'N/A',
//       Name: asset.name || 'N/A',
//       Configuration: asset.configuration || 'N/A',
//       SerialNumber: asset.serialNumber || 'N/A',
//       Location: asset.location || 'N/A',
//       Status: asset.status || 'N/A',
//       PartyName: asset.partyName || 'N/A',
//       Price: asset.price ? `₹${asset.price}` : 'N/A',
//       Warranty: asset.warranty || 'N/A',
//       DateAdded: formatDate(asset.dateAdded),
//     }));

//     exportToExcel(exportData, 'AvailableAssets.xlsx');
//   };

//   const assetTypes = [...new Set(assets.map(a => a.type))];

//   const formatDate = (dateString) => {
//     if (!dateString || dateString === 'null') return 'N/A';
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return 'N/A';
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   return (
//     <div className="asset-page">
//       <h3 style={{ color: '#000', textAlign: 'center' }}>Available Assets</h3>

//       {/* Filters */}
//       <div className="filters">
//         <div>
//           <label>Type: </label>
//           <select value={selectedType} onChange={handleTypeChange}>
//             <option value="all">All</option>
//             {assetTypes.map((type, idx) => (
//               <option key={idx} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Date Filter: </label>
//           <select value={selectedDateFilter} onChange={handleDateFilterChange}>
//             <option value="">All Dates</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="last7">Last 7 Days</option>
//           </select>
//         </div>

//         <div>
//           <label>Or Pick Date: </label>
//           <input type="date" value={customDate} onChange={handleCustomDateChange} />
//         </div>

//         <div>
//           <button
//             onClick={handleExport}
//             style={{
//               padding: '6px 12px',
//               backgroundColor: '#2980b9',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             Export to Excel
//           </button>
//         </div>
//       </div>

//       <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>
//         Showing {filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''}.
//       </div>

//       {/* Table */}
//       {filteredAssets.length === 0 ? (
//         <p style={{ color: '#fff' }}>No assets available.</p>
//       ) : (
//         <table className='asset-table'>
//           <thead>
//             <tr>
//               <th>Asset Code</th> {/* ✅ AssetCode moved first */}
//               <th>Type</th>
//               <th>Name</th>
//               <th>Configuration</th>
//               <th>Serial Number</th>
//               <th>Location</th>
//               <th>Status</th>
//               <th>Party Name</th>
//               <th>Price (₹)</th>
//               <th>Warranty</th>
//               <th>Date Received</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAssets.map((a, idx) => (
//               <tr key={idx}>
//                 <td>{a.assetCode || 'N/A'}</td>
//                 <td>{a.type || 'N/A'}</td>
//                 <td>{a.name || 'N/A'}</td>
//                 <td>{a.configuration || 'N/A'}</td>
//                 <td>{a.serialNumber || 'N/A'}</td>
//                 <td>{a.location || 'N/A'}</td>
//                 <td>{a.status || 'N/A'}</td>
//                 <td>{a.partyName || 'N/A'}</td>
//                 <td>{a.price ? `₹${a.price}` : 'N/A'}</td>
//                 <td>{a.warranty || 'N/A'}</td>
//                 <td>{formatDate(a.dateAdded)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewAssets;

import React, { useEffect, useState } from 'react';
import { fetchAvailableAssets } from '../api';
import { exportToExcel } from '../utils/exportToExcel';

const ViewAssets = () => {
  const [assets, setAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDateFilter, setSelectedDateFilter] = useState('');
  const [customDate, setCustomDate] = useState('');

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = () => {
    fetchAvailableAssets()
      .then(res => {
        const sorted = [...res.data].sort((a, b) =>
          (a.assetCode || '').localeCompare(b.assetCode || '')
        );
        setAssets(sorted);
        setFilteredAssets(sorted);
      })
      .catch(err => console.error('Error fetching assets:', err));
  };

  const filterAssets = (type, dateFilter, customDate) => {
    let filtered = [...assets];
    const now = new Date();

    if (type && type !== 'all') {
      filtered = filtered.filter(a => a.type === type);
    }

    if (dateFilter || customDate) {
      filtered = filtered.filter(asset => {
        const assetDate = new Date(asset.dateAdded);
        const diffTime = now - assetDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (customDate) {
          const selected = new Date(customDate);
          return assetDate.toDateString() === selected.toDateString();
        }

        switch (dateFilter) {
          case 'today':
            return assetDate.toDateString() === now.toDateString();
          case 'yesterday':
            return diffDays === 1;
          case 'last7':
            return diffDays <= 7;
          default:
            return true;
        }
      });
    }

    setFilteredAssets(filtered);
  };

  const handleTypeChange = (e) => {
    const type = e.target.value;
    setSelectedType(type);
    filterAssets(type, selectedDateFilter, customDate);
  };

  const handleDateFilterChange = (e) => {
    const dateFilter = e.target.value;
    setSelectedDateFilter(dateFilter);
    setCustomDate('');
    filterAssets(selectedType, dateFilter, '');
  };

  const handleCustomDateChange = (e) => {
    const date = e.target.value;
    setCustomDate(date);
    setSelectedDateFilter('');
    filterAssets(selectedType, '', date);
  };

  const handleExport = () => {
    const exportData = filteredAssets.map(asset => ({
      AssetCode: asset.assetCode || 'N/A',
      Type: asset.type || 'N/A',
      Name: asset.name || 'N/A',
      Configuration: asset.configuration || 'N/A',
      SerialNumber: asset.serialNumber || 'N/A',
      Location: asset.location || 'N/A',
      Status: asset.status || 'N/A',
      PartyName: asset.partyName || 'N/A',
      Price: asset.price ? `₹${asset.price}` : 'N/A',
      Warranty: asset.warranty || 'N/A',
      DateAdded: formatDate(asset.dateAdded),
      Invoice: asset.invoiceFile ? 'Attached' : 'N/A', // ✅ Excel note
    }));

    exportToExcel(exportData, 'AvailableAssets.xlsx');
  };

  const assetTypes = [...new Set(assets.map(a => a.type))];

  const formatDate = (dateString) => {
    if (!dateString || dateString === 'null') return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'N/A';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="asset-page">
      <h3 style={{ color: '#000', textAlign: 'center' }}>Available Assets</h3>

      {/* Filters */}
      <div className="filters">
        <div>
          <label>Type: </label>
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="all">All</option>
            {assetTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Date Filter: </label>
          <select value={selectedDateFilter} onChange={handleDateFilterChange}>
            <option value="">All Dates</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7">Last 7 Days</option>
          </select>
        </div>

        <div>
          <label>Or Pick Date: </label>
          <input type="date" value={customDate} onChange={handleCustomDateChange} />
        </div>

        <div>
          <button
            onClick={handleExport}
            style={{
              padding: '6px 12px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Export to Excel
          </button>
        </div>
      </div>

      <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#000' }}>
        Showing {filteredAssets.length} asset{filteredAssets.length !== 1 ? 's' : ''}.
      </div>

      {/* Table */}
      {filteredAssets.length === 0 ? (
        <p style={{ color: '#fff' }}>No assets available.</p>
      ) : (
        <table className='asset-table'>
          <thead>
            <tr>
              <th>Asset Code</th>
              <th>Type</th>
              <th>Name</th>
              <th>Configuration</th>
              <th>Serial Number</th>
              <th>Location</th>
              <th>Status</th>
              <th>Party Name</th>
              <th>Price (₹)</th>
              <th>Warranty</th>
              <th>Date Received</th>
              <th>Invoice</th> {/* ✅ new column */}
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((a, idx) => (
              <tr key={idx}>
                <td>{a.assetCode || 'N/A'}</td>
                <td>{a.type || 'N/A'}</td>
                <td>{a.name || 'N/A'}</td>
                <td>{a.configuration || 'N/A'}</td>
                <td>{a.serialNumber || 'N/A'}</td>
                <td>{a.location || 'N/A'}</td>
                <td>{a.status || 'N/A'}</td>
                <td>{a.partyName || 'N/A'}</td>
                <td>{a.price ? `₹${a.price}` : 'N/A'}</td>
                <td>{a.warranty || 'N/A'}</td>
                <td>{formatDate(a.dateAdded)}</td>
                <td>
                  {a.invoiceFile ? (
                    // <a
                    //   href={`http://localhost:5000/${a.invoiceFile}`}
                    //   target="_blank"
                    //   rel="noopener noreferrer"
                    //   style={{ color: '#2980b9', textDecoration: 'underline' }}
                    // >
                    //   View Invoice
                    // </a>
//                     <a
//   href={`http://localhost:5000/uploads/${a.invoiceFile}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   style={{ color: '#2980b9', textDecoration: 'underline' }}
// >
//   View Invoice
// </a>
<a
  href={`http://localhost:5000/uploads/invoice/${a.invoiceFile}`}
  target="_blank"
  rel="noopener noreferrer"
>
  View Invoice
</a>


                  ) : (
                    'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAssets;
