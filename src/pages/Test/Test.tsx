import * as S from 'pages/Test/TestStyle';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Data {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function Test() {
  const [data, setData] = useState<Data | any>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData((prev: any) => res.data);
      setIsLoading(true);
    });
  }, []);

  if (!isLoading) {
    return <div>로딩중!</div>;
  }

  return (
    <S.Container>
      <h1>axios를 테스트 해봅시다</h1>
      <div>{data[0].name}</div>
    </S.Container>
  );
}

export default Test;
