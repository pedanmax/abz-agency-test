import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './CardList.scss';
import { CardProps } from '../../types/types';

const CardList = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [data, setData] = useState({});
  const [nextLink, setNextLink] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const way = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`;

  useEffect(() => {
    fetch(way)
      .then((res) => res.json())
      .then((res) => {
        setCards(res.users);
        setNextLink(res.links.next_url);
        setData(res);
        setTotalPages(res.total_pages);
      });
    console.log('work');
  }, []);

  const handleLastPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
      if (nextLink) {
        fetch(nextLink)
          .then((res) => res.json())
          .then((res) => {
            setNextLink(res.links.next_url);
            setCards(cards.concat(...res.users));
          });
      }
    }
  };

  return (
    <>
      <ul className="cardlist">
        {cards.map((user) => {
          return (
            <li className="cardlist__item card" key={user.id}>
              <Card
                id={user.id}
                email={user.email}
                phone={user.phone}
                photo={user.photo}
                name={user.name}
                position={user.position}
              />
            </li>
          );
        })}
        {cards.length === 0 && <h1 className='loading'> LOADING</h1>}
      </ul>
      <Button
        text='Show more'
        func={handleLastPage}
      />
    </>
  );
};

export default CardList;
