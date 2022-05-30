import { Container } from './styles';

interface ImageCardProps {
  title: string;
  children: string;
  image: string;
}

export function ImageCard({ children, title, image }: ImageCardProps) {
  return (
    <Container>
      <img src={image} alt="" />
      <div className="card-text">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </Container>
  );
}
