import React, { useEffect, useMemo, useState } from 'react';
import { useController } from 'react-hook-form';
import { Dimensions, Keyboard } from 'react-native';
import { accessObjectByString } from '@/utils';
import { BottomSheetList } from '@/components';
import { useBottomSheet } from '@/hooks';
import { ISelectFieldProps } from './types';
import { InputOption } from '../FieldUtilitaries';
import TextField from '../TextField';
import { ArrowDown, ArrowUp } from '@/components/Icons';

function SelectField<T extends Record<string, any>>({
  name,
  label,
  control,
  options = [],
  optionKeyExtractor,
  optionLabelKey,
  optionValueKey,
  optionCompareKey,
  placeholder,
  required,
  disabled,
  inputProps,
  containerProps,
  listProps,
}: ISelectFieldProps<T>) {
  const optionIdentifier = useMemo(() => {
    return optionCompareKey || optionLabelKey;
  }, [optionCompareKey, optionLabelKey]);

  const anything: any = true;

  const [ref, handleOpen, handleClose] = useBottomSheet();
  const maxHeight = useMemo(() => {
    const height = Dimensions.get('window').height * 0.967;
    const isHeightBreak = options.length * 60 > height;
    const heightStyle = {
      maxHeight: height,
    };

    return isHeightBreak ? heightStyle : undefined;
  }, [options]);

  const {
    field,
    formState: { errors },
  } = useController({ name, control });
  const error = errors[field.name]?.message as string | undefined;

  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = useState<string | undefined>();

  useEffect(() => {
    if (field.value instanceof Object) {
      setTextValue(accessObjectByString(field.value, optionLabelKey));
    } else if (optionValueKey) {
      const findedOption = options.find(
        (item) => accessObjectByString(item, optionValueKey) === field.value,
      );

      if (findedOption) setTextValue(accessObjectByString(findedOption, optionLabelKey));
    }
  }, [field.value, optionLabelKey]);

  function handleChange(item: T) {
    field.onChange(item);
  }

  function verifySelectedOptions(item: T) {
    if (optionValueKey) {
      return accessObjectByString(item, optionValueKey) === field.value;
    }

    if (field.value instanceof Object) {
      return (
        accessObjectByString(field.value, optionIdentifier) ===
        accessObjectByString(item, optionIdentifier)
      );
    }

    return false;
  }

  return (
    <>
      <TextField
        containerProps={containerProps}
        label={label}
        value={textValue}
        placeholder={placeholder}
        errorMessage={error}
        showErrorMessage={!open}
        disabled={disabled}
        required={required}
        selectionColor={'transparent'}
        inputProps={{
          showSoftInputOnFocus: false,
          accessibilityRole: 'combobox',
          'aria-expanded': open,
          ...inputProps,
        }}
        rightIcon={{
          icon: open ? <ArrowUp /> : <ArrowDown />,
        }}
        onFocus={() => {
          if (Keyboard.isVisible()) {
            Keyboard.dismiss();
          }

          handleOpen();
        }}
      />
      <BottomSheetList
        ref={ref}
        index={0}
        waitFor={anything}
        enableDynamicSizing
        snapPoints={[]}
        simultaneousHandlers={anything}
        onClose={() => {
          setOpen(false);
          Keyboard.dismiss();
        }}
        onOpen={() => setOpen(true)}
        accessible
        aria-hidden={!open}
        role="combobox"
        accessibilityLabel={label}
        flatListProps={{
          ...listProps,
          style: [listProps?.style, maxHeight],
          data: options,
          nestedScrollEnabled: true,
          keyExtractor: (item, index) =>
            optionKeyExtractor ? accessObjectByString(item, optionKeyExtractor) : index,
          renderItem: ({ item }) => (
            <InputOption
              selected={verifySelectedOptions(item as T)}
              onPress={() => {
                const value = optionValueKey ? accessObjectByString(item, optionValueKey) : item;

                handleChange(value);

                handleClose();
              }}
            >
              {accessObjectByString(item, optionLabelKey)}
            </InputOption>
          ),
        }}
      />
    </>
  );
}

export default SelectField;
