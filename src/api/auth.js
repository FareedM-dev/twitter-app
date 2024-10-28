const API = process.env.REACT_APP_API_URL

export const signIn = async (credentials) => {
  try {
    const response = await fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    return response.json();
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
};

export const signUp = async (credentials) => {
  try {
    const response = await fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    return response.json();
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};
