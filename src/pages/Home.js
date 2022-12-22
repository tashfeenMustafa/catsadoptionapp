import { Link } from 'react-router-dom';
import MetaData from './MetaData.js';
import './Layout.css';

const Home = () => {
  return (
    <>
      <MetaData
        title={'Find Cats For Adoption Near You | Adopt A Cat Today'} 
        description={'Adopt homeless cats near you and save countless lives. Our adoption program has cats for adoption available from all breeds, giving you a new best friend.'} 
        name={'CatAdopt'} 
        type={'article'} />
      <section>
        <h1>Find The Purrfect Cats For Adoption Near You Today</h1>
        <p>
          Are you looking to adopt a cat that's the purrfect fit for you and your house? Maybe you have kids
          and you don't know how they'll settle in. Don't worry! You can search for cats of all breeds available
          for adoption with information on their personality traits as well.
        </p>
        <p>
          Adopting a cat isn't as hard as it sounds. And once you take it home, it's even more easier for both of you
          to get used to each other and the cat to get used to your home. Cats for adoption are available in our website
          every month. While we work with local pet centers and shelters to register cats for adoption on our website,
          our team works hard to rescue cats and kittens from the streets near you and prime them up for adoption in their
          forever homes.
        </p>
        <p>
          We take care of all the huddles that come with a rescue cat starting from cleaning them up to giving them vaccines
          and daily meals until we find the perfect match for you and the cat you want to adopt.
        </p>
      </section>
      <section className='FlexBoxCenterAlign'>
        <picture>
          <img 
            className='HomePageCatImage'
            src='/picture-of-a-cute-cat-to-adopt.jpg'
            alt='A cute cat up for adoption' />
        </picture>
      </section>
      <section>
        <h2>Give a cat his or her forever home. Search cats up for adoption from any breed you want and adopt one as soon as today.</h2>
        <p>
          We know you've been thinking of adopting a cat for quite some time now. But maybe you're still wondering of all the processes that goes along with it.
          Worry not! Our easy to use <strong>Cat For Adoption Search Tool</strong> helps you find <strong>a cat to adopt</strong> while providing shelter to cats in need.
          Whether you're looking to adopt a cat near you or other localities, we find you cats from pet centers, stores, and shelters that are close to you.
        </p>
        <span className='FlexBoxCenterAlign'>
          <Link to='/search-cats-for-adoption'>
            Search Cats For Adoption Near You
          </Link>
        </span>
      </section>
    </>
  );
};

export default Home;

// meta title: Thinking Of Adopting A Stray Cat? Adopt A Cat Near You
// meta description: 