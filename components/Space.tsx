interface ISpaceProps {
  height: string;
}

export default function Space(props: ISpaceProps) {
  const style: React.CSSProperties = {
    backgroundColor: 'transparent',
    height: props.height,
  };
  return <div style={style}></div>;
}
