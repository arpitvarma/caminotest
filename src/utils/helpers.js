
// RETURNS OBJECT WITH RANDOM DATA
export const getRandomData = () => {

  const hoodiePrice = 74
  const fittedCapPrice = 69.5
  const braceletPrice = 39.05

  let hoodieWeekOrders = []
  let fittedCapWeekOrders = []
  let braceletWeekOrders = []

  let totalWeekOrders = 0
  let completedOrders = 0
  let totalSales = 0

  const add = (a,b) => a+b

  //set random data for the sales of the week
  for (let i=0; i<7; i++) {
    hoodieWeekOrders[i]=Math.floor(Math.random() * 11)
    fittedCapWeekOrders[i]=Math.floor(Math.random() * 11)
    braceletWeekOrders[i]=Math.floor(Math.random() * 11)
    totalWeekOrders +=   hoodieWeekOrders[i] + fittedCapWeekOrders[i]+ braceletWeekOrders[i]
    totalSales += (hoodieWeekOrders[i]*(hoodiePrice)) + (fittedCapWeekOrders[i]*(fittedCapPrice))+(braceletWeekOrders[i]*(braceletPrice))
  }

  //sets random completed orders
  completedOrders = Math.floor(Math.random() * totalWeekOrders)

  //formats total sales
  totalSales = parseFloat(totalSales.toFixed(2),10);

  //sums up the total sales for each item
  const totalHoodieOrders = hoodieWeekOrders.reduce(add)
  const totalFittedCapOrders = fittedCapWeekOrders.reduce(add)
  const totalBraceletOrders = braceletWeekOrders.reduce(add)

  //calculates percentages for progress bars
  const hoodieOrderPercent = parseInt((totalHoodieOrders/totalWeekOrders) * 100, 10)
  const fittedCapOrderPercent = parseInt((totalFittedCapOrders/totalWeekOrders) * 100, 10)
  const braceletOrderPercent = parseInt((totalBraceletOrders/totalWeekOrders) * 100, 10)
  const completeOrderPercent = parseInt((completedOrders/totalWeekOrders) * 100, 10)

  return {
    hoodieWeekOrders,
    fittedCapWeekOrders,
    braceletWeekOrders,
    totalWeekOrders,
    completedOrders,
    totalSales,
    hoodieOrderPercent,
    fittedCapOrderPercent,
    braceletOrderPercent,
    completeOrderPercent
  }
}
