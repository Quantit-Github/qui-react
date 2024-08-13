import { useRef, useState } from 'react';
import { Button, TextField, Typography } from '../../lib/components';

export function TextfieldPage() {
  const [_text, setText] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = (text: string) => {
    setText(text);
  };

  const handleFocus = () => {
    ref.current?.focus();
  };

  return (
    <div style={{ maxWidth: '500px', padding: '32px' }}>
      <h3>텍스트 외부 입력 제어 테스트</h3>
      <Button onClick={() => handleClick('Text1')}>텍스트 입력</Button>
      <Button onClick={() => handleClick('Text2')}>텍스트 입력2</Button>
      <Button onClick={handleFocus}>인풋2 Focus</Button>
      <TextField placeholder="입력" value={_text} onClear={() => setText('')} />
      <TextField
        ref={ref}
        type="number"
        placeholder="입력"
        layout={{
          trailing: <Typography>단위</Typography>,
        }}
        onClear={() => setText('')}
      />
    </div>
  );
}
