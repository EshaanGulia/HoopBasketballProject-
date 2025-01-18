import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";

// Custom Red Icon
const redIcon = new Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Anchor point of the icon
});

const MapSection: React.FC = () => {
  // Coordinates for locations
  const activityCenter: LatLngTuple = [32.9891, -96.7500]; // Indoor Court: Activity Center
  const utdOutdoorCourts: LatLngTuple = [32.9824, -96.7515]; // Outdoor Court: UTD Outdoor Courts
  const northsideBuilding13: LatLngTuple = [32.9843, -96.7595]; // Updated Cecil Drive coordinates
  const residenceHallNorth: LatLngTuple = [32.9872, -96.7485]; // Outdoor Court: Residence Hall North

  // State to toggle court types
  const [showIndoor, setShowIndoor] = useState(true); // Default: show indoor courts

  // Handle marker clicks to open Google Maps
  const handleMarkerClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      id="map-section"
      style={{
        height: "80vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Left: Map */}
      <Box
        sx={{
          width: "60%",
          maxWidth: "600px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.2)",
          position: "relative",
        }}
      >
        <MapContainer
          center={activityCenter}
          zoom={16}
          style={{
            height: "400px",
            width: "100%",
            borderRadius: "8px",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* Indoor Markers */}
          {showIndoor && (
            <>
              {/* Marker: Activity Center */}
              <Marker
                position={activityCenter}
                icon={redIcon}
                eventHandlers={{
                  click: () =>
                    handleMarkerClick(
                      "https://www.google.com/maps/search/Activity+Center,+UTD/@32.9891,-96.7500"
                    ),
                }}
              >
                <Popup>Click the marker to get directions to the Activity Center (Indoor Court).</Popup>
              </Marker>
            </>
          )}

          {/* Outdoor Markers */}
          {!showIndoor && (
            <>
              {/* Marker: UTD Outdoor Courts */}
              <Marker
                position={utdOutdoorCourts}
                icon={redIcon}
                eventHandlers={{
                  click: () =>
                    handleMarkerClick(
                      "https://www.google.com/maps?q=UTD+Outdoor+Courts/@32.9824,-96.7515"
                    ),
                }}
              >
                <Popup>Click the marker to get directions to UTD Outdoor Courts.</Popup>
              </Marker>

              {/* Marker: Residence Hall North */}
              <Marker
                position={residenceHallNorth}
                icon={redIcon}
                eventHandlers={{
                  click: () =>
                    handleMarkerClick(
                      "https://www.google.com/maps?q=Residence+Hall+North,+UTD/@32.9872,-96.7485"
                    ),
                }}
              >
                <Popup>Click the marker to get directions to Residence Hall North.</Popup>
              </Marker>

              {/* Marker: Northside Building 13 */}
              <Marker
                position={northsideBuilding13}
                icon={redIcon}
                eventHandlers={{
                  click: () =>
                    handleMarkerClick(
                      "https://www.google.com/maps?q=850+Cecil+Dr,+Richardson,+TX+75080"
                    ),
                }}
              >
                <Popup>Click the marker to get directions to Northside Building 13 (Outdoor Court).</Popup>
              </Marker>
            </>
          )}
        </MapContainer>

        {/* Toggle Buttons */}
        <Box
          sx={{
            marginTop: "10px",
            padding: "10px 0",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#000",
            borderRadius: "8px",
          }}
        >
          <ButtonGroup>
            <Button
              onClick={() => setShowIndoor(true)}
              sx={{
                fontSize: "0.875rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: showIndoor ? "bold" : "normal",
                textTransform: "capitalize",
                color: showIndoor ? "#fff" : "#000",
                background: showIndoor
                  ? "linear-gradient(45deg, #ff5f6d, #ffc371)"
                  : "#fff",
                border: "1px solid #ccc",
                boxShadow: showIndoor
                  ? "0px 4px 6px rgba(0, 0, 0, 0.2)"
                  : "none",
                "&:hover": {
                  background: showIndoor
                    ? "linear-gradient(45deg, #ff5f6d, #ffc371)"
                    : "#f5f5f5",
                },
                transition: "all 0.3s ease",
                padding: "8px 16px",
                borderRadius: "20px",
              }}
            >
              Indoor Courts
            </Button>
            <Button
              onClick={() => setShowIndoor(false)}
              sx={{
                fontSize: "0.875rem",
                fontFamily: "Poppins, sans-serif",
                fontWeight: !showIndoor ? "bold" : "normal",
                textTransform: "capitalize",
                color: !showIndoor ? "#fff" : "#000",
                background: !showIndoor
                  ? "linear-gradient(45deg, #ff5f6d, #ffc371)"
                  : "#fff",
                border: "1px solid #ccc",
                boxShadow: !showIndoor
                  ? "0px 4px 6px rgba(0, 0, 0, 0.2)"
                  : "none",
                "&:hover": {
                  background: !showIndoor
                    ? "linear-gradient(45deg, #ff5f6d, #ffc371)"
                    : "#f5f5f5",
                },
                transition: "all 0.3s ease",
                padding: "8px 16px",
                borderRadius: "20px",
              }}
            >
              Outdoor Courts
            </Button>
          </ButtonGroup>
        </Box>
      </Box>

      {/* Right: Description */}
      <Box
        sx={{
          marginLeft: "20px",
          maxWidth: "35%",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          Find Your Game
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: "1.8" }}>
          Discover the best basketball courts at UTD and join or create your own sessions. Use the
          map to locate courts and get directions to the action.
        </Typography>
      </Box>
    </div>
  );
};

export default MapSection;