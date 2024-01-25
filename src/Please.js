import React from 'react'
import RunAwayButton from './RunAwayButton'
const Please = ({lesgoo}) => {
    const buttonStyle={'border':'none','color':'blue',width:'200px'};
  return (
    <form className='please' onSubmit={lesgoo}>
        <h1>Will you go on a date with me?</h1>
        <img src='https://media.tenor.com/btTaqabFAFIAAAAi/white-bear.gif'/>
        <button className='button-style' >Yes!</button>
        <RunAwayButton/>
    </form>
  )
}

export default Please