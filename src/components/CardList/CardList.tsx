import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './CardList.scss';
import { CardProps } from '../../types/types';

const CardList = ({ submited } : { submited: CardProps[] }) => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [data, setData] = useState({});
  const [nextLink, setNextLink] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
      .then((res) => res.json())
      .then((res) => {
        setCards(res.users);
        setNextLink(res.links.next_url);
        setData(res);
        setTotalPages(res.total_pages);
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCards(submited);
  }, [submited]);

  const handleLastPage = async () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
    if (nextLink) {
      const fetchData = await fetch(nextLink);
      const res = await fetchData.json();
      setNextLink(res.links.next_url);
      setCards(cards.concat(...res.users));
      setLoading(false);
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
      </ul>
      {loading && <CircularProgress sx={{ marginBottom: '50px' }} />}
      <Button
        text='Show more'
        func={handleLastPage}
        stateBtn={nextLink}
      />
    </>
  );
};

export default CardList;
