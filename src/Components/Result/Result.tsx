import { ResultStyle } from "./Result.style";

interface resultPropType {
  data: string;
  heading: string;
}

export default function Result(props: resultPropType) {
  const { heading, data } = props;
  return (
    <ResultStyle>
      <h3 className='title'>{heading}</h3>
      <p>{data}</p>
    </ResultStyle>
  );
}
