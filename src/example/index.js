import React, { Component } from 'react';
import InputImage from "./../lib";
import {InputForm, InputDefault} from "react-forms-lib";

export default class SampleForm extends Component
{
    state = {
        data: {}
    };

    handleChange = (data) =>
    {
        console.log(data);
        this.setState({data});
    };

    handleSave = (data) =>
    {
        alert("Save");
    };

    handleCancel = () =>
    {
        alert("Cancel");
    };

    render()
    {
        return (
            <InputForm data={this.state.data}
                       onChange={this.handleChange} clearButton cancelButton
                       onSave={this.handleSave} onCancel={this.handleCancel}
                       title="Form"
                       {...this.props}>
                <InputDefault type="text" title="Text" field="text" />
                <InputImage title="Image" field="image" />
            </InputForm>
        )
    }
}
