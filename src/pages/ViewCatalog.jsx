import { useParams } from 'react-router-dom';
import HeroSearch from '../components/ui/HeroSearch';
import ViewAllCatalog from '../components/ui/ViewAllCatalog';

function ViewCatalog() {

  const { catalog } = useParams(); 
  const category = catalog ? catalog.split('-')[1] : "";

  // Fungsi untuk membuat huruf kapital di awal kata
  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
 

  return (
    <>
    <HeroSearch>
      {(searchValue) => <ViewAllCatalog searchValue={searchValue} category={capitalizeFirstLetter(category)} />}
    </HeroSearch>
    </>
  );
}

export default ViewCatalog;
