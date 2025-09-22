
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ViewDepartment.css';

// const ViewDepartment = () => {
//   const [departments, setDepartments] = useState([]);

//   // Fetch departments from backend
//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/departments'); // Update with your actual endpoint
//       setDepartments(response.data);
//     } catch (error) {
//       console.error('Failed to fetch departments:', error);
//     }
//   };

//   return (
//     <div className="view-container">
//       <h3>Departments List</h3>
//       {departments.length > 0 ? (
//         <table className="department-table">
//           <thead>
//             <tr>
//               <th>Sr.No</th>
//               <th>Department Name</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map((dept, index) => (
//               <tr key={dept._id}>
//                 <td>{index + 1}</td>
//                 <td>{dept.name}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No departments found.</p>
//       )}
//     </div>
//   );
// };

// export default ViewDepartment;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

// const ViewDepartment = () => {
//   const [departments, setDepartments] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState('');

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/departments');
//       setDepartments(res.data);
//     } catch (err) {
//       console.error('Error fetching departments:', err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this department?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/departments/${id}`);
//         fetchDepartments();
//       } catch (err) {
//         console.error('Error deleting department:', err);
//       }
//     }
//   };

//   const handleEdit = (id, name) => {
//     setEditingId(id);
//     setEditedName(name);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/departments/${id}`, { name: editedName });
//       setEditingId(null);
//       setEditedName('');
//       fetchDepartments();
//     } catch (err) {
//       console.error('Error updating department:', err);
//     }
//   };

//   return (
//     <div className="view-container">
//       <h3>Departments List</h3>
//       {departments.length > 0 ? (
//         <table className="department-table">
//           <thead>
//             <tr>
//               <th>Serial NO.</th>
//               <th>Department Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map((dept, index) => (
//               <tr key={dept._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {editingId === dept._id ? (
//                     <input
//                       value={editedName}
//                       onChange={(e) => setEditedName(e.target.value)}
//                       autoFocus
//                     />
//                   ) : (
//                     dept.name
//                   )}
//                 </td>
//                 <td>
//                   {editingId === dept._id ? (
//                     <>
//                       <FaSave
//                         onClick={() => handleUpdate(dept._id)}
//                         style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }}
//                       />
//                       <FaTimes
//                         onClick={() => setEditingId(null)}
//                         style={{ cursor: 'pointer', color: 'red' }}
//                       />
//                     </>
//                   ) : (
//                     <>
//                       <FaEdit
//                         onClick={() => handleEdit(dept._id, dept.name)}
//                         style={{ cursor: 'pointer', marginRight: '10px', color: '#3498db' }}
//                       />
//                       <FaTrash
//                         onClick={() => handleDelete(dept._id)}
//                         style={{ cursor: 'pointer', color: 'crimson' }}
//                       />
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No departments found.</p>
//       )}
//     </div>
//   );
// };

// export default ViewDepartment;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// const ViewDepartment = () => {
//   const [departments, setDepartments] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState('');

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/departments');
//       setDepartments(res.data);
//     } catch (err) {
//       console.error('Error fetching departments:', err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this department?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/departments/${id}`);
//         fetchDepartments();
//       } catch (err) {
//         console.error('Error deleting department:', err);
//       }
//     }
//   };

//   const handleEdit = (id, name) => {
//     setEditingId(id);
//     setEditedName(name);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/departments/${id}`, { name: editedName });
//       setEditingId(null);
//       setEditedName('');
//       fetchDepartments();
//     } catch (err) {
//       console.error('Error updating department:', err);
//     }
//   };

//   const exportToExcel = () => {
//     const worksheetData = departments.map((dept, index) => ({
//       'S.No.': index + 1,
//       'Department Name': dept.name,
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(worksheetData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Departments');

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: 'xlsx',
//       type: 'array',
//     });

//     const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
//     saveAs(data, 'Departments_List.xlsx');
//   };

//   return (
//     <div className="view-container">
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h3>Departments List</h3>
//         <button
//           onClick={exportToExcel}
//           style={{
//             padding: '6px 12px',
//             backgroundColor: '#2980b9',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             width:'auto',
//           }}
//         >
//           Export to Excel
//         </button>
//       </div>

//       {departments.length > 0 ? (
//         <table className="department-table">
//           <thead>
//             <tr>
//               <th>Serial NO.</th>
//               <th>Department Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map((dept, index) => (
//               <tr key={dept._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {editingId === dept._id ? (
//                     <input
//                       value={editedName}
//                       onChange={(e) => setEditedName(e.target.value)}
//                       autoFocus
//                     />
//                   ) : (
//                     dept.name
//                   )}
//                 </td>
//                 <td>
//                   {editingId === dept._id ? (
//                     <>
//                       <FaSave
//                         onClick={() => handleUpdate(dept._id)}
//                         style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }}
//                       />
//                       <FaTimes
//                         onClick={() => setEditingId(null)}
//                         style={{ cursor: 'pointer', color: '#555' }}
//                       />
//                     </>
//                   ) : (
//                     <>
//                       <FaEdit
//                         onClick={() => handleEdit(dept._id, dept.name)}
//                         style={{ cursor: 'pointer', marginRight: '10px', color: '#555' }}
//                       />
//                       <FaTrash
//                         onClick={() => handleDelete(dept._id)}
//                         style={{ cursor: 'pointer', color: '#555' }}
//                       />
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No departments found.</p>
//       )}
//     </div>
//   );
// };

// export default ViewDepartment;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
 

const ViewDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/departments');
      setDepartments(res.data);
    } catch (err) {
      console.error('Error fetching departments:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      try {
        await axios.delete(`http://localhost:5000/api/departments/${id}`);
        fetchDepartments();
      } catch (err) {
        console.error('Error deleting department:', err);
      }
    }
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setEditedName(name);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/departments/${id}`, { name: editedName });
      setEditingId(null);
      setEditedName('');
      fetchDepartments();
    } catch (err) {
      console.error('Error updating department:', err);
    }
  };

  const exportToExcel = () => {
    const worksheetData = departments.map((dept, index) => ({
      'S.No.': index + 1,
      'Department Name': dept.name,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Departments');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'Departments_List.xlsx');
  };

  return (
    <div className="asset-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ color: '#000' }}>Departments List</h3>
        <button
          onClick={exportToExcel}
          style={{
            padding: '6px 12px',
            backgroundColor: '#2980b9',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width:'auto',
          }}
        >
          Export to Excel
        </button>
      </div>

      {departments.length > 0 ? (
        <table className="asset-table" style={{ marginTop: '1.5rem' }}>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Department Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr key={dept._id}>
                <td>{index + 1}</td>
                <td>
                  {editingId === dept._id ? (
                    <input
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      autoFocus
                    />
                  ) : (
                    dept.name
                  )}
                </td>
                <td>
                  {editingId === dept._id ? (
                    <>
                      <FaSave
                        onClick={() => handleUpdate(dept._id)}
                        style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }}
                      />
                      <FaTimes
                        onClick={() => setEditingId(null)}
                        style={{ cursor: 'pointer', color: '#555' }}
                      />
                    </>
                  ) : (
                    <>
                      <FaEdit
                        onClick={() => handleEdit(dept._id, dept.name)}
                        style={{ cursor: 'pointer', marginRight: '10px', color: '#555' }}
                      />
                      <FaTrash
                        onClick={() => handleDelete(dept._id)}
                        style={{ cursor: 'pointer', color: '#555' }}
                      />
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ color: '#fff', marginTop: '1rem' }}>No departments found.</p>
      )}
    </div>
  );
};

export default ViewDepartment;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';
// // import './ViewDepartment.css';
// // import'./sharedLayout.css';

// const ViewDepartment = () => {
//   const [departments, setDepartments] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState('');

//   useEffect(() => {
//     fetchDepartments();
//   }, []);

//   const fetchDepartments = async () => {
//     try {
//       const res = await axios.get('https://it-asset-management-u60k.onrender.com/api/departments');
//       setDepartments(res.data);
//     } catch (err) {
//       console.error('Error fetching departments:', err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this department?')) {
//       try {
//         await axios.delete(`https://it-asset-management-u60k.onrender.com/api/departments/${id}`);
//         fetchDepartments();
//       } catch (err) {
//         console.error('Error deleting department:', err);
//       }
//     }
//   };

//   const handleEdit = (id, name) => {
//     setEditingId(id);
//     setEditedName(name);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`https://it-asset-management-u60k.onrender.com/api/departments/${id}`, { name: editedName });
//       setEditingId(null);
//       setEditedName('');
//       fetchDepartments();
//     } catch (err) {
//       console.error('Error updating department:', err);
//     }
//   };

//   const exportToExcel = () => {
//     const worksheetData = departments.map((dept, index) => ({
//       'S.No.': index + 1,
//       'Department Name': dept.name,
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(worksheetData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Departments');

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: 'xlsx',
//       type: 'array',
//     });

//     const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
//     saveAs(data, 'Departments_List.xlsx');
//   };

//   return (
   
//     <div className="asset-page">
//       <div className="department-header">
//         <h3 className="center-heading">Departments List</h3>
//         <button className="export-btn" onClick={exportToExcel}>Export to Excel</button>
//     <div className="view-container">
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <h3>Departments List</h3>
//         <button
//           onClick={exportToExcel}
//           style={{
//             padding: '6px 12px',
//             backgroundColor: '#2980b9',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer',
//             width: 'auto',
//           }}
//         >
//           Export to Excel
//         </button>

//       </div>

//       {departments.length > 0 ? (
//         <table className="asset-table white-table">
//           <thead>
//             <tr>
//               <th>Serial No.</th>
//               <th>Department Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {departments.map((dept, index) => (
//               <tr key={dept._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   {editingId === dept._id ? (
//                     <input
//                       value={editedName}
//                       onChange={(e) => setEditedName(e.target.value)}
//                       autoFocus
//                     />
//                   ) : (
//                     dept.name
//                   )}
//                 </td>
//                 <td>
//                   {editingId === dept._id ? (
//                     <>
//                       <FaSave onClick={() => handleUpdate(dept._id)} className="edit-icon" style={{ color: 'green' }} />
//                       <FaTimes onClick={() => setEditingId(null)} className="edit-icon" />
//                     </>
//                   ) : (
//                     <>
//                       <FaEdit onClick={() => handleEdit(dept._id, dept.name)} className="edit-icon" />
//                       <FaTrash onClick={() => handleDelete(dept._id)} className="delete-icon" />
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p className="no-data-text">No departments found.</p>
//       )}
//     </div>
//   )};


// export default ViewDepartment; 

// import React, { useEffect, useState } from 'react';
// import avatar from '/assets/avtar.png';
// import logo from '/assets/oc.jpg'; // For loading screen
// import axios from 'axios';
// import {
//   PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';
// import { motion } from 'framer-motion';
// import './Dashboard.css';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF5E7E'];

// const Dashboard = () => {
//   const [assetStats, setAssetStats] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totalEmployees, setTotalEmployees] = useState(0); // ✅ You were using this but never declared it

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     // Fetch employees
//     axios.get('https://it-asset-management-u60k.onrender.com/api/employees')
//       .then(res => {
//         if (Array.isArray(res.data)) {
//           setTotalEmployees(res.data.length);
//         }
//       })
//       .catch(err => console.error("Failed to fetch employees:", err));

//     // Fetch assets
//     axios.get('https://it-asset-management-u60k.onrender.com/api/assets')
//       .then(res => {
//         generateAssetStats(res.data);
//       })
//       .catch(console.error)
//       .finally(() => setTimeout(() => setLoading(false), 1000));
//   }, []);

//   const generateAssetStats = (assetList) => {
//     const counts = {};
//     assetList.forEach(asset => {
//       const type = asset.type || 'Unknown';
//       counts[type] = (counts[type] || 0) + 1;
//     });

//     const stats = Object.entries(counts).map(([type, count]) => ({
//       name: type,
//       value: count
//     }));

//     setAssetStats(stats);
//   };

//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <img src={logo} alt="Logo" className="loading-logo" />
//         <div className="loader-circle" />
//         <p>Loading dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard-container">
//       <div className="background-animation"></div>

//       {/* Welcome Card */}
//       <motion.div
//         className="card welcome-card"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <img src={avatar} alt="Avatar" className="avatar" />
//         <div>
//           <h3>Welcome, {user?.name || 'User'}</h3>
//           <p>Email: {user?.email || 'N/A'}</p>
//           <p>Total Employees: {totalEmployees}</p>
//         </div>
//       </motion.div>

//       {/* Pie Chart */}
//       <motion.div
//         className="card chart-card"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h3>Total Assets by Type</h3>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={assetStats}
//               dataKey="value"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={120}
//               label
//             >
//               {assetStats.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </motion.div>
//     </div>
//   );
// };

// export default Dashboard;

