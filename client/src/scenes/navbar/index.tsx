/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router-dom'
import PixIcon from "@mui/icons-material/Pix"

import FlexBetween from '@/components/FlexBetween'

type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme()
    const [selected, setSelected] = useState('dashboard')

    return (
        <FlexBetween mb=".25rem" p=".5rem 0rem" color={palette.grey[300]}>
            <FlexBetween gap=".35rem">
                <PixIcon sx={{ fontSize: "28px" }} />
                <Typography variant='h4' fontSize="16px">Finance-inator</Typography>
            </FlexBetween>
            <FlexBetween gap="2rem">
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link to='/' onClick={() => setSelected("dashboard")} style={{
                        color: selected === "dashboard" ? "inherit" : palette.grey[700], textDecoration: "inherit"
                    }}>Dashboard</Link>
                </Box>
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link to='/' onClick={() => setSelected("predictions")} style={{
                        color: selected === "predictions" ? "inherit" : palette.grey[700], textDecoration: "inherit"
                    }}>Predictions</Link>
                </Box>
            </FlexBetween>
        </FlexBetween >
    )
}

export default Navbar