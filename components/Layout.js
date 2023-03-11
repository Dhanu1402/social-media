import NavigationCard from '../components/NavigationCard';

export default function Layout({ children, hideNavigation }) {
  // children is used so that anything that is rendered in layout will be executed

  let rightColumnClasses = '';
  if (hideNavigation) {
    rightColumnClasses += 'w-full';
  } else {
    rightColumnClasses += 'mx-4 md:mx-0 md:w-9/12';
  }

  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
          <NavigationCard />
        </div>
      )}
      <div className={rightColumnClasses}>{children}</div>
    </div>
  );
}
