/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
import { useGetKpisQuery } from '@/state/api'
import { lazy } from 'react'
const DashboardBox = lazy(() => import('@/components/DashboardBox'))

type Props = {}

const Row1 = ({ }: Props) => {

    const { data } = useGetKpisQuery()
    console.log("data : ", data);

    return (
        <>
            <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
            <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
        </>
    )
}

export default Row1