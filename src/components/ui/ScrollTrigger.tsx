import { IconArrowUp } from '@tabler/icons';
import { ComponentProps } from 'react';
import { Button } from 'src/lib/mantine';

export const ScrollTrigger = () => {
  const toTop: ComponentProps<'button'>['onClick'] = (event) => {
    'scrollBehavior' in document.documentElement.style
      ? window.scroll({ top: 0, behavior: 'smooth' })
      : window.scrollTo(0, 0);
    event.currentTarget.blur();
  };
  return (
    <Button
      variant="outline"
      color="gray"
      leftIcon={<IconArrowUp />}
      className="fixed bottom-4 right-4"
      onClick={toTop}
    >
      TOP
    </Button>
  );
};
