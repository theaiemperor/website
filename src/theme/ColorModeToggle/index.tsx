import { useEffect, type ReactNode } from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type ColorModeToggleType from '@theme/ColorModeToggle';
import type { WrapperProps } from '@docusaurus/types';
import { useColorScheme } from '@mui/joy';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): ReactNode {


  const { setMode } = useColorScheme();
  const { value } = props;

  useEffect(() => {
    setMode(value);
  }, [value]);





  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
}
