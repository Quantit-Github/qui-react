import { CSSProperties } from 'react';
import { LayoutContainer } from '../../lib/components/LayoutContainer/LayoutContainer';

const commonStyle: CSSProperties = {
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

export default function LayoutPage() {
  return (
    <div style={{ display: 'flex', height: '100dvh' }}>
      <div
        style={{
          width: '80px',
          backgroundColor: 'skyblue',
          fontSize: '20px',
          ...commonStyle,
        }}
      >
        Side Panel
      </div>
      <div style={{ width: '100%' }}>
        <LayoutContainer
          style={{ backgroundColor: 'coral', fontSize: '40px', ...commonStyle }}
        >
          Layout
        </LayoutContainer>
      </div>
    </div>
  );
}
