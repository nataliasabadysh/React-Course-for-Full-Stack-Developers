import style from "./style.module.css";

export const ImageGallery = ({ response, onSelectImage, id, history }) => {


  console.log('history', history)
  return (
    <ul className={style.listGallery}>
      {response &&
        response.map(({ id, webformatURL, largeImageURL }) => (
          <li
            key={id}
            className={style.listGalleryItem}
          >
            <img
              onClick={() => onSelectImage(largeImageURL)}
              width="50"
              src={webformatURL}
              alt=""
              className={style.listGalleryItemImage}
            />
           <h1 onClick={()=> history.push(`image/${id}`)}>{id}</h1>
          </li>
        ))}
    </ul>
  );
};
