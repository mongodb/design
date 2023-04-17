import {
  LiveExampleActionType,
  LiveExampleState,
} from './LiveExampleState.types';

export function invalidActionWarning(
  state: LiveExampleState,
  action: LiveExampleActionType,
) {
  console.warn(`Invalid action ${action} from state ${state}`);
}
