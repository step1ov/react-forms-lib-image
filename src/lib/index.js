import React from 'react';
import {BaseInput} from "react-forms-lib";
import {RenderLabel, RenderInput, RenderFormGroup, RenderFormFeedback, RenderFormText, RenderPreview} from "./views";
import PropTypes from "prop-types";

export default class InputImage extends BaseInput
{
    static propTypes = Object.assign(
        {
            previewClassName: PropTypes.string,
            previewStyle: PropTypes.object,
            loadingComponent: PropTypes.node
        },
        // eslint-disable-next-line
        BaseInput.propTypes
    );

    static defaultProps = Object.assign(
        {
            previewStyle: {maxWidth: 240, maxHeight: 180},
            previewClassName: "d-block mb-2 border",
            loadingComponent: <div className="mb-2">Loading...</div>
        },
        BaseInput.defaultProps
    );

    static renderLabel(props)
    {
        return !props.hideLabel && RenderLabel(props);
    }

    static renderInput(props)
    {
        return RenderInput(props);
    }

    static renderFormGroup(props)
    {
        const formPreview = props.state ?
            (props.state.busy ? props.loadingComponent :
                (props.state.preview ? RenderPreview(props) : null) ) : null;
        const localProps = Object.assign({ formPreview }, props);
        return RenderFormGroup(localProps);
    }

    static renderFormFeedback(props)
    {
        return !!props.formFeedback && RenderFormFeedback(props);
    }

    static renderFormText(props)
    {
        return !!props.formText && RenderFormText(props);
    }

    static getInitialValue(props)
    {
        return '';
    }

    static getRenderValue(props)
    {
        if (props.state && props.state.preview)
        {
            return RenderPreview(props);
        }
        return '';
    }

    static getValue(e, extraData, props)
    {
        const file = e.target.files[0];
        if (file && (!props.value || props.value.file !== file))
        {
            const reader = new FileReader();
            reader.onloadend = () => props.onValueChange({
                value: file,
                state: { preview: reader.result, busy: false }
            }, props);
            reader.readAsDataURL(file)
        }
        return { value: file, state: { preview: '', busy: !!file }};
    }
}