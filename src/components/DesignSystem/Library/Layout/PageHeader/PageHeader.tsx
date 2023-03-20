import React from 'react';
import {Heading3} from '../../Typography/Heading3';
import {Subtitle1} from '../../Typography/Subtitle1';
import {FlexColumn} from '../FlexColumn';
import {FlexRow, FlexRowProps} from '../FlexRow';
import {Breadcrumb} from './Breadcrumb';
import {Breadcrumbs} from './Breadcrumbs';

export interface PageHeaderProps
  extends Omit<FlexRowProps, 'justifyContent' | 'gap'> {
  pageTitle: React.ReactNode;
  breadcrumbs?: {
    href: string;
    label?: string;
    icon?: React.ReactNode;
  }[];
  subTitle?: React.ReactNode;
  actionItems?: React.ReactNode;
}

export const PageHeader = ({
  pageTitle,
  subTitle = '',
  actionItems,
  breadcrumbs,
  ...flexRowProps
}: PageHeaderProps) => {
  return (
    <FlexRow {...flexRowProps} justifyContent={'space-between'}>
      <FlexColumn>
        {breadcrumbs && (
          <Breadcrumbs>
            {breadcrumbs.map(({href, icon, label}, idx) => (
              <Breadcrumb label={label} icon={icon} href={href} key={idx} />
            ))}
          </Breadcrumbs>
        )}
        <Heading3>{pageTitle}</Heading3>
        {subTitle && <Subtitle1>{subTitle}</Subtitle1>}
      </FlexColumn>
      <FlexRow alignItems={'flex-start'}>{actionItems}</FlexRow>
    </FlexRow>
  );
};

PageHeader.displayName = 'PageHeader';
