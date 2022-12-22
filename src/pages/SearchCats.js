import { useEffect, useState, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import MetaData from './MetaData.js';
import './Layout.css'

const SearchCats = () => {
  const API_KEY = 'live_4UNay08IDGkd56K0gpHgtLy1UYSdM58ttL7esa6OMajSIcgK37Zjxqz7FNOiyBXj'
  const API_URL = 'https://api.thecatapi.com/';

  const [page, setPage] = useState(1);
  const handlePaginationChange = (event, value) => {
    setPage(value);
  }

  const [breeds, setBreeds] = useState([]);
  const [cats, setCats] = useState([]);
  const [breedId, setBreedId] = useState('abys');
  const [paginationCount, setPaginationCount] = useState(0);
  const [paginationLimit, setPaginationLimit] = useState(0);

  const onSelectChange = (event) => {
    console.log(event.target.value)
    setBreedId(event.target.value);
    setPage(1);
  };

  const onAllBreeds = () => {
    setBreedId(null);
    setPage(1);
  }

  // get cats
  const getCats = useCallback(() => {
    let getCatsURL = `${API_URL}v1/images/search?order=ASC&size=thumb&has_breeds=1&include_breeds=true&include_categories=true&limit=9&page=${page - 1}`;
    if (breedId !== null) {
      getCatsURL = getCatsURL + `&breed_ids=${breedId}`;
    }

    axios.get(getCatsURL,
      {
        headers: {
          'x-api-key': API_KEY
        }
      }  
    )
    .then((response) => {
      console.log(response);
      setPaginationCount(parseInt(response.headers["pagination-count"]));
      setPaginationLimit(parseInt(response.headers["pagination-limit"]));
      setCats(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [API_URL, API_KEY, page, breedId])
  
  // get all breeds
  const getAllBreeds = useCallback(() => {
    const getAllBreedsURL = API_URL + 'v1/breeds';
    axios.get(getAllBreedsURL, 
      {
        headers: {
          'x-api-key': API_KEY
        }
      }
    )
    .then((response) => {
      console.log(response);
      setBreeds(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }, [API_URL, API_KEY]);

  useEffect(() => {
    getAllBreeds();
    getCats();
  }, [getAllBreeds, getCats]);

  return (
    <>
      <MetaData
        title={'Searching Where You Can Adopt A Cat Near You? Search No More!'}
        description={'With our Cat Adoption search tool, you can easily find where to adopt a cat near you and what kind of cat to get. Find cat breeds and characteristics too.'}
        name={'CatAdopt'}
        type={'article'} />
      <section style={{ textAlign: 'center' }}>
        <h1>Wondering where to adopt a cat near you? Find the purrfect cat for you and your home using our search tool</h1>
        <p>
          We know it can be cumbersome to figure out where to find cats for adoptions. Cats and kittens need shelter
          and safety all over the world, let alone your neighborhood. But let's start with right here. You can find
          cats and kittens in need of adoption near you from local shelters, stores, and pet centers.
        </p>
        <p>
          You can also easily see each cat's purrsenality through our search tool. Search from our large database of cats
          to give a homeless cat or kitten near you a forever home.
        </p>
      </section>
      <section>
        <form className='FlexContainer'>
          <label htmlFor={'select-breed'}>{'Select A Cat Breed To Adopt'}</label>
          <select onChange={onSelectChange} name={'select-breed'} id={'select-breed'}>
            {
              breeds && breeds.map((breed) => {
                return (
                  <option key={breed.id} value={breed.id}>{breed.name}</option>
                )
              })
            }
          </select>
          <button type='button' onClick={onAllBreeds}>See All Breeds</button>
        </form>
      </section>
      <section className='GridContainer'>
        {
          cats && cats.map(cat => {
            return (
              <div key={cat.id} className='GridItem'>
                <div className='FlexContainer'>
                  <figure>
                    <img 
                      className='CatImage'  
                      src={cat.url} 
                      alt={cat.breeds[0] ? cat.breeds[0].name : 'Cat'} />
                  </figure>
                  <span>
                    <strong>Breed: </strong>{cat.breeds[0] ? cat.breeds[0].name : 'Not Specified'}
                  </span>
                  <span>
                    <strong>Life Span: </strong>{cat.breeds[0] ? cat.breeds[0].life_span : 'Not Specified'}
                  </span>
                  <span>
                    <strong>Adaptability: </strong>{cat.breeds[0] ? `${cat.breeds[0].adaptability} years` : 'Not Specified'}
                  </span>
                  <span>
                    <strong>Affection: </strong>{cat.breeds[0] ? `${cat.breeds[0].affection_level}/5` : 'Not Specified'}
                  </span>
                  <span>
                    <strong>Child Friendly: </strong>{cat.breeds[0] ? `${cat.breeds[0].child_friendly}/5` : 'Not Specified'}
                  </span>
                  <span>
                    <strong>Energy Levels: </strong>{cat.breeds[0] ? `${cat.breeds[0].energy_level}/5` : 'Not Specified'}
                  </span>
                  <button style={{marginTop: '3%'}} type='button'>Adopt A Cat</button>
                </div>
              </div>
            )
          })
        }
      </section>
      <section className="PaginationButtons">
        <Stack spacing={2}>  
          <Pagination 
            count={paginationLimit ? parseInt(Math.ceil(1/paginationLimit * paginationCount)) : 10} 
            page={page} 
            onChange={handlePaginationChange} />
        </Stack>
      </section>
    </>
  );
}

export default SearchCats;