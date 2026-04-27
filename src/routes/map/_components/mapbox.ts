import { env } from '$env/dynamic/public';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = env.PUBLIC_MAPBOX_TOKEN ?? '';

const key = Symbol();

export type MBMapContext = {
	getMap: () => mapboxgl.Map | undefined;
};

export { key, mapboxgl };
