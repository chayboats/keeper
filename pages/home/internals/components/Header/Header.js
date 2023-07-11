import MenuItem from '../MenuItem';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header(props) {
  const router = useRouter();

  const { dropdownClass, clickProfileImage, createNote } = props;
  const [profileImage, setProfileImage] = useState(undefined);

  async function getImage() {
    try {
      const imageData = await fetch('https://api.slingacademy.com/v1/sample-data/photos');
      const jsonImageData = await imageData.json();
      const jsonPhotos = jsonImageData.photos;
      const randomPhoto = randomElementFromArray(jsonPhotos);
      setProfileImage(randomPhoto.url);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getImage();
  }, []);

  function randomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function logout() {
    router.push('/');
  }

  if (profileImage === undefined) {
    return <h1 className="loading-screen">Loading...</h1>;
  }

  return (
    <div>
      <header className="header">
        <h1>Keeper</h1>
        <div className="profile">
          <img
            src={profileImage}
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
            onClick={clickProfileImage}
          />
        </div>
      </header>
      <div className={dropdownClass}>
        <MenuItem
          itemText="+ Create Note"
          onItemClick={createNote}
          itemClass="create-note"
          lineClass="line"
        />
        <MenuItem
          itemText="Logout"
          onItemClick={logout}
          itemClass="logout"
          lineClass="hide"
        />
      </div>
    </div>
  );
}
