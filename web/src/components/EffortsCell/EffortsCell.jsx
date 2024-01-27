import Effort from 'src/components/Effort'

export const QUERY = gql`
  query EffortsQuery {
    efforts: runningPerformances {
      id
      event
      time
      place
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ efforts }) => {
  return (
    <>
      {efforts.map((effort) => (
        <Effort key={effort.id} effort={effort} />
      ))}
    </>
  )
}
