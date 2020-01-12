import React, {useEffect, useState} from 'react';
import { getStoryIds, getStory } from '../services/hnApi';
import {Story} from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';


export const StoriesContainer = () => { 
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  //const test = useInfiniteScroll();
  // it works like componentDidMount & didUpdate so use for initial
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
    console.log('count ', count);
  }, []);


  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0,count).map(storyId => (
          <Story storyId={storyId} key={storyId} />
        ))}
        </StoriesContainerWrapper>
    </>
  )
}
