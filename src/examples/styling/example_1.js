// Инлайн CSS

// Плохая производительность ( так как идет в bundle main.chunck.js а не main.style.css)
// Ограниченные возможности (псевдоэлементы, медиа и т. п.)
// сложно дебажить

const Button = () => (
    <button
      type='button'
      style={{
        backgroundColor: '#2196f3',
        color:'#ffffff',
      }}
    >
      Save me!
    </button>
  );