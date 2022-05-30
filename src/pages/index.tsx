import Head from 'next/head';
import { useTheme } from 'styled-components';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ImageCard } from '../components/ImageCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { Call, Features, Hero, Testimonials } from '../styles/homeStyles';
import { data } from '../util/data';

export default function Home() {
  const { colors } = useTheme();
  const { features, testimonials } = data;

  return (
    <>
      <Head>
        <title>ProperWay | Home</title>
      </Head>

      <Header />

      <Hero>
        <div className="hero-wrapper">
          <h1>
            Find the <span>perfect</span> home for you with <span>easy</span>
          </h1>

          <p>Look for properties wherever you like</p>

          <Button>Sign up now</Button>
        </div>
      </Hero>

      <Features>
        {features.map((feature) => (
          <ImageCard
            image={feature.image}
            title={feature.title}
            key={feature.id}
          >
            {feature.text}
          </ImageCard>
        ))}
      </Features>

      <Call>
        <div className="call-wrapper">
          <img src="/call.png" alt="" loading="lazy" />
          <div className="call-content">
            <h1>See something you like?</h1>

            <p>
              Make your search for a new home easier. Look for properties
              whererver you want in just one place. Browse through your desired
              location easily with the map interface, adjust your preferences
              and get straight to your new home!
            </p>

            <Button color={colors.green_300}>Start searching!</Button>
          </div>
        </div>
      </Call>

      <Testimonials>
        <h1>Just like they did</h1>

        <div className="testmonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              image={testimonial.image}
              title={testimonial.name}
              key={testimonial.id}
            >
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quos quisquam ipsam voluptatibus molestiae libero.&quot;
            </TestimonialCard>
          ))}
        </div>
      </Testimonials>

      <Footer />
    </>
  );
}
