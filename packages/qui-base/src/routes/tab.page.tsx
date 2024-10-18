import { Tab, Typography } from '../../lib/components';

const ITEMS = [
  {
    id: '1',
    children: <Typography variant="body-large">Tab 1</Typography>,
  },
  {
    id: '2',
    children: <Typography variant="body-large">Tab 2</Typography>,
  },
  {
    id: '3',
    children: <Typography variant="body-large">Tab 3</Typography>,
  },
];

export default function TabPage() {
  return (
    <div>
      <Tab items={ITEMS} variant="underline" />
    </div>
  );
}
