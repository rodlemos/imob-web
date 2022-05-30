import Image from 'next/image';
import { Container } from './styles';

interface TestimonialProps {
  title: string;
  children: string;
  image: string;
}

export function TestimonialCard({children, title, image}: TestimonialProps) {
  return (
    <Container>
      <Image src={image} width={120} height={120} alt=""/>
      <p>{children}</p>
      <span>{title}</span>
    </Container>
  );
}