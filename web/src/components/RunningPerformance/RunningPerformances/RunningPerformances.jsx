import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/RunningPerformance/RunningPerformancesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_RUNNING_PERFORMANCE_MUTATION = gql`
  mutation DeleteRunningPerformanceMutation($id: Int!) {
    deleteRunningPerformance(id: $id) {
      id
    }
  }
`

const RunningPerformancesList = ({ runningPerformances }) => {
  const [deleteRunningPerformance] = useMutation(
    DELETE_RUNNING_PERFORMANCE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RunningPerformance deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Event</th>
            <th>Time</th>
            <th>Place</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {runningPerformances.map((runningPerformance) => (
            <tr key={runningPerformance.id}>
              <td>{truncate(runningPerformance.id)}</td>
              <td>{truncate(runningPerformance.event)}</td>
              <td>{truncate(runningPerformance.time)}</td>
              <td>{truncate(runningPerformance.place)}</td>
              <td>{timeTag(runningPerformance.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.runningPerformance({
                      id: runningPerformance.id,
                    })}
                    title={
                      'Show runningPerformance ' +
                      runningPerformance.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRunningPerformance({
                      id: runningPerformance.id,
                    })}
                    title={'Edit runningPerformance ' + runningPerformance.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete runningPerformance ' + runningPerformance.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(runningPerformance.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RunningPerformancesList
