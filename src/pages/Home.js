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
          and you don't know how they'll settle in. Don't worry! You can search for cats for adoption
          with information on their personality traits as well as where they originated from.
          We also maintain impeccable health records for each cat adopted from us, whether online or directly
          from our cat adoption center.
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
      <section>
        <h2>Our Search Tool helps you find cats for adoption near your area</h2>
        <p>
          Not only will you be able to find cats for adoption around your locality, you will also find cats from other areas
          no matter where you live. Our furry friends stay with us while we help them find a permanent home. With our search tool 
          finding a cat to adopt has never been easier.
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
        <h2>Give a cat his or her forever home! Search cats for adoption from a wide variety of selections and adopt one as soon as today.</h2>
        <p>
          We know you've been thinking of adopting a cat for quite some time now. But maybe you're still wondering of all the processes that goes along with it.
          Worry not! Our easy to use <strong>Cat For Adoption Search Tool</strong> helps you find <strong>a cat to adopt</strong> while providing shelter to cats in need.
          Whether you're looking to adopt a cat near you or other localities, we find you cats from pet centers, stores, and shelters that are close to you.
        </p>
      </section>
      <section>
        <h2>Already adopted a cat but don't know the next steps? We've got you! </h2>
        <p>
          Hey, we get it. Adopting a cat for the first time can be overwhelming. Starting from how to clean them, feed them,
          and make their lives entertaining. This is why we've prepared this <a href="/">How To Guide For First Time Cat Parents</a>.
        </p>
        <p>
          Cat adoption can be difficult for both the parent and the adopted cat themselves, specially if they were stray cats. 
          Most cats for adoption may be traumatized or have had a difficult life before we rescued them. Naturally, it implies that you
          these cats need a stable, safe, and loving environment and an enriching life moving forward. That's where you come in.
        </p>
        <p>Click on the link below to search cats for adoption in your area today.</p>
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