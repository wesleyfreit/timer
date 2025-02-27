import type { WritableDraft } from 'immer';
import { produce } from 'immer';
import type { Cycle } from '../../contexts/cycles-context';
import { ActionTypes } from './actions';

interface State {
  cycles: Cycle[];
  activeCycleId: string | null;
}

interface Action {
  type: ActionTypes;
  payload?: {
    newCycle: WritableDraft<Cycle>;
  };
}

export function cyclesReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      const newCycle = action?.payload?.newCycle;

      if (!newCycle) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cycles.push(newCycle);
        draft.activeCycleId = newCycle.id;
      });
    }

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }

    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      );

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }

    default:
      return state;
  }
}
