export const loginUser = async (data) => {
  const res = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer token"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};