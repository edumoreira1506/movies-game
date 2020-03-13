import React, { useEffect, useState, Fragment } from 'react';
import { getRanking } from '../../models/Ranking';

import './index.scss';

const Ranking = ({ onClose }) => {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getRanking(setUsers);
  }, []);

  return (
    <div className="RankingBackground">
      <div className="Ranking">
        <span className="Ranking__close-button" onClick={onClose}>X</span>
        <div className="Ranking__header">
          <h2 className="Ranking__area">
            Nome
          </h2>
          <h2 className="Ranking__area">
            Pontuação
          </h2>
          <h2 className="Ranking__area">
            Data
          </h2>
        </div>
        <div className="Ranking__body">
          {
            users.map(user => (
              <Fragment key={user.id}>
                <h2 className="Ranking__area">
                  { user.name }
                </h2>
                <h2 className="Ranking__area">
                  { user.points }%
                </h2>
                <h2 className="Ranking__area">
                  { `${user.createdAt.getDay()}/${user.createdAt.getMonth() + 1}/${user.createdAt.getFullYear()}` }
                </h2>
              </Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default Ranking;
