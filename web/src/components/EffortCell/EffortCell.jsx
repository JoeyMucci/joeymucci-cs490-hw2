import Effort from 'src/components/Effort'

export const QUERY = gql`
  query FindEffortQuery($id: Int!) {
    effort: runningPerformance(id: $id) {
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

export const Success = ({ effort }) => {
  return <Effort effort={effort} />
}
