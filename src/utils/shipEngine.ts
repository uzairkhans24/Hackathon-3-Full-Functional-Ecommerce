import axios from "axios";

const SHIPENGINE_API_KEY = process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY;
const SHIPENGINE_BASE_URL = "https://api.shipengine.com/v1";

// Function to get shipping rates
export const getShippingRates = async (shipmentDetails: any) => {
  try {
    const response = await axios.post(
      `${SHIPENGINE_BASE_URL}/rates`,
      shipmentDetails,
      {
        headers: {
          "Content-Type": "application/json",
          "API-Key": SHIPENGINE_API_KEY as string,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching shipping rates:", error);
    return null;
  }
};
    