interface IRowProps {
  background?: 'white' | 'grey' | 'transparent';
  children: React.ReactNode;
  classes?: string | [string];
  colStyle?: Object;
  id?: string;
  marginTransparency?: boolean;
  maxWidth?: 'small' | 'large';
}

const getClassName = (props: IRowProps) => {
  const { background, classes } = props;
  let str = background ? `row ${background}` : 'row';
  if (classes) {
    str = typeof classes === 'string' ? `${str} ${classes}` : classes.join(' ');
  }
  return str;
};

const getMarginClassName = (
  marginClass: 'mL' | 'mR',
  marginTransparency: boolean,
) => {
  const className = marginTransparency
    ? `${marginClass} ${'opacity-85'}`
    : `${marginClass}`;
  return className;
};

export default function Row(props: IRowProps) {
  const { id, children, colStyle, marginTransparency = false } = props;

  return (
    <div id={id} className={getClassName(props)}>
      <div className={getMarginClassName('mL', marginTransparency)}></div>
      <div className="col col-C" style={colStyle}>
        {children}
      </div>
      <div className={getMarginClassName('mR', marginTransparency)}></div>
    </div>
  );
}
