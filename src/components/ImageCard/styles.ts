import styled from 'styled-components';

export const Container = styled.article`
  height: 100%;
  max-width: 360px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

  img {
    display: block;
    margin-inline: auto;
    margin-bottom: 0.5rem;
    width: 180px;
    height: 180px;
    object-fit: scale-down;
  }

  .card-text {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.orange_900};
    }

    p {
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.text};
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 1rem;
    justify-content: space-evenly;

    img {
      width: 150px;
      height: 150px;
    }

    .card-text {
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
