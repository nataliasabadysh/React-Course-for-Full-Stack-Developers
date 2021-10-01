import style from "./style.module.css";

export const ImageGallery = ({ response, onClickItem }) => {
  return (
    <ul className={style.listGallery}>
      {response.map(({ id, webformatURL, largeImageURL }) => (
        <li
          key={id}
          onClick={() => onClickItem(largeImageURL)}
          className={style.listGalleryItem}
        >
          <img
            width="50"
            src={webformatURL}
            alt=""
            className={style.listGalleryItemImage}
          />
        </li>
      ))}
    </ul>
  );
};
