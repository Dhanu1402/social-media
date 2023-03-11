import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import PostFormCard from '../components/PostFormCard';
import { useSession } from '@supabase/auth-helpers-react';
import LoginScreen from './login';

export default function Home() {
  // grab the session
  const session = useSession();

  // if no session then return login page
  if (!session) {
    return <LoginScreen />;
  }

  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  );
}
