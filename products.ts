// Игровые категории
export type Category = 'pc' | 'mobile' | 'donate';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  categories: Category[];
};

// Каталог игр и доната
export const gameCatalog: Product[] = [
  {
    id: 1,
    title: 'Battle Cats: Cat Food (5900 единиц)',
    price: 149.99,
    image: 'https://yandex-images.clstorage.net/qTUO95399/a01390sO5u/kA5nkVH2zTGnqtBmSgtGDhmJW1b8MAtrYhh1k0WTyDGRv9gGlUvfzKh0dDtoa80AB1hikqgvpvR5FK9FpbLzO9FWKskSqIoxor6bbAYRSh4MxUYV6XISb2VBeZYuruxB4YTyYuRtorHmdn86P3eFRkNmW4fLVcGwcgLWVoXmtVWpIkamaMuwEo2yuFFxFWMHNcVhY9JWLDVqPzHMPbfJdM-s7lnITLi57nhkKApm6Fx-fV3qym_4mF8Z83ik24pNlzZGtEjSlhi7gbJvRwdqAC3kfUvsWDg4cj8e1yGdzm_EgetR2WCMmtlkVTUUX9FaQ2pr78ly-ZRVB-F_uPG4YYgaUZxo3ZoxkYqGamkfZSkAyFNQ_k8HBHo3O8MAguJy4JfIceZ-vJDMUXQ7KljiU1RJRenfUNapWADAfovrgGG_IWqWavO0MYKNm0xoNEQeC_J6Ys1xIDJuFQPtJJ_iVOSo9lHKWb6b7k5QHw95-nVCVkzTzl_Cs2oS3lmh8ZlMkCV4vnfOpAqMg4l5QRFSOxfORVHQXiADWRUt4xu4_VL1os9C9UWvmNBFeR8MRNJNdFV0z-Z_7LhIOfZ1mPyHXJQ5VYZ78o4Uk4-VSmQqUxkp9nFe-UkvMVkpL_Qfn8BS1LXWWfxun6rnVGQ7FEfvbG9BQ-bte9myXiLdc6PellyXK2agSsGKPbS_klJlDVUqO89Sa8tyMDZNDwvGBZXeeO6syGr8ZZuH9lN_MAtj001_YWfL-FHGi1oQ722v0LNfozpkhlDwpAyBi7RUeBVpLjXebXzFfQEYTzsS6Rug_ljQi9pC7EuJr-VGVzE7Qv5Yc15308hI35R4Ht13g9CMZIwLaYFP3asqmoyIdnkmVDEI70x451MkI0obHPM-p-dB9qncacVrg7HxUVkVHH3TWX1bQcnwU8yvUjvRaYfXmHuDBn2feumtNqiNiXBaAloPD-ZyQNpnNAZTGDDqOL0',
    categories: ['donate', 'mobile'],
  },
  {
    id: 2,
    title: 'The Elder Scrolls V: Skyrim (PC)',
    price: 24.99,
    image: 'https://yandex-images.clstorage.net/qTUO95399/a0139097V7/lhwp3wzklT23uIxsBQhGGE_eVF3sehp6ZRk8ihaU2S3Oq9RTgh7eyK4mJGx1PcoEBgk0l68jpPJ_T68r_6v2NtdaKpFH4Idp87iafRkAG11XiFpB4Xg9C0o9Cvo-o-RH6pXEUcNOjoexZWQBBS_-e2JIbdPRVtm4byzWV5zJikG1IV2bZcu5LIK1qn1_NXgiL8ZUcPF2LhJvCCTSIpjIZvCdzF_YXLuW3H9ZGgNC_0FbYEDI9Hj4hVA06EOc26pYkytrqG_1jz6LsrJcYx1GLDvLTHDebTI4aBMv_yeQ2UrEvvtD6UGlr-V5ZA01R_xcWmxK1uZ_5K9iGPdvi_OKV58CQaNb8KEmhJufcE0GVDsE90R4-3kTJ0QOC-kEsOZU9LTudshPm6jWcHMuG0HqfnVRR9HHfte1WhjAVLD5iHmxAlKkRtagDaWslEpkNGcFI8FQWsNXNzpEKA_WOpDKc_a_zGnsa76JzlZlMRJ7-3FhS3XD2Vn9r0M171Ci0ZVEoTlcqlTjiSiziYh2Wwd6KiPwZ1rtWQgdWy4e3AOD9W_nvPJixWu9tOZuUzIqZ9NRT0BX6PF1xKJdJetMj-mZeIsnQ6ZI0KwTsqu2Tm8IUz0swmdm704MOmYuP8samPxE147Fc9hPpbfbT0gmHU7YVXpKQfPac_-ATCXoXrzPqEuPDmSWT8itNLSYpHdMPWEGM8VzQMt8FjB4BAXSBKv8T9Oj1HTDRLqT525YBjljzX9lc0XB6G3zjmkm3E--6bJ6oT9RomnOsCyInKpmcypvCQLrcXTSUwgFWCQ79RaD7GHBi8dh60WKssp7VDkpe_1mfGxnz9p3345WHfN-s-6tV64ZSqVV7LEftYOXV1IuTScn0HRU3EktAkE9HdcQqMVBy5XTduVhrY3nelo8H2HFfW9XTerWaduJQgL8c6fwmGOoBXikVOqSO7u9kF5sFnATN_VtV_BQKxhEFyrjAKg',
    categories: ['pc'],
  },
  {
    id: 3,
    title: 'Mortal Kombat X (PC)',
    price: 14.99,
    image: 'https://i.ytimg.com/vi/hz2bCONwtDI/maxresdefault.jpg',
    categories: ['pc'],
  },
  {
    id: 4,
    title: 'Купить Metro Exodus - Gold Edition (PC)',
    price: 29.99,
    image: 'https://yandex-images.clstorage.net/qTUO95399/a01390sO5u/kA5nkVH2zTGnqtBmSgtGDhmJW1b8MAtrYhh1wEXHnDiS6NwBmhvfmqkidTttPZwNA1hhkPsqpvJ6Rq9-q_yiPtQOdd0XvNNv8OHGMkIIQwwE1BhH4GoPNnhaKcgBysM9kujib-xrqaDQRVgZE0HSVVhdYd-waOCeRFbMVZ3uqHupI1-JV9-sEZaPtVF4K2wAJ-lvQ8lzNjZfLBLsP5DMQ9qy8XbJXoeIzH50OAlJ2ltDT1TO3XLdhUI7zW-kxoVgjA1-tGjHkgWWnZVIXiFaMy3XWVHAdC4XQwQs4iud1EP1qe1czkWMpcl2ZRQ9au1HclJK9-R04JJ0Ps5ypcqPfp4KYp5a640pgbW1R1IIcDgZ0ndJz10DO20fPvUUodxL0L3MQ-JYqLPqVloKDWD4clNcdPDXffexWjjYUIr3gnm_C1GEYuu6Erq_t2l8CGM_BPR2Yu5qCAFELQ3LM5fIaeiT6F7ifqyM1HZ2LQ9r2m13eFHRz1vhrlMCyV-e7bBroSx7nnvGlRaol6pUbDNtMRbBX0f4TxQ9ex4Q5DOm_2nGndd5_Xi9hu1lSTEeaORmXnhS7Odj161rHuF_sOaSQIkAQpNl1pEKha-maEYtcj0K8np8-W0qBU8ROfM8lP9VxIrTXsB4nJH0fkAaLlrTd0NcSu_aQsy5XDfqe4XshFuiBnmxdNaSGLaJl1tCBFUNDep7W_9eODxsJAvII5Prc-C4yVTeUqaI6k1AESp3wnBYV1XL5mPcmXga_1Ga1YBpkBh1v1HVpgm0r41qbDVgOSvsZkPDWjYtUzMFxxK96Uf5l9dh_nKYr_hlUD84X9FlcFZl6st20KZoAs9Ig8qiZ6ICWb9u7ok4uaiSR2MTez4Xzmdw_kULHHI3J-k3huxn943yZudrvo3-TnkfMkHFcn5yQtXmd96jXhj3U5DxiEKuHF24evGGNa22p3NlD0k_FshEVPB7DBVMDxrdJ6M',
    categories: ['pc'],
  },
  {
    id: 5,
    title: 'Clash Royale: сундук кристаллов (1200 гемов)',
    price: 9.99,
    image: 'https://i.playerok.com/5VNjjpfj9MpUklrkpc9g568ebeAnJ1Jo_qA86EPkVTA/wm:0.8:soea:5:2:0.2/rs:fill:0:1000:0/g:no/quality:99/czM6Ly9wbGF5ZXJvay8vaW1hZ2VzLzFlZWJiN2I0LTNkNDktNjFjMC0xOTE0LWY5ZjI3ZTA3ZDNkZS5wbmc.jpg',
    categories: ['donate', 'mobile'],
  },
  {
    id: 6,
    title: 'Brawl Stars: (170 гемов)',
    price: 11.99,
    image: 'https://playerok.fra1.digitaloceanspaces.com/images/1ed5f342-ef1c-6c90-2d81-9b0d5b1fa5ca.jpg',
    categories: ['donate', 'mobile'],
  },
  {
    id: 7,
    title: 'Brawl Stars: Brawl Pass Plus',
    price: 9.99,
    image: 'https://yandex-images.clstorage.net/qTUO95399/a01390sO5u/kA5nkVH2zTGnqtBmSgtGDhmJW1b8MAtrYhh1lknBlTeT6IsDlRzYnat2JGxoN5wDVFhhnqx-p_N6RvhFpbL0PtdaI8QaqIoxor6bbAYRSh4MxUYV6XISb2VBeZYuruxB4YTyYuRtorHmdn86P3eFRkNmW4fLVcGwcgLWVoXmtVWpIkamaMuwEo2yuFFxFWMHNcVhY9JWLDVqPzHMPbfJdM-s7lnITLi57nhkKApm6Fx-fV3qym_4mF8Z83ik24pNlzZGtEjSlhi7gbJvRwdqAC3kfUvsWDg4cj8e1yGdzm_EgetR2WCMmtlkVTUUX9FaQ2pr78ly-ZRVB-F_uPG4YYgaUZxo3ZoxkYqGamkfZSkAyFNQ_k8HBHo3O8MAguJy4JfIceZ-vJDMUXQ7KljiU1RJRenfUNapWADAfovrgGG_IWqWavO0MYKNm0xoNEQeC_J6Ys1xIDJuFQPtJJ_iVOSo9lHKWb6b7k5QHw95-nVCVkzTzl_Cs2oS3lmh8ZlMkCV4vnfOpAqMg4l5QRFSOxfORVHQXiADWRUt4xu4_VL1os9C9UWvmNBFeR8MRNJNdFV0z-Z_7LhIOfZ1mPyHXJQ5VYZ78o4Uk4-VSmQqUxkp9nFe-UkvMVkpL_Qfn8BS1LXWWfxun6rnVGQ7FEfvbG9BQ-bte9myXiLdc6PellyXK2agSsGKPbS_klJlDVUqO89Sa8tyMDZNDwvGBZXeeO6syGr8ZZuH9lN_MAtj001_YWfL-FHGi1oQ722v0LNfozpkhlDwpAyBi7RUeBVpLjXebXzFfQEYTzsS6Rug_ljQi9pC7EuJr-VGVzE7Qv5Yc15308hI35R4Ht13g9CMZIwLaYFP3asqmoyIdnkmVDEI70x451MkI0obHPM-p-dB9qncacVrg7HxUVkVHH3TWX1bQcnwU8yvUjvRaYfXmHuDBn2feumtNqiNiXBaAloPD-ZyQNpnNAZTGDDqOL0',
    categories: ['mobile', 'donate'],
  },
  {
    id: 8,
    title: 'Phoenix Wright: Ace Attorney Trilogy',
    price: 22.49,
    image: 'https://i.pinimg.com/originals/1e/cc/de/1eccde448a063d6a69c2a452796bd33e.jpg',
    categories: ['pc' ],
  },
];

// Используем тот же массив как mock‑данные
export const mockProducts: Product[] = gameCatalog;

const API_URL = 'https://fakestoreapi.com/products';

export type FetchResult =
  | { ok: true; data: Product[] }
  | { ok: false; error: string };

// Делаем запрос к fakestoreapi (для демонстрации работы с API),
// но для каталога используем свой список игр.
export async function fetchProducts(): Promise<FetchResult> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
    await res.json();
    return { ok: true, data: gameCatalog };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'Не удалось загрузить товары';
    return { ok: false, error: message };
  }
}
