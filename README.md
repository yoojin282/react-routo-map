# @yoojin282/react-routo-map

Routo Map WebJS for React

## Useage

이 라이브러리를 사용하기 위해서는 **필수적**으로 Routo 지도 API를 불러와야 합니다.<br>
[Routo Map Javscript API](https://www.routo.com/developers/web_js/start.html)<br>
Maker, InfoWindow, Polyline 만 구현되어있습니다.<br>
컴퍼넌트 작성이 처음이기도 하고 <br>
Document 부재 및 Routo Map Api 가 제대로 작동하지 않기에 기능 구현이 쉽지 않습니다.

### Hook을 이용하여 Routo 지도 API 불러오기

```tsx
const Component = () => {
  const { isLoaded } = useRoutoMapInit({
    appKey: "...", // 발급받은 API KEY
  });
  if (!isLoaded) return null;

  return (
    ...
  );
};
```

### TypeScript

타입스크립트 사용자를 위해 [@yoojin282/routo-map-types](https://github.com/yoojin282/routo-map-types) 패키지를 제공합니다.

`tsconfig.json`의 `compilerOptions.types` 속성에 `@yoojin282/routo-map-types` 패키지를 추가하시면 됩니다.

```js
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "@yoojin282/routo-map-types"
    ]
  }
}
```

### Install

```bash
npm install @yoojin282/react-routo-map
```

## Simple Usage

style 에 width, height 필수

### Marker component

```jsx
function RoutoMap() {
  return (
    <Map
      center={{
        latitude: "37.52997778",
        longitude: "126.96464444",
      }}
      style={{ width: "500px", height: "400px" }}
    >
      <Marker position={{ lat: "37.52997778", lng: "126.96464444" }} />
    </Map>
  );
}
```

#### InfoWindow component

```jsx
function RoutoMap() {
  const position = { lat: 37.3595704, lng: 127.105399 };

  return (
    <Map style={{ width: "500px", height: "400px" }} center={position}>
      <InfoWindow
        content="인포윈도우1"
        disableAutoPan={true}
        position={position}
      />
    </Map>
  );
}
```

#### Polyline component

```jsx
function RoutoMap() {
  const path = [
    { lat: 37.3595704, lng: 127.105399 },
    { lat: 37.3585781, lng: 127.1053234 },
  ];

  const handleMapLoad = (map) => {
    const bounds = new routo.maps.LatLngBounds();
    for (let i = 0; i < path.length; i++) {
      bounds.extend({ lat: path[i].lat, lng: path[i].lng });
    }
    map.fitBounds(bounds);
  };

  return (
    <Map style={{ width: "500px", height: "400px" }} onLoad={handleMapLoad}>
      <Polyline path={path} />
    </Map>
  );
}
```

### 예제 프로젝트

[routo-example (nextjs)](https://github.com/yoojin282/routo-example)<br>
