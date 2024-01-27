import { Link, routes } from '@redwoodjs/router'

const Effort = ({ effort }) => {
  return (
    <effort>
      <header>
        <h2>
          <Link to={routes.effort({ id: effort.id })}>{effort.event}</Link>
        </h2>
      </header>
      <div>Time: {effort.time}</div>
      <div>Place: {effort.place}</div>
    </effort>
  )
}

export default Effort
