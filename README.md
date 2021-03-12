# SEC backend

[Challenge instructions](https://github.com/ZXVentures/ar-sec-coding-challenge/blob/main/back-end.md)

## How to run the code

```
npm install
npm start
```

## Endpoint

`POST /localhost:4000/dev/findTwoBeers`

Body example:

```
{
  beers: [15, 20, 25, 39, 12, 18, 19, 21],
  target: 35
}

```

Response examples:

If a valid sum was found:
`[0, 1]`
If a valid sum was not found:
`[]`
