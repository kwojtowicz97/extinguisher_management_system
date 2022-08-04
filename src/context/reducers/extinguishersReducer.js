import {
  ADD_EXTINGUISHER,
  SET_IS_USED,
  SET_IS_UNUSED,
  MAKE_INSPECTION,
} from '../actions/extinguisher'
import { v4 as newID } from 'uuid'

const extinguishersReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_EXTINGUISHER:
      const {
        producerState,
        typeState,
        agentState,
        prodDateState,
        inspDateState,
      } = payload

      const extinguisher = {
        id: newID(),
        producer: producerState,
        agent: agentState,
        type: typeState,
        productionDate: prodDateState,
        inspectionDate: inspDateState,
        isUsed: false,
      }
      localStorage.setItem('ex', JSON.stringify([extinguisher, ...state]))
      return [extinguisher, ...state]
    case SET_IS_USED:
      const id = payload
      const extinguiser = state.find((ex) => ex.id === id)
      extinguiser.isUsed = true
      localStorage.setItem('ex', JSON.stringify(state))
      return new Array(...state)
    case SET_IS_UNUSED:
      const eextinguiser = state.find((ex) => ex.id === payload)
      eextinguiser.isUsed = false
      localStorage.setItem('ex', JSON.stringify(state))
      return new Array(...state)

    case MAKE_INSPECTION:
      const extinguisherToInspect = state.find(
        (ex) => ex === payload.extinguisher
      )
      extinguisherToInspect.inspectionDate = payload.date
      localStorage.setItem('ex', JSON.stringify(new Array(...state)))
      return new Array(...state)
    default:
      throw new Error('[extinguishers] invalid action')
  }
}

export default extinguishersReducer
