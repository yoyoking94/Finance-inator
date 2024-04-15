/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy } from 'react'
const DashboardBox = lazy(() => import('@/components/DashboardBox'))

type Props = {}

const Row3 = (props: Props) => {
    return (
        <>
            <DashboardBox bgcolor="#fff" gridArea="g"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox>
        </>
    )
}

export default Row3