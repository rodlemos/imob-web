import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  h4 {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.orange_900};
  }

  p {
    font-weight: 400;
    margin-top: 0.4rem;
    font-size: 0.8rem;
  }
`;
