import Link from 'next/link';
import Avatar from '../components/Avatar';
import Card from '../components/Card';
import Layout from '../components/Layout';

export default function notifications() {
  return (
    <Layout>
      <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
            <Link href={'/profile'} className="cursor-pointer">
              <Avatar />
            </Link>
            <div>
              <Link
                href={'/profile'}
                className={'font-semibold mr-1 hover:underline'}
              >
                Dhanu Kumar
              </Link>
              liked
              <Link
                href={''}
                className={'ml-1 text-socialBlue hover:underline'}
              >
                your photo
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}
