import React from 'react';
import { gql, useQuery } from '@apollo/client';

const SongList = () => {
  const { loading, error, data } = useQuery(SONG);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>data: {data && data.songs.map((song) => song.title)}</div>;
};
const SONG = gql`
  query GetSongs {
    songs {
      title
    }
  }
`;

export default SongList;
