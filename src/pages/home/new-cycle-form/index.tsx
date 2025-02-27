import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../contexts/cycles-context';
import type { NewCycleFormData } from '../index';
import {
  ErrorContainer,
  FormContainer,
  FormFieldsContainer,
  MinutesAmountInput,
  TaskInput,
} from './styles';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);

  const {
    register,
    formState: { errors },
  } = useFormContext<NewCycleFormData>();

  return (
    <FormContainer>
      <FormFieldsContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
          id="task"
          type="text"
          {...register('task')}
          placeholder="Dê um nome para o seu projeto"
          disabled={!!activeCycle}
          list="task-suggestions"
        />

        <datalist id="task-suggestions" />

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          {...register('minutesAmount', {
            valueAsNumber: true,
          })}
          placeholder="00"
          disabled={!!activeCycle}
          step={5}
          min={5}
          max={60}
        />

        <span>minutos.</span>
      </FormFieldsContainer>

      <ErrorContainer>
        {errors?.task && !errors?.minutesAmount && <span>{errors.task.message}</span>}
        {errors?.minutesAmount && <span>{errors.minutesAmount.message}</span>}
      </ErrorContainer>
    </FormContainer>
  );
}
