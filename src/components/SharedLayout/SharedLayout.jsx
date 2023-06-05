import Header from 'components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  // let elements = document.querySelectorAll('.link');
  // console.log('element' + elements);
  // for (let i = 0; i < elements.length; i++) {
  //   console.log('element' + elements[i]);
  //   /*прокручиваем в цикле все элементы*/
  //   elements[i].addEventListener('click', function () {
  //     /*при клике на элемент
  //      */ for (let i = 0; i < elements.length; i++) {
  //       elements[i].classList.remove('active'); /*удаляем у всех class active*/
  //     }
  //     this.classList.add(
  //       'active'
  //     ); /*добавляем class active по которому кликнули */
  //   });
  // }
  return (
    <>
      <Header>
        <nav className={css.navigation}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/movies">
            Movies
          </Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
