import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodAmountResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriodAmount({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodAmountResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    }
  )

  return response.data
}
