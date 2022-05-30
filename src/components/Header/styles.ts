import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1rem;

  .logo {
    display: flex;
    gap: 5px;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  @media (min-width: 1260px) {
    padding-inline: 0;
  }
`;
