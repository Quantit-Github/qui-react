import { ChangeEvent, useState } from 'react';
import { Checkbox } from '../../lib/components';

export default function CheckboxPage() {
  const [checked, setChecked] = useState<boolean[]>([false, false]);

  const handleChange = (index: number) => () => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };
  const handleChangeAll = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked([e.target.checked, e.target.checked]);
  };

  return (
    <main>
      <div>
        <Checkbox
          checked={checked[0] && checked[1]}
          indeterminate={checked[0] !== checked[1]}
          onChange={handleChangeAll}
        >
          체크박스
        </Checkbox>
        <div
          style={{
            marginLeft: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Checkbox checked={checked[0]} onChange={handleChange(0)}>
            체크박스1
          </Checkbox>
          <Checkbox checked={checked[1]} onChange={handleChange(1)}>
            체크박스2
          </Checkbox>
        </div>
      </div>
      <div>
        <Checkbox.Input>체크박스인풋</Checkbox.Input>
      </div>
    </main>
  );
}
