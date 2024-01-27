import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_RUNNING_PERFORMANCE_MUTATION = gql`
  mutation DeleteRunningPerformanceMutation($id: Int!) {
    deleteRunningPerformance(id: $id) {
      id
    }
  }
`

const RunningPerformance = ({ runningPerformance }) => {
  const [deleteRunningPerformance] = useMutation(
    DELETE_RUNNING_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RunningPerformance deleted')
        navigate(routes.runningPerformances())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete runningPerformance ' + id + '?')
    ) {
      deleteRunningPerformance({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            RunningPerformance {runningPerformance.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{runningPerformance.id}</td>
            </tr>
            <tr>
              <th>Event</th>
              <td>{runningPerformance.event}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{runningPerformance.time}</td>
            </tr>
            <tr>
              <th>Place</th>
              <td>{runningPerformance.place}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(runningPerformance.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRunningPerformance({ id: runningPerformance.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(runningPerformance.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default RunningPerformance
