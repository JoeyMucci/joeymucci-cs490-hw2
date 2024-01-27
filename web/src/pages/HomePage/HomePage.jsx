import { Metadata } from '@redwoodjs/web'

import EffortsCell from 'src/components/EffortsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <p>This is the home page. Pretty nifty, eh?</p>
      <p>
        Here are some running performances. I changed it from posts in the
        tutorial because posts are boring :P
      </p>
      <EffortsCell />
    </>
  )
}

export default HomePage
