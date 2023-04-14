import React, {
  useCallback,
  useState,
  useEffect,
  PropsWithChildren,
  ReactElement,
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
  const [indexes, setIndexes] = useState({ front: 0, back: 1 });
  const [showBack, setShowBack] = useState(false);

  const imagesArray = React.Children.map(children, (child) => {
    return child.props.imgSrc;
  });
  const childArray = React.Children.toArray(children).map((child, index) => {
    return React.cloneElement(child as ReactElement, {
      visible: showBack ? index === indexes.back : index === indexes.front,
    });
  });

  const swap = useCallback(() => {
    console.log('Billboard nextItem');
    setShowBack(!showBack);
  }, [showBack]);

  useEffect(() => {
    console.log('Billboard useEffect');
    const timer = setTimeout(() => {
      swap();
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay, swap]);

  console.log('Billboard Render');
  return (
    <div className={classes.bb}>
      <Display
        classes={classes}
        numSlices={props.numSlices}
        rotate={props.rotate}
        images={imagesArray}
        frontIndex={indexes.front}
        backIndex={indexes.back}
        showBack={showBack}
      />
      {childArray}
    </div>
  );
}
