import styled from 'styled-components';

export const Container = styled.header`
  padding: 5px 10px;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.orange_300},
    ${({ theme }) => theme.colors.orange_400}
  );
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    /* display: none; */
    width: 40px;
    height: 40px;
  }

  button {
    svg {
      width: 20px;
      height: 20px;
      fill: ${({ theme }) => theme.colors.shape};
    }
  }
`;

export const Searchbar = styled.div`
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;

  label {
    height: 100%;
    display: grid;
    place-items: center;
    padding-inline: 5px;
    background-color: white;
    border-radius: 0.5rem 0 0 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.orange_500};
    border-right: 0;
  }

  label svg {
    fill: ${({ theme }) => theme.colors.text};
  }

  input {
    height: 100%;
    flex: 1;
    border-radius: 0 0.5rem 0.5rem 0;
    border: 1px solid ${({ theme }) => theme.colors.orange_500};
    border-left: 0;
    outline: 0;
  }
`;
