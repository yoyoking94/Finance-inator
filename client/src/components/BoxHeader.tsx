import React, { lazy } from 'react'
const FlexBetween = lazy(() => import('./FlexBetween'))

import { Box, Typography, useTheme } from '@mui/material'

type Props = { title: string, sideText: string, subtitle?: string, icon?: React.ReactNode }

const BoxHeader = ({ title, sideText, subtitle, icon }: Props) => {
    const { palette } = useTheme()
    return (
        <FlexBetween color={palette.grey[400]} margin='1.5rem 1rem 0 1rem'>
            <FlexBetween>
                {icon}
                <Box width='100%'>
                    <Typography variant='h4' mb='-.1rem'>{title}</Typography>
                    <Typography variant='h6' mb='-.1rem'>{subtitle}</Typography>
                </Box>
            </FlexBetween>
            <Typography variant='h5' fontWeight='700' color={palette.secondary[500]}>{sideText}</Typography>
        </FlexBetween>
    )
}

export default BoxHeader