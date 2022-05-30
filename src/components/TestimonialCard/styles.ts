import styled from 'styled-components';

export const Container = styled.article`
  max-width: 400px;
  margin-inline: auto;
  display: flex;
  padding: 2rem 2rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    margin-top: 1rem;
    line-height: 1.5;
    text-align: center;
  }

  span {
    font-weight: 700;
    font-size: 0.8rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.orange_900};
  }
`;
