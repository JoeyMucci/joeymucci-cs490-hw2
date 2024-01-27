import { Metadata } from '@redwoodjs/web'

import EffortCell from 'src/components/EffortCell'

const EffortPage = ({ id }) => {
  return (
    <>
      <Metadata title="Effort" description="Effort page" />

      <EffortCell id={id} />
    </>
  )
}

export default EffortPage
