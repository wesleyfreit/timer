import { zodResolver } from '@hookform/resolvers/zod';
import { Hand, Play } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { UseCycles } from '../../hooks/use-cycles';
import { CountDown } from './countdown';
import { NewCycleForm } from './new-cycle-form';
import { HomeContainer, StartCountDownButton, StopCountDownButton } from './styles';

const newCycleSchema = z.object({
  task: z
    .string({ required_error: 'O nome da tarefa precisa ser preenchido' })
    .min(1, 'Informe o nome da tarefa'),
  minutesAmount: z
    .number({
      invalid_type_error: 'O valor do ciclo precisa ser preenchido',
    })
    .min(5, 'O ciclo precisa ter no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ter no máximo 60 minutos'),
});

export type NewCycleFormData = z.infer<typeof newCycleSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = UseCycles();

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: undefined,
    },
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }
  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountDownButton onClick={interruptCurrentCycle} type="button">
            <Hand />
            Interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton
            disabled={isSubmitDisabled || Object.keys(errors).length > 0}
            type="submit"
          >
            <Play />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  );
}
