import NavigationCard from '../components/NavigationCard';

export default function Layout({ children }) {
  // children is used so the anything that is rendered in layout will be executed
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-3/12">
        <NavigationCard />
      </div>
      <div className="w-9/12">{children}</div>
    </div>
  );
}
