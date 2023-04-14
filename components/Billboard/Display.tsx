import React, { useEffect, useState, PropsWithChildren } from 'react';
import Slice from './Slice';

type RotationDirType = 'ltr' | 'rtl';

interface IDisplayProps {
  classes: any;
  numSlices: number;
  rotate: RotationDirType;
  images: string[];
  visIndex: number;
  nextIndex: number;
}

const makeSlices = (
  classes: any,
  imgFront: string,
  imgBack: string,
  numSlices: number,
  rotate: RotationDirType,
) => {
  const slices = [];
  console.log('makeslices');
  for (let i = 0; i < numSlices; i++) {
    slices.push(
      <Slice
        direction={rotate}
        key={`slice${i}`}
        imgBack={imgBack}
        imgFront={imgFront}
        index={i}
        classes={classes}
      />,
    );
  }
  return slices;
};

export default function Display(props: PropsWithChildren<IDisplayProps>) {
  const { classes, images, visIndex, nextIndex } = props;
  const [showback, setShowback] = useState(false);

  useEffect(() => {
    console.log('Display useEffect');
    setShowback((s) => !s);
  }, [visIndex, nextIndex]);

  const slices = () => {
    if (showback) {
      return makeSlices(
        classes,
        images[visIndex],
        images[nextIndex],
        props.numSlices,
        props.rotate,
      );
    } else {
      return makeSlices(
        classes,
        images[visIndex],
        images[nextIndex],
        props.numSlices,
        props.rotate,
      );
    }
  };

  console.log('Display Render', images[visIndex], images[nextIndex]);
  return (
    <div className={`${props.classes.display} ${showback && classes.showBack}`}>
      {slices()}
    </div>
  );
}
