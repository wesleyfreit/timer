import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const FormFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: inherit;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  transition: all 100ms;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
    text-align: center;
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;

export const ErrorContainer = styled.div`
  color: ${({ theme }) => theme['red-500']};
`;
