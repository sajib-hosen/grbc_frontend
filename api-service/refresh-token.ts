const refreshToken = async () => {
  try {
    const response = await fetch("/auth/refresh-token", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    throw error;
  }
};

export default refreshToken;
