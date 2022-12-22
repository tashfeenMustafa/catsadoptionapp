import { Link, Outlet } from 'react-router-dom';

const Template = () => {
  return (
    <>
      <nav className='Navigation'>
        <ul className='NavigationList'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search-cats-for-adoption'>Search Cats For Adoption</Link></li>
          <li><Link to='/about-us'>About Us</Link></li>
        </ul>
      </nav>
      <article className='ContentWrapper'>
        <Outlet />
      </article>
    </>
  );
};

export default Template;