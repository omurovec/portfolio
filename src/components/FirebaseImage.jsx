import React, { useEffect, useState } from 'react';
import { Spinner } from './';
import { storage } from '../util/firebase';

export default function FirebaseImage({ link, alt, ...props }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let subscribed = true;
    storage
      .ref(link)
      .getDownloadURL()
      .then((result) => {
        if (subscribed) {
          setSrc(result);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch from firebase storage.', err);
      });
    return () => {
      subscribed = false;
    };
  }, [link]);

  return src ? <img {...props} alt={alt} src={src} /> : <Spinner />;
}
