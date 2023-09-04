import { Button } from '@quantit/qui-react/src/components/Button';
import { Typography } from '@quantit/qui-react/src/components/Typography';
import { QuiThemeProvider, Theme } from '@quantit/qui-react/src/styles';
import { useState } from 'react';
import { styled } from 'styled-components';
import MoonIcon from './assets/moon.png';
import SunIcon from './assets/light.png';

const customTheme = new Theme();
// .setPalette('dark', {
//   primary: {
//     50: 'green',
//     60: 'pink',
//   },
// })
// .setPalette('light', {
//   primary: {
//     50: 'purple',
//   },
// });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);

  & > h3 {
    font-size: 14px;
  }
`;

const FloatButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  position: fixed;
  bottom: 16px;
  right: 16px;
`;

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <QuiThemeProvider mode={mode} theme={customTheme}>
      <div
        style={{
          backgroundColor: mode === 'dark' ? '#333' : '#fff',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minHeight: '100vh',
        }}
      >
        <FloatButton
          onClick={() => setMode((v) => (v === 'dark' ? 'light' : 'dark'))}
        >
          <img src={mode === 'dark' ? SunIcon : MoonIcon} width={30} />
        </FloatButton>
        <Container>
          <Section>
            <h3>Button</h3>
            <Section>
              <Button buttonType="primary" onClick={() => console.log('클릭')}>
                Primary
              </Button>
              <Button
                buttonType="secondary"
                onClick={() => console.log('클릭')}
              >
                Secondary
              </Button>
              <Button buttonType="ghost" onClick={() => console.log('클릭')}>
                Ghost
              </Button>
              <Button buttonType="outline" onClick={() => console.log('클릭')}>
                Outline
              </Button>
              <Button
                buttonType="primary"
                disabled
                onClick={() => console.log('클릭')}
              >
                Disabled
              </Button>
            </Section>
          </Section>
          <Section>
            <h3>Typography</h3>
            <Section>
              <Typography as="p" bold size="lg" variant="display">
                Display
              </Typography>
              <Typography as="p" bold size="md" variant="display">
                Display
              </Typography>
              <Typography as="p" bold size="sm" variant="display">
                Display
              </Typography>
              <Typography as="p" bold size="lg" variant="headline">
                Headline
              </Typography>
              <Typography as="p" bold size="md" variant="headline">
                Headline
              </Typography>
              <Typography as="p" bold size="sm" variant="headline">
                Headline
              </Typography>
              <Typography as="p" bold size="lg" variant="title">
                Title
              </Typography>
              <Typography as="p" bold size="md" variant="title">
                Title
              </Typography>
              <Typography as="p" bold size="sm" variant="title">
                Title
              </Typography>
              <Typography as="p" bold size="lg" variant="body">
                Body
              </Typography>
              <Typography as="p" bold size="md" variant="body">
                Body
              </Typography>
              <Typography as="p" bold size="sm" variant="body">
                Body
              </Typography>
              <Typography as="p" bold size="lg" variant="label">
                Label
              </Typography>
              <Typography as="p" bold size="md" variant="label">
                Label
              </Typography>
              <Typography as="p" bold size="sm" variant="label">
                Label
              </Typography>
            </Section>
          </Section>
        </Container>
      </div>
    </QuiThemeProvider>
  );
}

export default App;
