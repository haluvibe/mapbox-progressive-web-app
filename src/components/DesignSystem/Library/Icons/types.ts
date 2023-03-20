import {SvgIconProps} from '@mui/material';
import {RestrictedVisualProps} from '../types';
export type IconProps = Omit<SvgIconProps, RestrictedVisualProps | 'children'>;
