import React from 'react';
import {RestrictedVisualProps} from '../../../types';
import {AccordionBadgeCount} from '../AccordionBadgeCount';
import {AccordionSummary, AccordionSummaryProps} from '../AccordionSummary';
import {Body1} from "../../../Typography/Body1";
import {Body2} from "../../../Typography/Body2";

export interface AccordionHeaderProps
  extends Omit<AccordionSummaryProps, RestrictedVisualProps> {
  badgeCount?: number;
  name?: string;
  subHeader?: React.ReactNode;
  isRequired?: boolean;
}

// TODO: This needs styling but we are awaiting Jit's design

export const AccordionHeader = ({
  badgeCount,
  isRequired,
  name,
  subHeader,
  id,
  ...accordionSummaryProps
}: AccordionHeaderProps) => {
  return (
    <AccordionSummary
      aria-controls={`panel-${id}-summary`}
      id={`panel-${id}-header`}
      {...accordionSummaryProps}
    >
      {badgeCount && <AccordionBadgeCount badgeCount={badgeCount} />}

      <Body1>{isRequired ? name : name + ' (optional)'}</Body1>
      {subHeader && <Body2>{subHeader}</Body2>}
    </AccordionSummary>
  );
};

AccordionHeader.displayName = 'AccordionHeader';
