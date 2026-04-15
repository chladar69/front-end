import { useEffect, useMemo, useState } from 'react';
import { fetchProducts, mockProducts } from './products';
import type { Product, Category } from './products';
import './index.css';

type NavSection = 'catalog' | 'favorites' | 'about';

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [cartCount, setCartCount] = useState(0);
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<NavSection>('catalog');

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

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
     const matchesCategory =
        selectedCategory === 'all'
          ? true
          : product.categories.includes(selectedCategory);
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allProducts, searchQuery, selectedCategory]);

  const favorites = useMemo(
    () => allProducts.filter((p) => likedIds.includes(p.id)),
    [allProducts, likedIds]
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
  const handleAddToCart = () => setCartCount((prev) => prev + 1);

  const handleToggleLike = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleGoToCatalog = () => {
    setActiveSection('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <header className="header">
        <div className="header__logo">Gamer's<span>Home</span></div>
        <nav className="header__nav">
          <button
            className={activeSection === 'catalog' ? 'nav-btn nav-btn--active' : 'nav-btn'}
            onClick={() => setActiveSection('catalog')}
          >
            Магазин
          </button>
          <button
            className={activeSection === 'favorites' ? 'nav-btn nav-btn--active' : 'nav-btn'}
            onClick={() => setActiveSection('favorites')}
          >
            Список желаемого
          </button>
          <button
            className={activeSection === 'about' ? 'nav-btn nav-btn--active' : 'nav-btn'}
            onClick={() => setActiveSection('about')}
          >
            О нас
          </button>
        </nav>
        <div className="header__cart">
          Корзина: <span className="badge">{cartCount}</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero__content">
          <h1>Gamer's Home — игровой маркетплейс</h1>
          <p>
            Лицензионные игры и донат для мобильных игр. Покупайте, добавляйте в wishlist
            и следите за скидками.
          </p>
          <button className="primary-btn" onClick={handleGoToCatalog}>
            Перейти в магазин
          </button>
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

      <main className="main">
        {activeSection === 'catalog' && (
          <>
            <section className="counter">
              <p>Найдено товаров: <strong>{filteredProducts.length}</strong></p>
              <p>В корзине: <strong>{cartCount}</strong></p>
              <p>Лайков: <strong>{likedIds.length}</strong></p>
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
                <div className="catalog__grid">
                  {filteredProducts.map((product) => {
                    const liked = likedIds.includes(product.id);
                    return (
                      <article key={product.id} className="card">
                        <img src={product.image} alt={product.title} className="card__image" />
                        <h3 className="card__title">{product.title}</h3>
                        <p className="card__price">${product.price.toFixed(2)}</p>
                        <div className="card__actions">
                          <button className="primary-btn" onClick={handleAddToCart}>
                            Купить
                          </button>
                          <button
                            className={
                              liked ? 'secondary-btn secondary-btn--active' : 'secondary-btn'
                            }
                            onClick={() => handleToggleLike(product.id)}
                          >
                            {liked ? 'В wishlist ✓' : 'В wishlist'}
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>
          </>
        )}

        {activeSection === 'favorites' && (
          <section className="catalog">
                 <h2>Список желаемого</h2>
            {filteredFavorites.length === 0 ? (
              <p>По текущим фильтрам ничего нет в списке желаемого.</p>
            ) : (
              <div className="catalog__grid">
                {filteredFavorites.map((product) => (
                  <article key={product.id} className="card">
                    <img src={product.image} alt={product.title} className="card__image" />
                    <h3 className="card__title">{product.title}</h3>
                    <p className="card__price">${product.price.toFixed(2)}</p>
                    <div className="card__actions">
                      <button className="primary-btn" onClick={handleAddToCart}>
                        Купить
                      </button>
                      <button
                        className="secondary-btn secondary-btn--active"
                        onClick={() => handleToggleLike(product.id)}
                      >
                        Убрать
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {activeSection === 'about' && (
          <section className="about">
            <h2>О Gamer'sHome</h2>
            <p>
              Gamer'sHome — маркетплейс лицензионных игр и доната. PC, консоль, мобильные
              и внутриигровые валюты (Clash Royale, Brawl Stars и др.).
            </p>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Gamer'sHome. Все права защищены.</p>
        <p>Игровой маркетплейс.</p>
      </footer>
    </div>
  );
}

export default App;