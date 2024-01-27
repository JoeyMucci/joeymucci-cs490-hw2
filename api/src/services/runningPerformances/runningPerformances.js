import { db } from 'src/lib/db'

export const runningPerformances = () => {
  return db.runningPerformance.findMany()
}

export const runningPerformance = ({ id }) => {
  return db.runningPerformance.findUnique({
    where: { id },
  })
}

export const createRunningPerformance = ({ input }) => {
  return db.runningPerformance.create({
    data: input,
  })
}

export const updateRunningPerformance = ({ id, input }) => {
  return db.runningPerformance.update({
    data: input,
    where: { id },
  })
}

export const deleteRunningPerformance = ({ id }) => {
  return db.runningPerformance.delete({
    where: { id },
  })
}
