import * as S from 'pages/TestQuery/TestQueryStyle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { getData } from 'apis/getData';

interface Data {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function TestQuery() {
  const { data, isLoading } = useQuery<any>('example', getData);

  if (isLoading) {
    return <div>로딩중!</div>;
  }

  return (
    <S.Container>
      <h1>Query를 테스트 해봅시다</h1>
      {data.map((item: Data) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </S.Container>
  );
}

export default TestQuery;
