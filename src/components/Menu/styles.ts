import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 60px;
  z-index: 999;
  /* background-color: white; */
  padding-block: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: transparent;
    box-shadow: 0 0 1rem 1px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.shape};

    svg {
      width: 30px;
      height: 30px;
      fill: ${({ theme }) => theme.colors.orange_500};

      &:hover {
        filter: brightness(140%);
      }
    }
  }
`;
