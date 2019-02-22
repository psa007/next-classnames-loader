# next-classnames-loader

[![npm version](https://img.shields.io/npm/v/next-classnames-loader.svg?style=flat-square)](https://www.npmjs.com/package/next-classnames-loader)

Based on classnames-loader, this webpack loader is made to fix an issue related to next. Depending where you created folder inside next e.g. `src/components`, `src/pages/home/components`, the classnames-loader won't get the same absolute path and will fail to load `classnames/bind`.

Thanks to [@itsmepetrov](https://github.com/itsmepetrov) for the original classnames-loader, checkout the original readme for [details and examples](https://github.com/itsmepetrov/classnames-loader).

### Installation

```
npm install next-classnames-loader -ED
```

## License

[MIT](LICENSE.md)
