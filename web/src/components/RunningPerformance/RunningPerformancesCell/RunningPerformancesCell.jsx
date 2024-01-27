import { Link, routes } from '@redwoodjs/router'

import RunningPerformances from 'src/components/RunningPerformance/RunningPerformances'

export const QUERY = gql`
  query FindRunningPerformances {
    runningPerformances {
      id
      event
      time
      place
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No runningPerformances yet. '}
      <Link to={routes.newRunningPerformance()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ runningPerformances }) => {
  return <RunningPerformances runningPerformances={runningPerformances} />
}
