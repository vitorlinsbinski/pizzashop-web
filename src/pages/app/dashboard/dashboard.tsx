import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './month-revenue-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmount } from './month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-4 grid-cols-2">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>

        <div className="md:grid md:grid-cols-9 gap-4 flex flex-col">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
