import { useState } from 'react'
import { addExtinguisher } from '../../../context/actions/extinguisher'
import { useContext } from 'react'
import { appContext } from '../../../context/store/appContext'
import { hideModal } from '../../../context/actions/ui'

export const NewExtinguisherForm = () => {
  const appCtx = useContext(appContext)
  const { extinguishersDispatch, modalDispatch } = appCtx
  const [producerState, setProducer] = useState('')
  const [typeState, setType] = useState('')
  const [agentState, setAgent] = useState('Water')
  const [prodDateState, setProdDate] = useState('')
  const [inspDateState, setInspDate] = useState('')
  const [inspDateCheckbox, setInspDateCheckbox] = useState(false)

  const producerChangeHandler = (e) => {
    setProducer(e.target.value)
  }
  const typeChangeHandler = (e) => {
    setType(e.target.value)
  }
  const agentChangeHandler = (e) => {
    setAgent(e.target.value)
  }
  const prodDateChangeHandler = (e) => {
    setProdDate(e.target.value)
  }
  const inspDateChangeHandler = (e) => {
    setInspDate(e.target.value)
  }

  const addExtinguisherHandler = (e) => {
    e.preventDefault()
    const data = [
      producerState,
      typeState,
      agentState,
      prodDateState,
      inspDateCheckbox && inspDateState,
    ]
    if (data.some((element) => element === undefined)) return
    const extinguisher = {
      producerState,
      typeState,
      agentState,
      prodDateState,
      inspDateState,
    }
    console.log(extinguisher)

    extinguishersDispatch(addExtinguisher(extinguisher))
    modalDispatch(hideModal())
  }

  return (
    <div className='modal-content'>
      <form onSubmit={addExtinguisherHandler}>
        <div className='point'>
          <label htmlFor='producer'>
            <b>Producer: </b>
          </label>
          <input
            id='producer'
            type='text'
            value={producerState}
            onChange={producerChangeHandler}
            required
          ></input>
        </div>

        <div className='point'>
          <label htmlFor='type'>
            <b>Type: </b>
          </label>
          <input
            id='type'
            type='text'
            value={typeState}
            onChange={typeChangeHandler}
            required
          ></input>
        </div>
        <div className='point'>
          <label htmlFor='agent'>
            <b>Extinguishing agent: </b>
          </label>
          <select
            id='agent'
            type='text'
            value={agentState}
            onChange={agentChangeHandler}
            required
          >
            <option>Water</option>
            <option>AFFF foam</option>
            <option>CO2</option>
            <option>ABC powder</option>
          </select>
        </div>
        <div className='point'>
          <label htmlFor='production-date'>
            <b>Production date: </b>
          </label>
          <input
            id='production-date'
            type='date'
            value={prodDateState}
            onChange={prodDateChangeHandler}
            required
          ></input>
        </div>
        <div className='point'>
          <label htmlFor='inspection-date'>
            <input
              type='checkbox'
              checked={inspDateCheckbox}
              onChange={() => setInspDateCheckbox((prev) => !prev)}
            ></input>
            <b>Inspection date</b>
          </label>
          <input
            id='inspection-date'
            type='date'
            value={inspDateState}
            required={inspDateCheckbox}
            disabled={!inspDateCheckbox}
            onChange={inspDateChangeHandler}
          ></input>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
