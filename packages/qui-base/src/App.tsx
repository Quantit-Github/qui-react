import { Button } from '../lib/main';

function App() {
  return (
    <>
      <section style={{ maxWidth: '500px' }}>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          type="xl-hug"
          trailingContent={<span>👋</span>}
        >
          Primary
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="secondary"
          type="xl-fill"
          leadingContent={<span>👋</span>}
          trailingContent={<span>👋</span>}
          style={{
            color: 'red',
            borderRadius: '30px',
            border: '1px solid red',
          }}
        >
          Customed Secondary
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="secondary"
          type="xl-fill"
          leadingContent={<span>👋</span>}
        >
          Secondary
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="ghost"
          type="xl-fill"
          trailingContent={<span>👋</span>}
        >
          Ghost
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="outline"
          type="xl-fill"
          trailingContent={<span>👋</span>}
        >
          Outline
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          disabled
          variant="outline"
          type="xl-fill"
          trailingContent={<span>👋</span>}
        >
          Disabled
        </Button>
      </section>
    </>
  );
}

export default App;
