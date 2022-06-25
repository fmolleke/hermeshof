import * as React from 'react';
import classNames from 'classnames';

interface style {
    opacity?: number;
    width?: string;
    height?: string;
    borderRadius?: string;
}

export default function ImageBlock(props) {
    const { url, altText } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const styles = props.styles?.self || {};
    const imageOpacity = styles.opacity || styles.opacity === 0 ? styles.opacity : 100;
    const imageWidth = styles.width;
    const imageHeight = styles.height;
    const borderRadius = props.borderRadius;
    const annotationPrefix = props['data-sb-field-path'] || '';
    const annotations = [
        `${annotationPrefix}`,
        `${annotationPrefix}.url#@src`,
        `${annotationPrefix}.altText#@alt`,
        `${annotationPrefix}.elementId#@id`
    ];
    const style: style = {
        opacity: imageOpacity * 0.01
    }

    if (imageWidth) {
        style.width = imageWidth;
    }

    if (imageHeight) {
        style.height = imageHeight;
    }

    if (borderRadius) {
        style.borderRadius = borderRadius;
    }

    return (
        <img
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-image-block', cssClasses)}
            src={url}
            alt={altText || ''}
            style={style}
            data-sb-field-path={annotations.join(' ').trim()}
        />
    );
}
