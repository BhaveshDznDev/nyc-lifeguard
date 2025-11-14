import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface TrafficMapProps {
  onBoroughSelect: (borough: string) => void;
  selectedBorough: string;
}

export const TrafficMap = ({ onBoroughSelect, selectedBorough }: TrafficMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSaved, setTokenSaved] = useState(false);
  const [showTraffic, setShowTraffic] = useState(true);
  const [showAQI, setShowAQI] = useState(true);

  // Borough boundaries (approximate coordinates)
  const boroughCoordinates: Record<string, [number, number]> = {
    'Manhattan': [-73.9712, 40.7831],
    'Brooklyn': [-73.9442, 40.6782],
    'Queens': [-73.7949, 40.7282],
    'Bronx': [-73.8648, 40.8448],
    'Staten Island': [-74.1502, 40.5795],
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setTokenSaved(true);
      localStorage.setItem('mapbox_token', mapboxToken);
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      setTokenSaved(true);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !tokenSaved || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-73.935242, 40.730610], // NYC center
        zoom: 10,
        pitch: 45,
        bearing: -17.6,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add traffic layer
      map.current.on('load', () => {
        if (!map.current) return;

        // Add 3D buildings
        map.current.addLayer({
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 12,
          paint: {
            'fill-extrusion-color': '#E5E7EB',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              12,
              0,
              12.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              12,
              0,
              12.05,
              ['get', 'min_height'],
            ],
            'fill-extrusion-opacity': 0.6,
          },
        });

        // Add traffic layer (Mapbox Traffic v1)
        if (showTraffic) {
          map.current.addSource('mapbox-traffic', {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-traffic-v1',
          });

          map.current.addLayer({
            id: 'traffic',
            type: 'line',
            source: 'mapbox-traffic',
            'source-layer': 'traffic',
            paint: {
              'line-width': 3,
              'line-color': [
                'case',
                ['==', ['get', 'congestion'], 'low'], '#10B981',     // Green - low traffic
                ['==', ['get', 'congestion'], 'moderate'], '#F59E0B', // Yellow - moderate
                ['==', ['get', 'congestion'], 'heavy'], '#F97316',    // Orange - heavy
                ['==', ['get', 'congestion'], 'severe'], '#EF4444',   // Red - severe
                '#9CA3AF', // Gray - default
              ],
            },
          });
        }

        // Add borough markers
        Object.entries(boroughCoordinates).forEach(([borough, coords]) => {
          const el = document.createElement('div');
          el.className = 'borough-marker';
          el.style.cssText = `
            width: 40px;
            height: 40px;
            background: ${selectedBorough === borough ? '#3B82F6' : '#FFFFFF'};
            border: 2px solid ${selectedBorough === borough ? '#1D4ED8' : '#E5E7EB'};
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            transition: all 0.2s;
          `;
          el.innerHTML = '📍';
          el.addEventListener('click', () => onBoroughSelect(borough));

          new mapboxgl.Marker({ element: el })
            .setLngLat(coords as [number, number])
            .addTo(map.current!);

          // Add popup
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<strong>${borough}</strong>`);
          
          el.addEventListener('mouseenter', () => {
            popup.setLngLat(coords as [number, number]).addTo(map.current!);
          });
          el.addEventListener('mouseleave', () => {
            popup.remove();
          });
        });
      });

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [tokenSaved, mapboxToken, showTraffic, selectedBorough, onBoroughSelect]);

  // Update traffic layer visibility
  useEffect(() => {
    if (map.current && map.current.getLayer('traffic')) {
      map.current.setLayoutProperty(
        'traffic',
        'visibility',
        showTraffic ? 'visible' : 'none'
      );
    }
  }, [showTraffic]);

  if (!tokenSaved) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">MapBox Token Required</h3>
            <p className="text-sm text-gray-600 mb-4">
              To display the interactive traffic map, please enter your MapBox public token.
            </p>
            <ol className="text-sm text-gray-600 mb-4 space-y-1 list-decimal list-inside">
              <li>Go to <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a></li>
              <li>Create an account or sign in</li>
              <li>Find your public token in the Tokens section</li>
              <li>Paste it below</li>
            </ol>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91ciLdG9rZW4..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={handleTokenSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Token
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">NYC Traffic Congestion Map</h3>
          <p className="text-sm text-gray-600">
            Interactive real-time traffic data • Click borough markers for details
          </p>
        </div>
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">Live</span>
        </div>
      </div>

      {/* Layer toggles */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setShowTraffic(!showTraffic)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            showTraffic 
              ? "bg-blue-100 text-blue-700" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Traffic Flow
        </button>
        <button
          onClick={() => setShowAQI(!showAQI)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            showAQI 
              ? "bg-blue-100 text-blue-700" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Air Quality
        </button>
      </div>

      {/* Map Container */}
      <div className="relative h-[500px] rounded-xl overflow-hidden border border-gray-200">
        <div ref={mapContainer} className="absolute inset-0" />
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
          <div className="text-xs font-semibold text-gray-900 mb-2">Traffic Congestion</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 rounded-sm bg-green-500" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Low</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 rounded-sm bg-yellow-500" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Moderate</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 rounded-sm bg-orange-500" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Heavy</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 rounded-sm bg-red-500" />
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-900">Severe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
