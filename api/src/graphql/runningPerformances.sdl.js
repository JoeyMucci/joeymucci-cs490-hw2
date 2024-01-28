export const schema = gql`
  type RunningPerformance {
    id: Int!
    event: String!
    time: String!
    place: Int!
    createdAt: DateTime!
  }

  type Query {
    runningPerformances: [RunningPerformance!]! @skipAuth
    runningPerformance(id: Int!): RunningPerformance @skipAuth
  }

  input CreateRunningPerformanceInput {
    event: String!
    time: String!
    place: Int!
  }

  input UpdateRunningPerformanceInput {
    event: String
    time: String
    place: Int
  }

  type Mutation {
    createRunningPerformance(
      input: CreateRunningPerformanceInput!
    ): RunningPerformance! @requireAuth
    updateRunningPerformance(
      id: Int!
      input: UpdateRunningPerformanceInput!
    ): RunningPerformance! @requireAuth
    deleteRunningPerformance(id: Int!): RunningPerformance! @requireAuth
  }
`
