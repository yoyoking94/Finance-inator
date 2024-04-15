/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy } from 'react'
const DashboardBox = lazy(() => import('@/components/DashboardBox'))

type Props = {}

const Row2 = (props: Props) => {
    return (
        <>
            <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
        </>
    )
}

export default Row2