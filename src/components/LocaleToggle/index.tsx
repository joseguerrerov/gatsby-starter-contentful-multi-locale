import React from 'react';
import { navigate } from 'gatsby';
import Select from 'react-select';
import styled from 'styled-components';
import { useI18 } from '../../hooks/i18n';

interface ILocaleToggle {
  currentLocale: string;
  pathname: string;
  className?: string;
}

const LocaleToggle: React.FC<ILocaleToggle> = ({
  currentLocale,
  pathname,
  className,
}) => {
  const { changePathnameLocale, locales } = useI18({
    currentLocale,
  });
  if (locales.length < 2) return null;
  const options = locales.map((locale) => ({
    value: locale.code,
    label: locale.code,
  }));

  const value = options.find(({ value }) => value === currentLocale);
  const onLocaleChange = ({ value }: { value: string }) => {
    navigate(changePathnameLocale(value, pathname));
  };

  return (
    <StyledSelect
      className={className}
      value={value}
      onChange={onLocaleChange}
      options={options}
    />
  );
};

const StyledSelect = styled(Select)`
  min-width: 120px;
`;

export default LocaleToggle;
