import styled from 'styled-components';

export const Container = styled.div`
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: black;

  img {
    width: 15px;
    height: 15px;
    object-fit: contain;
  }
`;
