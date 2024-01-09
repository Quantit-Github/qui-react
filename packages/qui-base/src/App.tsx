import { IconButton } from '../lib/components/Button/Button';
import { Icon } from '../lib/components/Icon/Icon';
import { Button } from '../lib/main';

function App() {
  return (
    <>
      <section>
        <Icon type="check" />
        <Icon.Smile />
      </section>
      <section style={{ margin: '8px 0' }}>
        <IconButton size="xl" />
        <IconButton size="lg" />
        <IconButton size="md" />
        <IconButton size="sm" />
        <IconButton size="xs" />
        <IconButton size="xs" disabled />
        <Button.Icon size="xs" disabled />
      </section>
      <section style={{ maxWidth: '500px' }}>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          // type="xl-hug"
          trailingContent={<span>👋</span>}
        >
          Primary
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          // type="xl-hug"
          fitContentWidth
          size="md"
          layout="hug"
          variant="outline"
          trailingContent={<span>👋</span>}
        >
          Outline Md
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          // type="xl-hug"
          fitContentWidth
          size="sm"
          layout="hug"
          variant="outline"
          trailingContent={<span>👋</span>}
        >
          Outline Small
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="secondary"
          // type="xl-fill"
          layout="hug"
          leadingContent={<span>👋</span>}
          mainContent="Hi"
          trailingContent={<span>👋</span>}
          style={{
            color: 'purple',
            borderRadius: '30px',
            border: '1px solid red',
          }}
        >
          {/* Customed Secondary */}
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="secondary"
          // type="xl-fill"
          leadingContent={<span>👋</span>}
        >
          Secondary
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="ghost"
          // type="xl-fill"
          trailingContent={<span>👋</span>}
        >
          Ghost
        </Button>
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          variant="outline"
          // type="xl-fill"
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
          // type="xl-fill"
          trailingContent={<span>👋</span>}
        >
          Disabled
        </Button>
      </section>
    </>
  );
}

export default App;
