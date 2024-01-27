import RunningPerformance from 'src/components/RunningPerformance/RunningPerformance'

export const QUERY = gql`
  query FindRunningPerformanceById($id: Int!) {
    runningPerformance: runningPerformance(id: $id) {
      id
      event
      time
      place
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RunningPerformance not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ runningPerformance }) => {
  return <RunningPerformance runningPerformance={runningPerformance} />
}
