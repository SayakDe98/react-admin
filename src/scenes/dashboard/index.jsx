import { Box, Button, IconButton, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import TrafficIcon from "@mui/icons-material/Traffic"
import LineChart from '../../components/LineChart';
import PieChart from '../../components/PieChart';
import GeographyChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
import Header from '../../components/Header';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
    <Box>
      <Button
      sx={{ background: colors.blueAccent[700],
      color: colors.grey[100],
    fontSize: "14px",
  fontWeight: "bold",
padding: "10px 20px"
}}>
  <DownloadOutlinedIcon sx={{ mr: "10px"}} />
  Download Reports
      </Button>
    </Box>
    </Box>
  )
}

export default Dashboard;