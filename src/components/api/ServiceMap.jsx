import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

    const containerStyle = {
        width: '100%',
        height: '500px',
        };

    const center = {
        lat: 33.836073, 
        lng: -83.352849,
    };

    export default function ServiceMap() {
        const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

        return (
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
                    {/* Example markers */}
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        );
    }
