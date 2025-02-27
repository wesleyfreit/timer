import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  overflow: auto;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;
