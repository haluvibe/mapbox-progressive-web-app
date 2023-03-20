/**
 * ⚠️Warning ⚠️
 * The following props are restricted in order to enforce a level of visual consistency.
 * Props shouldn't be removed from this list without very, very good reasons.
 */
export type RestrictedStyleProps =
  | 'border'
  | 'borderBottom'
  | 'borderColor'
  | 'borderLeft'
  | 'borderRadius'
  | 'borderRight'
  | 'borderTop'
  | 'boxShadow'
  | 'classes'
  | 'className'
  | 'centerRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'disableFocusRipple'
  | 'focusVisibleClassName'
  | 'focusRipple'
  | 'fontFamily'
  | 'fontSize'
  | 'fontStyle'
  | 'fontWeight'
  | 'letterSpacing'
  | 'lineHeight'
  | 'textTransform'
  | 'style'
  | 'sx'
  | 'TouchRippleProps'
  | 'touchRippleRef';

export type RestrictedBoxProps = Omit<RestrictedStyleProps, 'sx'>;

export type RestrictedVisualProps =
  | RestrictedStyleProps
  | 'boxSizing'
  | 'height'
  | 'width'
  | 'minWidth'
  | 'maxWidth'
  | 'maxHeight';

// Controversial: Do we omit some of the useful spacing props for margin and padding?
