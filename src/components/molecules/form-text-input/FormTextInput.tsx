import React, { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Controller, Control } from "react-hook-form";

import { Colors, CommonStyles, hs, vs } from "@io/constants";
import { CustomTextInput, FontedText } from "../../atoms";

interface FormTextInputProps extends TextInputProps {
  refField?: React.RefObject<TextInput>;
  name: string;
  defaultValue?: string;
  control: Control;
  rules?: object;
}

const FormTextInput: FC<FormTextInputProps> = ({
  refField,
  name,
  defaultValue,
  control,
  rules = {},
  ...restProps
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <View style={[CommonStyles.flexRoot, { gap: vs.h4 }]}>
          <FontedText
            text="Field"
            fontSize={hs.w12}
            darkColor={Colors.neutral400}
            lightColor={Colors.neutral800}
          />

          <CustomTextInput
            ref={refField}
            customContainerStyle={{ marginBottom: vs.h20 }}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={error?.message}
            {...restProps}
          />
        </View>
      )}
    />
  );
};

export default FormTextInput;
