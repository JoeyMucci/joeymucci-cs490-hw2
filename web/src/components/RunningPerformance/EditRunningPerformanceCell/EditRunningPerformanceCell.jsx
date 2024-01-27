import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RunningPerformanceForm from 'src/components/RunningPerformance/RunningPerformanceForm'

export const QUERY = gql`
  query EditRunningPerformanceById($id: Int!) {
    runningPerformance: runningPerformance(id: $id) {
      id
      event
      time
      place
      createdAt
    }
  }
`
const UPDATE_RUNNING_PERFORMANCE_MUTATION = gql`
  mutation UpdateRunningPerformanceMutation(
    $id: Int!
    $input: UpdateRunningPerformanceInput!
  ) {
    updateRunningPerformance(id: $id, input: $input) {
      id
      event
      time
      place
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ runningPerformance }) => {
  const [updateRunningPerformance, { loading, error }] = useMutation(
    UPDATE_RUNNING_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RunningPerformance updated')
        navigate(routes.runningPerformances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRunningPerformance({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RunningPerformance {runningPerformance?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RunningPerformanceForm
          runningPerformance={runningPerformance}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
