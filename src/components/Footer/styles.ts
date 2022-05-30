import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.orange_400};

  .footer-wrapper {
    padding-block: 4rem 1rem;

    ul {
      list-style-type: none;
      margin-bottom: 2rem;
      text-align: center;

      li {
        display: inline-block;

        a {
          font-size: 0.8rem;
          color: ${({ theme }) => theme.colors.white};
          font-weight: 700;
          text-transform: uppercase;
        }
      }

      li:not(first-child) {
        margin-right: 0.7rem;
      }
    }

    .end {
      margin-top: 1rem;
      padding-block: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      text-align: center;
      p {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.shape};
      }
    }
  }

  @media (min-width: 1024px) {
    .footer-wrapper {
      max-width: 1200px;
      margin-inline: auto;

      ul li:not(first-child) {
        margin-right: 2rem;
      }

      ul li a {
        font-size: initial;
      }

      .end {
        margin-top: 1rem;
        padding-block: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        text-align: center;
        p {
          color: ${({ theme }) => theme.colors.shape};
        }
      }
    }
  }

  @media (max-width: 1200px) {
    padding-inline: 5%;
  }
`;
