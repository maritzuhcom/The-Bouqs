import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';
import { Card, PageHeader } from 'antd';

const CategoryNames = ({ names }) => {
  return (
    <Fragment>
      <PageHeader title="Bouquets" subTitle="Pick one to see more details" />
      <CatContaier>
        {names.map(({ name, path }) => {
          return (
            <Link key={name} to={path}>
              <Card
                hoverable
                style={{
                  width: '240px',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '16px',
                  fontSize: '1.5em',
                }}
              >
                {name}
              </Card>
            </Link>
          );
        })}
      </CatContaier>
    </Fragment>
  );
};

export default CategoryNames;

CategoryNames.propTypes = {
  names: arrayOf(
    shape({
      name: string.isRequired,
      path: string.isRequired,
    }).isRequired
  ).isRequired
};

const CatContaier = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

// const CatTitle = styled.div`
//   width: 100vw;
//   height: 3em;
//   color: #8da290;
//   font-size: 20px;
// `;
