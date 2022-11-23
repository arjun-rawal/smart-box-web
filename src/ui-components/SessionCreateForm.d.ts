/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SessionCreateFormInputValues = {
    date?: string;
};
export declare type SessionCreateFormValidationValues = {
    date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionCreateFormOverridesProps = {
    SessionCreateFormGrid?: FormProps<GridProps>;
    date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SessionCreateFormProps = React.PropsWithChildren<{
    overrides?: SessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onSuccess?: (fields: SessionCreateFormInputValues) => void;
    onError?: (fields: SessionCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SessionCreateFormInputValues) => SessionCreateFormInputValues;
    onValidate?: SessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function SessionCreateForm(props: SessionCreateFormProps): React.ReactElement;
