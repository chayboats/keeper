import Image from 'next/image';
import Link from 'next/link';
import styles from './start/internals/styles/start.css';
import Header from '@/pages/start/internals/components/Header/Header';
import Main from '@/pages/start/internals/components/Main';

export default function Start() {
  return (
    <div className="start-page">
      <div className="text-center">
        <div className="cover-container d-flex w-100 p-3 mx-auto flex-column">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
