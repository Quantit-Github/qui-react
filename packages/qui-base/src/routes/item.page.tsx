import { useRef, useState } from 'react';
import { ItemList, Typography } from '../../lib/components';

export default function ItemPage() {
  return (
    <div>
      <section>
        <ItemList
          items={[
            { id: 'id', code: 'code' },
            { id: 'id2', code: 'code2' },
          ]}
          style={{
            width: 'fit-content',
            padding: 24,
            listStyle: 'none',
          }}
          itemRenderer={({ code }) => {
            return (
              <li
                style={{
                  position: 'relative',
                  width: 'fit-content',
                }}
              >
                <Typography
                  style={{
                    color: 'var(--body-contents-body-b10)',
                  }}
                >
                  {code}
                </Typography>
              </li>
            );
          }}
        />
      </section>

      <section>
        <Typography variant="title-large">Auto Complete</Typography>
        <AutoComplete />
      </section>
    </div>
  );
}

function AutoComplete() {
  const ref = useRef<HTMLInputElement>(null);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const options = [
    { id: 'id', code: 'code' },
    { id: 'id2', code: 'code2' },
  ];

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setFocusedIndex(focusedIndex + 1);
      if (focusedIndex + 1 >= options.length) {
        setFocusedIndex(0);
      }
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex(focusedIndex - 1);
      if (focusedIndex - 1 < 0) {
        setFocusedIndex(options.length - 1);
      }
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      setFocusedIndex(focusedIndex - 1);
    }
  };

  return (
    <div>
      <div>
        <input ref={ref} onKeyDown={handleKeydown} />
      </div>
      <ItemList
        items={options}
        itemRenderer={({ code }, index) => {
          const isFocused = focusedIndex === index;
          return (
            <li
              style={{
                position: 'relative',
                width: 'fit-content',
                backgroundColor: isFocused ? 'red' : 'transparent',
              }}
            >
              <Typography
                style={{
                  color: 'var(--body-contents-body-b10)',
                }}
              >
                {code}
              </Typography>
            </li>
          );
        }}
        style={{
          width: 'fit-content',
          padding: 24,
          listStyle: 'none',
        }}
      />
    </div>
  );
}
