import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

    @media (max-height: 700px) or (max-width: 700px) {
      gap: 2rem;
    }
  }
`;

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  transition: all 100ms;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${({ theme }) => theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`;
