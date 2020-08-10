import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CatNames from './CategoryNames';
import {
  selectCategoryNamesWithPath,
  selectCategoryLoading,
} from '../selectors/root';

import pampas from '../../assets/pampas.jpg';

const Home = () => {
  const categoryNameWithPaths = useSelector(selectCategoryNamesWithPath);
  const isLoading = useSelector(selectCategoryLoading);

  return (
    <div>
      <ImageConatiner />
      {isLoading ? <Spin /> : <CatNames names={categoryNameWithPaths} />}
    </div>
  );
};

export default Home;

const ImageConatiner = styled.div`
  width: 100vw;
  height: 75vh;
  background-color: #f2cbbb;
  background-image: url(${pampas});
  background-position: center;
  background-size: cover;
`;
