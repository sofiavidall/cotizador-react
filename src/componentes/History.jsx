import React, { useContext } from 'react'
import { userContext } from '../../context/UserContext'

const History = () => {
    const {userHistory} = useContext(userContext)
  return (
    <section className='history-container'>
        <h1 className='his'>Ver Historial</h1>
        <ul className='his'>
            {userHistory.map((item, i) => <li key={i}>{item.propertytype} - {item.location} | $ {item.total}</li>)}
        </ul>
    </section>
  )
}

export default History

