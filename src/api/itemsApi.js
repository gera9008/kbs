const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getItems = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to fetch items:", error);
        throw error;
    }
};