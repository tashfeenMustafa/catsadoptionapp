import MetaData from './MetaData.js';

const AboutUs = () => {
  return (
    <>
      <MetaData
        title={'Why We Love Cats & Kittens | Our Story & Purpose'}
        description={'As you can tell by now, we love cats! We believe that all cats & kittens deserve a forever home, so help them find one.'}
        name={'CatAdopt'}
        type={'article'} />
      <section>
        <h1>About Us</h1>
        <p>
          You can't deny that cats make our lives so much better! We work on rescuing cats and kittens from various localities.
          These localities might just be where you live as well.
        </p>
        <p>
          We are committed to helping find future cat parents find their furry friends. With our search tool and a wide network of
          shelters, homes, clinics, and stores, we take away all the hassle with adopting a cat for you.
        </p>
      </section>
    </>
  );
}

export default AboutUs;