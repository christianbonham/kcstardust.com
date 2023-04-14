import React, {
  useCallback,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react';

import Display from './Display';
import classes from './Billboard.module.css';

interface IBillboardProps {
  delay: number; // 30;
  duration: number; // 600;
  imgHeight: number; // 720;
  imgWidth: number; // 1280;
  numSlices: number; // 40;
  rotate: 'ltr' | 'rtl';
  children: JSX.Element | JSX.Element[] | any;
}

export default function Billboard(props: PropsWithChildren<IBillboardProps>) {
  const { children } = props;
  const [indexes, setIndexes] = useState({ visible: 0, next: 1 });

  const imagesArray = React.Children.map(children, (child) => {
    return child.props.imgSrc;
  });
  const childArray = React.Children.toArray(children).map((child, index) => {
    return React.cloneElement(child, { visible: index === indexes.visible });
  });

  const nextItem = useCallback(() => {
    console.log('next page');
    setIndexes(() => {
      return {
        visible: (indexes.visible + 1) % childArray.length,
        next: (indexes.visible + 2) % childArray.length,
      };
    });
  }, [indexes, childArray]);

  useEffect(() => {
    console.log('Billboard useEffect');
    const timer = setTimeout(() => {
      nextItem();
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay, nextItem]);

  console.log('Billboard Render', childArray[indexes.visible].props.imgSrc);
  return (
    <div className={classes.bb}>
      <Display
        classes={classes}
        numSlices={props.numSlices}
        rotate={props.rotate}
        images={imagesArray}
        nextIndex={indexes.next}
        visIndex={indexes.visible}
      />
      {childArray}
    </div>
  );
}
