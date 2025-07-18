
// import React, { useEffect, useState } from 'react';
// import avatar from '../assets/avtar.png';
// import axios from 'axios';
// import {
//   PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';

// import './Dashboard.css';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF5E7E'];

// const Dashboard = () => {
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [assetStats, setAssetStats] = useState([]);

//   // 👇 Get user data from localStorage
//   const user = JSON.parse(localStorage.getItem('user'));
// console.log('User from localStorage:', user);


//   useEffect(() => {
//     axios.get('http://localhost:5000/api/employees')
//       .then(res => {
//         if (Array.isArray(res.data)) {
//           setTotalEmployees(res.data.length);
//         }
//       })
//       .catch(err => console.error("Failed to fetch employees:", err));

//     axios.get('http://localhost:5000/api/assets')
//       .then(res => {
//         generateAssetStats(res.data);
//       })
//       .catch(err => console.error("Failed to fetch assets:", err));
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

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Dashboard</h2>

//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         {/* Welcome Card */}
//         <div style={{
//           flex: 1,
//           padding: '20px',
//           backgroundColor: '#e0ffe0',
//           borderRadius: '10px',
//           display: 'flex',
//           alignItems: 'center'
//         }}>
//           <img src={avatar} alt="Avatar" style={{ width: '80px', borderRadius: '50%', marginRight: '20px' }} />
//           <div>
//             <h3>Welcome, {user?.name || 'User'}</h3>
//             <p>Email: {user?.email || 'N/A'}</p>
//           </div>
//         </div>

//         {/* Total Employees Card */}
//         <div style={{
//           flex: 1,
//           padding: '20px',
//           backgroundColor: '#e0ffe0',
//           borderRadius: '10px',
//           textAlign: 'center'
//         }}>
//           <h3>Total Employees</h3>
//           <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalEmployees}</p>
//         </div>
//       </div>

//       {/* Pie Chart */}
//       <div style={{ marginTop: '40px', width: '100%', height: '400px' }}>
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
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import avatar from '../assets/avtar.png';
// import axios from 'axios';
// import {
//   PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
// } from 'recharts';
// import './Dashboard.css'; // ← Use updated styles
// import { motion } from 'framer-motion'; // ✅ Add this (install if needed)

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF5E7E'];

// const Dashboard = () => {
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [assetStats, setAssetStats] = useState([]);

//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/employees')
//       .then(res => {
//         if (Array.isArray(res.data)) {
//           setTotalEmployees(res.data.length);
//         }
//       })
//       .catch(err => console.error("Failed to fetch employees:", err));

//     axios.get('http://localhost:5000/api/assets')
//       .then(res => {
//         generateAssetStats(res.data);
//       })
//       .catch(err => console.error("Failed to fetch assets:", err));
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

//   return (
//     <div className="dashboard-container">
//       {/* Welcome Card */}
//       <motion.div
//         className="card welcome-card"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <img src={avatar} alt="Avatar" className="avatar" />
//         <div>
//           <h3>Welcome, {user?.name || 'User'}</h3>
//           <p>Email: {user?.email || 'N/A'}</p>
//         </div>
//       </motion.div>

//       {/* Total Employees Card */}
//       <motion.div
//         className="card"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <div>
//           <h3>Total Employees</h3>
//           <p className="value">{totalEmployees}</p>
//         </div>
//       </motion.div>

//       {/* Asset Pie Chart */}
//       <motion.div
//         className="card"
//         style={{ width: '100%', height: '420px' }}
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
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



import React, { useEffect, useState } from 'react';
import avatar from '/assets/avtar.png';
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './Dashboard.css';
import { motion } from 'framer-motion';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF', '#FF5E7E'];

const Dashboard = () => {
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [assetStats, setAssetStats] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get('https://asset-main-2.onrender.com/api/employees')
      .then(res => {
        if (Array.isArray(res.data)) {
          setTotalEmployees(res.data.length);
        }
      })
      .catch(err => console.error("Failed to fetch employees:", err));

    axios.get('https://asset-main-2.onrender.com/api/assets')
      .then(res => {
        generateAssetStats(res.data);
      })
      .catch(err => console.error("Failed to fetch assets:", err));
  }, []);

  const generateAssetStats = (assetList) => {
    const counts = {};
    assetList.forEach(asset => {
      const type = asset.type || 'Unknown';
      counts[type] = (counts[type] || 0) + 1;
    });

    const stats = Object.entries(counts).map(([type, count]) => ({
      name: type,
      value: count
    }));

    setAssetStats(stats);
  };

  return (
    <div className="dashboard-container">
      {/* Welcome Card */}
      <motion.div
        className="card welcome-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={avatar} alt="Avatar" className="avatar" />
        <div>
          <h3>Welcome, {user?.name || 'User'}</h3>
          <p>Email: {user?.email || 'N/A'}</p>
        </div>
      </motion.div>

      {/* Total Employees Card */}
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3>Total Employees</h3>
          <p className="value">{totalEmployees}</p>
        </div>
      </motion.div>

      {/* Pie Chart */}
      <motion.div
        className="card chart-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3>Total Assets by Type</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={assetStats}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {assetStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default Dashboard;


