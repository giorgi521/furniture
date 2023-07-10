import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }:{text:any}) => <div>{text}</div>;

const Map =()=>{
  const defaultProps = {
    center: {
      lat: 41.6938,
      lng: 44.8015
    },
    zoom: 11
  };

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          text={'საქართველო'}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
