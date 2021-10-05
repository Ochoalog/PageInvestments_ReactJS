import { useEffect, useState } from 'react';
import { apiGetBackend } from '../api/api';
import Header from '../components/Header'
import Investment from '../components/Investment';
import Investments from '../components/Investments';
import Loading from '../components/Loading';
import Main from '../components/Main';

apiGetBackend();

export default function ReactInvestmentsPage() {
  const [backend, setBackend] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBackend(apiGetBackend());
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <Loading />
      </div>);
  }

  return (
    <>
      <Header>React investments</Header>

      <Main>
        <div className='container mx-auto p-4'>
          <Investments>{backend.map(item => {
            return <Investment key={item.id}>{item}</Investment>
          })}</Investments>
        </div>
      </Main>
    </>
  );
}