export default function(options = {}) {
  let _options = {
    loadUrl: '?do=loadArticles',
    loadFiltersUrl: '?do=loadFilters',
    pageKey: 'pa',
    page: 1
  };

  Object.assign(_options, options);
}
