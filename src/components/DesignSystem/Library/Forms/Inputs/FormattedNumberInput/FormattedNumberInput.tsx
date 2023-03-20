import React from 'react';
// @TODO: We should look at migrating from v4 to v5. There are some migration notes here:
//  https://s-yadav.github.io/react-number-format/docs/migration
import {NumericFormat, NumericFormatProps} from 'react-number-format';
import {InputAdornment, InputProps as InputPropsType} from '@mui/material';
import {NumberInput, NumberInputProps} from '../NumberInput';

// TODO: This component is a work in progress and potentially doesn't even belong in the design system.

interface NumberFormatCustomProps {
  inputRef: (instance: NumericFormatProps<number> | null) => void;
  onChange: (
    event: {
      currentTarget: {
        value?: string;
      };
    },
    numericValue?: number,
  ) => void;
  name: string;
  step?: number;
  decimalScale?: number;
  min?: number;
  max?: number;
}

const NumberFormatCustom = React.forwardRef(
  (props: NumberFormatCustomProps, ref) => {
    const {onChange, ...other} = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values): void => {
          onChange(
            {
              currentTarget: {
                value: values.value,
              },
            },
            values.floatValue,
          );
        }}
        thousandSeparator={props.step === undefined}
        decimalScale={props.decimalScale}
      />
    );
  },
);

NumberFormatCustom.displayName = 'NumberFormatCustom';

export interface FormattedNumberInputProps
  extends Omit<NumberInputProps, 'onChange'>,
    Omit<NumberFormatCustomProps, 'inputRef' | 'name'> {
  uom?: string;
  uomConversion?: number;
}

export const FormattedNumberInput = ({
  uom,
  decimalScale,
  step,
  min,
  max,
  uomConversion = 1,
  ...restProps
}: FormattedNumberInputProps) => {
  const InputProps: InputPropsType = {
    inputProps: {},
  };

  InputProps.inputComponent = NumberFormatCustom as never;

  if (uom) {
    InputProps.endAdornment = (
      <InputAdornment position="end">{uom}</InputAdornment>
    );
  }

  if (decimalScale) {
    let modifier = 0;
    if (uomConversion === 10) {
      modifier = -1;
    }
    if (uomConversion === 100) {
      modifier = -2;
    }
    if (uomConversion === 1000) {
      modifier = -3;
    }
    InputProps.inputProps = {
      ...(InputProps.inputProps || {}),
      decimalScale: decimalScale - modifier,
    };
  }
  if (step) {
    InputProps.inputProps = {
      ...(InputProps.inputProps || {}),
      step: step * uomConversion,
    };
  }

  if (min) {
    InputProps.inputProps = {
      ...(InputProps.inputProps || {}),
      min: min * uomConversion,
    };
  }

  if (max) {
    InputProps.inputProps = {
      ...(InputProps.inputProps || {}),
      max: max * uomConversion,
    };
  }

  return <NumberInput InputProps={InputProps} {...restProps} />;
};

FormattedNumberInput.displayName = 'FormattedNumberInput';
