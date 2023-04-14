import React, { PropsWithChildren } from 'react';
import Slice from './Slice';

type RotationDirType = 'ltr' | 'rtl';

interface IDisplayProps {
  classes: any;
  numSlices: number;
  rotate: RotationDirType;
  images: string[];
  frontIndex: number;
  backIndex: number;
  showBack: boolean;
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
  const { classes, images, frontIndex, backIndex, showBack } = props;

  return (
    <div
      className={`${props.classes.display} ${showBack ? classes.showBack : ''}`}
    >
      {makeSlices(
        classes,
        images[frontIndex],
        images[backIndex],
        props.numSlices,
        props.rotate,
      )}
    </div>
  );
}
