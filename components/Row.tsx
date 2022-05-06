interface IRowProps {
  background?: 'white' | 'grey' | 'transparent';
  children: React.ReactNode;
  classes?: string | [string];
  flexStyle?: Object;
  id?: string;
}

const getClassName = (props: IRowProps) => {
  const { background, classes } = props;
  let str = background ? `row ${background}` : 'row';
  if (classes) {
    str = typeof classes === 'string' ? `${str} ${classes}` : classes.join(' ');
  }
  return str;
};

export default function Row(props: IRowProps) {
  const { id, children, flexStyle } = props;

  return (
    <div id={id} className={getClassName(props)}>
      <div className="mL"></div>
      <div className="col col-C" style={flexStyle}>
        {children}
      </div>
      <div className="mR"></div>
    </div>
  );
}
