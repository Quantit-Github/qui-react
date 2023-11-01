import { Button, QuiThemeProvider } from '@quantit/qui-react/src';
import { Typography } from '@quantit/qui-react/src/components/Typography';
import { useState } from 'react';
import { styled } from 'styled-components';
import SunIcon from './assets/light.png';
import MoonIcon from './assets/moon.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Section = styled.section`
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
    <QuiThemeProvider>
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
              <Typography as="p" variant="bodyLarge">
                Icon Buttons
              </Typography>
              <Button.Icon size="xl" type="smile" variant="primary" />
              <Button.Icon size="lg" type="smile" variant="primary" />
              <Button.Icon size="md" type="smile" variant="primary" />
              <Button.Icon size="sm" type="smile" variant="primary" />
              <Button.Icon size="xs" type="smile" variant="primary" />
              <hr />

              <Typography as="p" variant="bodyLarge">
                Primary X-Large Left Fill Center
              </Typography>
              <Button
                type="xl-fillCenter"
                variant="primary"
                leadingIcon="check"
                onClick={() => console.log('클릭')}
              >
                Primary
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Primary X-Large Hug
              </Typography>
              <Button
                type="xl-hug"
                variant="primary"
                leadingIcon="check"
                onClick={() => console.log('클릭')}
              >
                Primary
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Primary Large Right Fill Center
              </Typography>
              <Button
                type="lg-fillCenter"
                variant="secondary"
                trailingIcon="check"
                onClick={() => console.log('클릭')}
              >
                Secondary
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Secondary Medium Hug
              </Typography>
              <Button
                type="md-hug"
                variant="secondary"
                onClick={() => console.log('클릭')}
              >
                Secondary
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Outline Medium Hug
              </Typography>
              <Button
                type="md-hug"
                variant="outline"
                trailingIcon="indeterminate"
                onClick={() => console.log('클릭')}
              >
                Outline
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Ghost Medium Hug
              </Typography>
              <Button
                type="md-hug"
                variant="ghost"
                trailingIcon="chevron_right"
                onClick={() => console.log('클릭')}
              >
                Ghost
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Outline Small Hug
              </Typography>
              <Button
                type="sm-hug"
                variant="outline"
                leadingIcon="smile"
                onClick={() => console.log('클릭')}
              >
                Outline
              </Button>
              <hr />

              <Typography as="p" variant="bodyLarge">
                Primary Disabled
              </Typography>
              <Button
                variant="primary"
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
              <Typography as="p" bold variant="displayLarge">
                DisplayLarge
              </Typography>
              <Typography as="p" bold variant="displayMedium">
                DisplayMedium
              </Typography>
              <Typography as="p" bold variant="displaySmall">
                DisplaySmall
              </Typography>
              <Typography as="p" bold variant="headlineLarge">
                HeadlineLarge
              </Typography>
              <Typography as="p" bold variant="headlineMedium">
                HeadlineMedium
              </Typography>
              <Typography as="p" bold variant="headlineSmall">
                HeadlineSmall
              </Typography>
              <Typography as="p" bold variant="titleLarge">
                TitleLarge
              </Typography>
              <Typography as="p" bold variant="titleMedium">
                TitleMedium
              </Typography>
              <Typography as="p" bold variant="titleSmall">
                TitleSmall
              </Typography>
              <Typography as="p" bold variant="bodyLarge">
                BodyLarge
              </Typography>
              <Typography as="p" bold variant="bodyMedium">
                BodyMedium
              </Typography>
              <Typography as="p" bold variant="bodySmall">
                BodySmall
              </Typography>
              <Typography as="p" bold variant="labelLarge">
                LabelLarge
              </Typography>
              <Typography as="p" bold variant="labelMedium">
                LabelMedium
              </Typography>
              <Typography as="p" bold variant="labelSmall">
                LabelSmall
              </Typography>
            </Section>
          </Section>
        </Container>
      </div>
    </QuiThemeProvider>
  );
}

export default App;
