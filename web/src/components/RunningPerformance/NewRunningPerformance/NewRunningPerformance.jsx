import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RunningPerformanceForm from 'src/components/RunningPerformance/RunningPerformanceForm'

const CREATE_RUNNING_PERFORMANCE_MUTATION = gql`
  mutation CreateRunningPerformanceMutation(
    $input: CreateRunningPerformanceInput!
  ) {
    createRunningPerformance(input: $input) {
      id
    }
  }
`

const NewRunningPerformance = () => {
  const [createRunningPerformance, { loading, error }] = useMutation(
    CREATE_RUNNING_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RunningPerformance created')
        navigate(routes.runningPerformances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRunningPerformance({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New RunningPerformance
        </h2>
      </header>
      <div className="rw-segment-main">
        <RunningPerformanceForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewRunningPerformance
