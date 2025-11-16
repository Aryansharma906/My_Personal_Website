import { useEffect, useState } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
}

export default function Music() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/music')
      .then(res => res.json())
      .then(data => {
        setTracks(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching music:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Music</h1>
      <div className="grid gap-4">
        {tracks.map(track => (
          <div key={track.id} className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition">
            <div>
              <h3 className="text-xl font-semibold">{track.title}</h3>
              <p className="text-gray-600">{track.artist} • {track.genre}</p>
            </div>
            <span className="text-gray-500">{track.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

