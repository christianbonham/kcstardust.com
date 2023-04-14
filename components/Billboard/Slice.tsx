interface ISliceProps {
  classes: any;
  direction: 'ltr' | 'rtl';
  imgFront: string;
  imgBack: string;
  index: number;
}

const Face = (props: {
  classes: any;
  face: 'front' | 'back';
  image: string;
  offset: number;
}) => {
  const offsetPosX = props.offset + 'px';
  const faceClassname =
    props.face === 'front' ? props.classes.front : props.classes.back;
  return (
    <div
      className={faceClassname}
      style={{
        backgroundImage: props.image,
        backgroundPositionX: offsetPosX,
      }}
    ></div>
  );
};

const getOffset = (index: number, numSlices: number) =>
  -1 * ((1280 / numSlices) * index);

export default function Slice(props: ISliceProps) {
  const { classes, direction, imgFront, imgBack, index } = props;

  const dirClass = direction === 'ltr' ? classes.ltr : classes.rtl;
  return (
    <div className={`${classes.slice} ${dirClass}`}>
      <Face
        classes={classes}
        face="front"
        image={`url('${imgFront}')`}
        offset={getOffset(index, 40)}
      />
      <Face
        classes={classes}
        face="back"
        image={`url('${imgBack}')`}
        offset={getOffset(index, 40)}
      />
    </div>
  );
}
