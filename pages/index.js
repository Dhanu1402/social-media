import Card from '../components/Card';

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/3">
        <Card>Test links</Card>
      </div>
      <div className="grow">
        <Card>Form here</Card>
        <Card>First post test</Card>
      </div>
    </div>
  );
}
