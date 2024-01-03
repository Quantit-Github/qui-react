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
          content="버튼"
          leadingContent={<span>👋</span>}
          trailingContent={<span>👋</span>}
        />
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          type="xl-fill"
          content="버튼"
          leadingContent={<span>👋</span>}
          trailingContent={<span>👋</span>}
        />
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          type="xl-fill"
          content="버튼"
          leadingContent={<span>👋</span>}
        />
        <Button
          onClick={(e) => {
            console.log('e: ', e);
          }}
          content="버튼"
          type="xl-fill"
          trailingContent={<span>👋</span>}
        />
      </section>
    </>
  );
}

export default App;
