import { Button, Typography } from '@quantit/qui-react';
import { styled } from 'styled-components';
import Layout from '../components/Layout';

const HomeTypo = styled(Typography.as('h5'))``;

export default function Home() {
  return (
    <Layout>
      <HomeTypo variant="title" size="md">
        Home
      </HomeTypo>
      <Button variant="primary">Home Button</Button>
    </Layout>
  );
}
