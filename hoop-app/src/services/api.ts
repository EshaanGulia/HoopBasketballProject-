import axios from "axios";

// Use Vite's environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api/sessions";

export const fetchSessions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return [];
  }
};

export const createSession = async (court: string, maxPlayers: number) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/create`, {
      court,
      maxPlayers,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating session:", error);
    throw error;
  }
};

export const joinSession = async (sessionId: string, username: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/join/${sessionId}`, {
      username,
    });
    return response.data;
  } catch (error) {
    console.error("Error joining session:", error);
    throw error;
  }
};

export const leaveSession = async (sessionId: string, username: string) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/leave/${sessionId}`, {
      username,
    });
    return response.data;
  } catch (error) {
    console.error("Error leaving session:", error);
    throw error;
  }
};

export const deleteSession = async (sessionId: string) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete/${sessionId}`);
  } catch (error) {
    console.error("Error deleting session:", error);
    throw error;
  }
};