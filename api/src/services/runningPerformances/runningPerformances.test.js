import {
  runningPerformances,
  runningPerformance,
  createRunningPerformance,
  updateRunningPerformance,
  deleteRunningPerformance,
} from './runningPerformances'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('runningPerformances', () => {
  scenario('returns all runningPerformances', async (scenario) => {
    const result = await runningPerformances()

    expect(result.length).toEqual(
      Object.keys(scenario.runningPerformance).length
    )
  })

  scenario('returns a single runningPerformance', async (scenario) => {
    const result = await runningPerformance({
      id: scenario.runningPerformance.one.id,
    })

    expect(result).toEqual(scenario.runningPerformance.one)
  })

  scenario('creates a runningPerformance', async () => {
    const result = await createRunningPerformance({
      input: { event: 'String', time: 'String', place: 1923487 },
    })

    expect(result.event).toEqual('String')
    expect(result.time).toEqual('String')
    expect(result.place).toEqual(1923487)
  })

  scenario('updates a runningPerformance', async (scenario) => {
    const original = await runningPerformance({
      id: scenario.runningPerformance.one.id,
    })
    const result = await updateRunningPerformance({
      id: original.id,
      input: { event: 'String2' },
    })

    expect(result.event).toEqual('String2')
  })

  scenario('deletes a runningPerformance', async (scenario) => {
    const original = await deleteRunningPerformance({
      id: scenario.runningPerformance.one.id,
    })
    const result = await runningPerformance({ id: original.id })

    expect(result).toEqual(null)
  })
})
