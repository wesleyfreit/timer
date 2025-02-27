import styled from 'styled-components';

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-height: 700px) or (max-width: 700px) {
    font-size: 5rem;
    line-height: 3rem;
  }

  @media (max-height: 500px) or (max-width: 500px) {
    font-size: 4.25rem;
    line-height: 2.5rem;
    gap: 0.5rem;
  }
`;

export const CountDownSeparator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-height: 700px) or (max-width: 700px) {
    width: 2rem;
  }

  @media (max-height: 500px) or (max-width: 500px) {
    width: 1rem;
  }
`;
