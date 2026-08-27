import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const categories = [
    {
      id: 1,
      name: "Kids",
      image: "https://i.pinimg.com/736x/e1/04/77/e1047742613d4809539c26b6aa714605.jpg",
      path: "/",
    },
    {
      id: 2,
      name: "Men",
      image: "https://i.pinimg.com/736x/8b/1a/07/8b1a07ca22c92f6b1af74651f597a797.jpg",
      path: "/men",
    },
    {
      id: 3,
      name: "Occasions",
      image: "https://i.pinimg.com/736x/6a/93/ba/6a93bac58b201ba55a70963a7d275550.jpg",
      path: "/",
    },
    {
      id: 4,
      name: "Women",
      image: "https://i.pinimg.com/736x/92/03/86/920386338225079e639ff7825cd4378d.jpg",
      path: "/",
    },
    {
      id: 5,
      name: "Accessories",
      image: "https://i.pinimg.com/1200x/f7/94/90/f7949041864fed2fdc522fd5e7e2917d.jpg",
      path: "/",
    },
  ];

  return (
    <div className="home-page">
      
      <header className="hero">
        <h1>
          Where style speaks,<br />
          trends resonate
        </h1>
      </header>

      {/* Category Cards Section using List Rendering */}
      <main className="home-section">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={category.path} 
            className="home-card"
          >
            <img src={category.image} alt={category.name} />
            <div className="home-card-label">{category.name}</div>
          </Link>
        ))}
      </main>
    </div>
  );
}

export default Home;
