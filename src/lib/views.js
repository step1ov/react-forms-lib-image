import React from 'react';
import { FormGroup, Label, Input, FormFeedback, FormText, Badge } from 'reactstrap';
import InputImage from "./index";

export const RenderLabel = (props) =>
    <Label for={props.id} {...props.labelProps}>
        {props.title} {props.languageName && <Badge color="secondary">{props.languageName}</Badge>}
    </Label>;

export const RenderInput = (props) =>
    <Input type="file" id={props.id} name={props.name} required={props.required}
           valid={props.valid} invalid={props.invalid} disabled={props.disabled}
           placeholder={props.placeholder}
           plaintext={props.plaintext}
           onChange={props.onChange} {...props.inputProps}>
        {props.children}
    </Input>;

export const RenderFormGroup = (props) =>
    <FormGroup {...props.formGroupProps}>
        {InputImage.renderLabel(props)}
        {props.formPreview}
        {InputImage.renderInput(props)}
        {InputImage.renderFormFeedback(props)}
        {InputImage.renderFormText(props)}
    </FormGroup>;

export const RenderFormFeedback = (props) =>
    <FormFeedback valid={props.valid}>
        {props.formFeedback}
    </FormFeedback>;

export const RenderFormText = (props) =>
    <FormText>{props.formText}</FormText>;

export const RenderPreview = (props) =>
    <img src={props.state.preview} className={props.previewClassName} style={props.previewStyle}/>;