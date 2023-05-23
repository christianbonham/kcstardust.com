interface ISpaceProps {
  height: string;
  svg?: boolean;
}

export default function Space(props: ISpaceProps) {
  const style: React.CSSProperties = {
    backgroundColor: 'transparent',
    height: props.height,
    position: 'relative',
    zIndex: 1,
  };
  const cls1: any = {
    fill: '#000',
    opacity: 0.65,
  };
  const cls2: any = {
    fill: '#fff',
  };
  return (
    <div style={style}>
      {props.svg && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="128"
          viewBox="0 0 1920 128"
        >
          <defs></defs>
          <g id="Layer_1_copy_2">
            <path
              style={cls1}
              className="cls-1"
              d="M1059.8,102.27c-249.06,5.54-481.05-10.08-693.12-38.27C236.76,81.27,114.3,103.26,0,128H1920c-114.78-24.86-237.21-46.79-366.63-64-154.81,20.58-319.65,34.4-493.57,38.27Z"
            />
          </g>
          <g id="Layer_1_copy">
            <path
              style={cls2}
              className="cls-2"
              d="M0,0C114.3,24.74,236.76,46.73,366.68,64c212.07-28.19,444.06-43.81,693.12-38.27,173.92,3.87,338.76,17.68,493.57,38.27,129.42-17.21,251.84-39.14,366.63-64H0Z"
            />
          </g>
        </svg>
      )}
    </div>
  );
}
