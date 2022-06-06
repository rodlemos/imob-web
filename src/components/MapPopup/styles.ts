import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

    span {
      font-size: 1rem;
      font-weight: 700;
    }

    h3 {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.green_300};
    }
  }

  .attributes-wrapper {
    display: flex;
    justify-content: space-between;
    margin-block: 1.5rem;
  }

  footer {
    display: flex;
    justify-content: center;
    gap: 4px;

    h3 {
      color: ${({ theme }) => theme.colors.green_500};
    }

    svg {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`;
