import styled from 'styled-components';

export const Hero = styled.section`
  background-attachment: fixed;
  display: flex;
  background-image: url('/citylights.jpg');
  background-size: cover;
  background-position: center bottom;
  background-color: #44424e;
  background-blend-mode: overlay;
  height: 500px;

  .hero-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h1 {
      font-size: 2.5rem;
      max-width: 20ch;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
      line-height: 1.2;

      span {
        color: ${({ theme }) => theme.colors.orange_300};
      }

      span:last-child {
        color: ${({ theme }) => theme.colors.green_200};
      }
    }

    p {
      color: ${({ theme }) => theme.colors.shape};
      font-size: 1rem;
    }

    button {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1064px) {
    height: 560px;

    .hero-wrapper {
      gap: 1.5rem;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }
`;

export const Features = styled.section`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-inline: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    max-width: 1200px;
    margin-inline: auto;
  }
`;

export const Call = styled.section`
  margin-block: 6rem;
  padding-block: 4rem;
  padding-inline: 2rem;
  background-image: linear-gradient(
    130deg,
    ${({ theme }) => theme.colors.orange_300},
    ${({ theme }) => theme.colors.orange_400}
  );

  .call-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin-inline: auto;
    justify-content: center;
    align-items: center;

    .call-content {
      max-width: 55ch;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 2.2rem;
        line-height: 1;
        margin-block: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
      }

      p {
        font-size: 1rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.colors.shape};
        margin-bottom: 2rem;
      }

      button {
        font-size: 1.2rem;
      }
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      img {
        width: 50%;
      }

      .call-content {
        width: 48%;
      }
    }

    @media (min-width: 1000px) {
      .call-content h1 {
        font-size: 4rem;
      }
    }
  }
`;

export const Testimonials = styled.section`
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 2rem;

  h1 {
    font-size: 2.2rem;
    line-height: 1;
    text-align: center;
    color: ${({ theme }) => theme.colors.orange_900};
  }

  .testmonials-grid {
    margin-block: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .testmonials-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }

    .testmonials-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
