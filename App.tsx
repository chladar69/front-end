import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { fetchProducts, mockProducts } from './products';
import type { Category, Product } from './products';
import './index.css';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [cartItemIds, setCartItemIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('cartItemIds');
    return saved ? (JSON.parse(saved) as number[]) : [];
  });
  const [likedIds, setLikedIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('likedIds');
    return saved ? (JSON.parse(saved) as number[]) : [];
  });

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProducts()
      .then((result) => {
        if (result.ok) {
          setAllProducts(result.data);
        } else {
          setError(result.error);
          setAllProducts(mockProducts);
        }
      })
      .catch(() => {
        setError('Ошибка сети');
        setAllProducts(mockProducts);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItemIds', JSON.stringify(cartItemIds));
  }, [cartItemIds]);

  useEffect(() => {
    localStorage.setItem('likedIds', JSON.stringify(likedIds));
  }, [likedIds]);

  const filteredProducts = useMemo(
    () =>
      allProducts.filter((product) => {
        const matchesCategory =
          selectedCategory === 'all'
            ? true
            : product.categories.includes(selectedCategory);
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [allProducts, searchQuery, selectedCategory]
  );

  const favorites = useMemo(
    () => allProducts.filter((product) => likedIds.includes(product.id)),
    [allProducts, likedIds]
  );
  const cartItems = useMemo(
    () => allProducts.filter((product) => cartItemIds.includes(product.id)),
    [allProducts, cartItemIds]
  );
  const cartTotal = useMemo(
    () => cartItems.reduce((sum, product) => sum + product.price, 0),
    [cartItems]
  );

  const filteredFavorites = useMemo(
    () =>
      favorites.filter((product) => {
        const matchesCategory =
          selectedCategory === 'all'
            ? true
            : product.categories.includes(selectedCategory);
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [favorites, selectedCategory, searchQuery]
  );

  const handleAddToCart = (id: number) =>
    setCartItemIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  const handleRemoveFromCart = (id: number) =>
    setCartItemIds((prev) => prev.filter((value) => value !== id));
  const handlePay = () => {
    if (cartItems.length === 0) return;
    alert(`Оплата выполнена. Сумма: $${cartTotal.toFixed(2)}`);
    setCartItemIds([]);
  };

  const handleToggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
    );
  };

  const renderProducts = (products: Product[]) => (
    <div className="catalog__grid">
      {products.map((product) => {
        const liked = likedIds.includes(product.id);
        return (
          <article key={product.id} className="card">
            <img src={product.image} alt={product.title} className="card__image" />
            <h3 className="card__title">{product.title}</h3>
            <p className="card__price">${product.price.toFixed(2)}</p>
            <div className="card__actions">
              <button className="primary-btn" onClick={() => handleAddToCart(product.id)}>
                Купить
              </button>
              <button
                className={liked ? 'secondary-btn secondary-btn--active' : 'secondary-btn'}
                onClick={() => handleToggleLike(product.id)}
              >
                {liked ? 'В wishlist ✓' : 'В wishlist'}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );

  return (
    <div className="page">
      <header className="header">
        <Link to="/" className="header__logo-link">
          <div className="header__logo">
            Gamer's<span>Home</span>
          </div>
        </Link>
        <nav className="header__nav">
          <NavLink to="/" end className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}>
            Магазин
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}>
            Список желаемого
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}>
            О нас
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}>
            Контакты
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn--active' : ''}`}>
            Корзина
          </NavLink>
        </nav>
        <div className="header__cart">
          <Link to="/cart" className="header__cart-link">
            Корзина: <span className="badge">{cartItemIds.length}</span>
          </Link>
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <div className="hero__content">
                    <h1>Gamer's Home — игровой маркетплейс</h1>
                    <p>
                      Лицензионные игры и донат для мобильных игр. Покупайте, добавляйте в
                      wishlist и следите за скидками.
                    </p>
                    <a href="#catalog" className="primary-btn">
                      Перейти в магазин
                    </a>
                  </div>
                  <div className="hero__search">
                    <label className="search-label">
                      Поиск
                      <input
                        type="text"
                        placeholder="Игра, донат..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </label>
                  </div>
                </section>

                <section className="filters">
                  <h2>Категории</h2>
                  <div className="filters__buttons">
                    <button
                      className={selectedCategory === 'all' ? 'filter-btn filter-btn--active' : 'filter-btn'}
                      onClick={() => setSelectedCategory('all')}
                    >
                      Все
                    </button>
                    <button
                      className={selectedCategory === 'pc' ? 'filter-btn filter-btn--active' : 'filter-btn'}
                      onClick={() => setSelectedCategory('pc')}
                    >
                      ПК
                    </button>
                    <button
                      className={selectedCategory === 'mobile' ? 'filter-btn filter-btn--active' : 'filter-btn'}
                      onClick={() => setSelectedCategory('mobile')}
                    >
                      Мобильные
                    </button>
                    <button
                      className={selectedCategory === 'donate' ? 'filter-btn filter-btn--active' : 'filter-btn'}
                      onClick={() => setSelectedCategory('donate')}
                    >
                      Донат
                    </button>
                  </div>
                </section>

                <section className="counter" id="catalog">
                  <p>
                    Найдено товаров: <strong>{filteredProducts.length}</strong>
                  </p>
                  <p>
                    В корзине: <strong>{cartItemIds.length}</strong>
                  </p>
                  <p>
                    Лайков: <strong>{likedIds.length}</strong>
                  </p>
                </section>

                {error && (
                  <div className="error-state" role="alert">
                    <p>{error}</p>
                    <p className="error-state__hint">Показаны товары из резервного каталога.</p>
                  </div>
                )}

                <section className="catalog">
                  {loading ? (
                    <div className="loading-state">
                      <div className="loading-state__spinner" aria-hidden />
                      <p>Загрузка...</p>
                    </div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="empty-state">
                      <p>Ничего не найдено</p>
                      <p className="empty-state__hint">Попробуйте изменить поиск или фильтр.</p>
                    </div>
                  ) : (
                    renderProducts(filteredProducts)
                  )}
                </section>
              </>
            }
          />

          <Route
            path="/wishlist"
            element={
              <section className="catalog">
                <h2>Список желаемого</h2>
                {filteredFavorites.length === 0 ? (
                  <p>По текущим фильтрам ничего нет в списке желаемого.</p>
                ) : (
                  renderProducts(filteredFavorites)
                )}
              </section>
            }
          />

          <Route
            path="/cart"
            element={
              <section className="catalog">
                <h2>Корзина</h2>
                {cartItems.length === 0 ? (
                  <p>Корзина пуста. Добавьте товары из каталога.</p>
                ) : (
                  <>
                    <div className="catalog__grid">
                      {cartItems.map((product) => (
                        <article key={product.id} className="card">
                          <img src={product.image} alt={product.title} className="card__image" />
                          <h3 className="card__title">{product.title}</h3>
                          <p className="card__price">${product.price.toFixed(2)}</p>
                          <div className="card__actions">
                            <button
                              className="secondary-btn secondary-btn--active"
                              onClick={() => handleRemoveFromCart(product.id)}
                            >
                              Удалить
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                    <div className="cart-summary">
                      <p>
                        Итого: <strong>${cartTotal.toFixed(2)}</strong>
                      </p>
                      <button className="primary-btn" onClick={handlePay}>
                        Оплатить
                      </button>
                    </div>
                  </>
                )}
              </section>
            }
          />

          <Route
            path="/about"
            element={
              <section className="about">
                <h2>О Gamer'sHome</h2>
                <p>
                  Gamer'sHome — маркетплейс лицензионных игр и доната. PC, консоль, мобильные и
                  внутриигровые валюты (Clash Royale, Brawl Stars и др.).
                </p>
              </section>
            }
          />

          <Route
            path="/contacts"
            element={
              <section className="about">
                <h2>Контакты</h2>
                <p>Email: support@gamershome.local</p>
                <p>Telegram: @gamershome_support</p>
                <p>Время работы: ежедневно 10:00-22:00</p>
              </section>
            }
          />

          <Route
            path="/privacy"
            element={
              <section className="about">
                <h2>Политика конфиденциальности</h2>
                <p>
                  Мы храним только технические данные, необходимые для работы сайта (например,
                  избранное и корзину в localStorage).
                </p>
              </section>
            }
          />

          <Route
            path="/terms"
            element={
              <section className="about">
                <h2>Пользовательское соглашение</h2>
                <p>
                  Все цифровые товары активируются на стороне официальных платформ. Возврат
                  возможен только до момента активации ключа.
                </p>
              </section>
            }
          />

          <Route
            path="*"
            element={
              <section className="about">
                <h2>404 — Страница не найдена</h2>
                <p>Похоже, вы перешли по неверной ссылке.</p>
                <Link to="/" className="primary-btn">
                  Вернуться в магазин
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gamer'sHome. Все права защищены.</p>
        <p>Игровой маркетплейс.</p>
        <div className="footer__links">
          <Link to="/contacts">Контакты</Link>
          <Link to="/privacy">Политика</Link>
          <Link to="/terms">Условия</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
