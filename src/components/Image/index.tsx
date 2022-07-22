import images from '@/assets/images';
import { CustomImageSchema } from '@/schema/common';
import classNames from 'classnames/bind';
import styles from './image.module.scss';
import React from 'react';

// prop ref là thằng forwardRef tạo cho mình, mình bỏ đó vô ref của thằng image là khi xài component này ở bên ngoài thì ở bên ngoài sẽ nhận được ref

const Image = React.forwardRef(
  (
    { src, alt, className, fallback = images.defaultImage, ...props }: CustomImageSchema,
    ref: React.ForwardedRef<HTMLImageElement>,
  ) => {
    const [_fallback, setFallback] = React.useState('');

    const handleError = React.useCallback(() => {
      setFallback(fallback);
    }, []);

    return (
      <img
        src={_fallback || src}
        ref={ref}
        className={classNames(styles.wrapper, className)}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

export default Image;
