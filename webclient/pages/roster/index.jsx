import useTranslation from 'next-translate/useTranslation';

function HomePage() {
  const {t} = useTranslation('common');
  console.log(t('test'));
  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
