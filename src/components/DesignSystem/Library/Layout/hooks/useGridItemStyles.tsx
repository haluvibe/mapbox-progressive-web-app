import {useMemo} from 'react';
import {useGridContext, GridItemProps} from '../Grid';

export type UseGridItemStyles = Pick<GridItemProps, 'span'>;

export function useGridItemStyles(span?: GridItemProps['span']) {
  // @TODO: see if we can make the last item in a row stretch full width
  // @TODO: experiment with combined fixed and variable width fields

  // we use the context here so that the grid styles are only generated if the item is wrapped in a grid container
  const withinGrid = useGridContext();
  const sx = useMemo(() => {
    return withinGrid && span
      ? {
          width: '100%',
          gridColumn: {
            xs: `span ${Math.min(span * 4, 12)}`,
            sm: `span ${Math.min(span * 2, 12)}`,
            md: `span ${span}`,
          },
        }
      : {};
  }, [span, withinGrid]);

  return sx;
}
