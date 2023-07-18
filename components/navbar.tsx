import Link from 'next/link';

import Container from '@/components/ui/container';
import MainNav from '@/components/Mainnav';
import getCategories from '@/actions/get-categories';
import NavbarActions from './navbar-actions';

const Navbar = async () => {
  // Get all categories
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div
          className="relative px-4 sm:px-6 lg:px-8  flex h-16 items-center
        "
        >
          <Link href={'/'} className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="text-xl font-bol">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
