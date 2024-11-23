
import React,{useState,useEffect} from 'react';
import Image from 'next/image';





const ForthCarousel = ({ data }) => {


  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchPosts();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
    <div className="relative mb-4 w-full overflow-hidden">
      {/* Scrolling Container */}
      <div className="flex gap-6 animate-scroll items-center w-max" id="carousel">
        {posts.map((items, index) => (
          <div
            key={index}
            className="w-full aspect-square relative flex justify-center"
          >
            <Image src={items.url} alt={`post ${index}`} width={226} height={340} />
          </div>
        ))}
        {posts.map((items, index) => (
          <div
            key={`${index}-duplicate`}
            className="w-full aspect-square relative flex justify-center"
          >
            <Image src={items.url} alt={`post ${index}`} width={226} height={340} />
          </div>
        ))}
      </div>


      <style jsx>{`
        #carousel {
          animation: scroll 30s linear infinite;
        }

        #carousel:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>


    </div>
  );
};

export default ForthCarousel;
