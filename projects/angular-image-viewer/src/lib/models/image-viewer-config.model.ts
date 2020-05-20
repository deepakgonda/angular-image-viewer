export interface ImageViewerConfig {
    btnContainerClass?: string;
    btnClass?: string;
    btnSubClass?: string;
    zoomFactor?: number;
    containerBackgroundColor?: string;
    wheelZoom?: boolean;
    allowFullscreen?: boolean;
    allowKeyboardNavigation?: boolean;

    btnShow?: {
        zoomIn?: boolean;
        zoomOut?: boolean;
        rotateClockwise?: boolean;
        rotateCounterClockwise?: boolean;
        next?: boolean;
        prev?: boolean;
        reset?: boolean;
    };

    btnIcons?: {
        zoomIn?: MultiBtn['btn'];
        zoomOut?: MultiBtn['btn'];
        rotateClockwise?: MultiBtn['btn'];
        rotateCounterClockwise?: MultiBtn['btn'];
        next?: MultiBtn['btn'];
        prev?: MultiBtn['btn'];
        fullscreen?: MultiBtn['btn'];
        reset?: MultiBtn['btn'];
    };

    customBtns?: Array<{
        name: string;
        icon: MultiBtn['btn'];
    }>;

}

interface MultiBtn {
    btn: {
        classes?: string,
        text?: string
    };
}
