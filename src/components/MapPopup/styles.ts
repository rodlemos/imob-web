import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 0.6rem;

  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.orange_900};
  }

  header {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme.colors.green_300};
    }
  }
`;
