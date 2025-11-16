import { useEffect, useState } from 'react';

interface Paper {
  id: number;
  title: string;
  authors: string[];
}

export default function Research() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/research')
      .then(res => res.json())
      .then(data => {
        setPapers(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching research:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Research</h1>
      <div className="grid gap-6">
        {papers.map(paper => (
          <div key={paper.id} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-3">{paper.title}</h2>
            <p className="text-gray-600">By: {paper.authors.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

