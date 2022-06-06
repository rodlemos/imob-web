import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    border: transparent;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.3);
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
