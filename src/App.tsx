import Test from 'pages/Test/Test';
import Main from 'pages/Main/Main';
import TestQuery from 'pages/TestQuery/TestQuery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/test/:id" element={<Test />}></Route>
            <Route path="/testquery/:id" element={<TestQuery />}></Route>
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
