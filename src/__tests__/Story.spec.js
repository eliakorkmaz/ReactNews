import React from 'react';
import { Story } from '../components/Story';
import { render, cleanup, waitForElement} from '@testing-library/react';
import { singularStory } from '../fixtures';
import { getStory, getStoryIds } from '../services/hnApi';
import { STORY_INCREMENT } from '../constants';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
}))

test('renders the story components', async() => { 
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  console.log('getStory', getStory);

  const { getByText, queryByTestId } = render(<Story storyId="1" />);
  await waitForElement(() => [
    queryByTestId('storyaaa'),
     expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: Karl Hadwen'),
  ]);
});
