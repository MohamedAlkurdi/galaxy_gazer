import { useEffect, useState } from "react"
import {ErrorMessage_component_styles} from '../unioned-styles'

export default function ErrorMessage({ state, message }) {
    const [renderingState, setRenderingState] = useState(false);

    useEffect(() => {
        setRenderingState(state);
    }, [state]);

    return (
        <div className={`${renderingState ? 'block' : 'hidden'} ${ErrorMessage_component_styles.errorMessage_style}`}>
            <p className={ErrorMessage_component_styles.errorMessageContent_style}>{message}</p>
        </div>
    );
}
